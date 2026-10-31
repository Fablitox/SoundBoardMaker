const state={language:localStorage.getItem('sbm-language')==='en'?'en':'fr'};const langButton=document.getElementById('language');
function applyLanguage(){document.querySelectorAll('[data-href-fr][data-href-en]').forEach(el=>{el.href=state.language==='fr'?el.dataset.hrefFr:el.dataset.hrefEn});document.documentElement.lang=state.language;langButton.textContent=state.language==='fr'?'EN':'FR';document.querySelectorAll('[data-fr][data-en]').forEach(el=>{el.textContent=el.dataset[state.language]});refreshReleaseText()}
langButton.addEventListener('click',()=>{state.language=state.language==='fr'?'en':'fr';localStorage.setItem('sbm-language',state.language);applyLanguage()});
// Confirmed public release: usable links remain available if GitHub is temporarily unreachable.
const fallbackRelease={tag_name:'1.0.0',html_url:'https://github.com/Fablitox/SoundboardMaker/releases/tag/1.0.0',assets:[{name:'SoundboardMaker-Setup-1.0.0.exe',browser_download_url:'https://github.com/Fablitox/SoundboardMaker/releases/download/1.0.0/SoundboardMaker-Setup-1.0.0.exe'},{name:'com.soundboardmaker.streamdeck.streamDeckPlugin',browser_download_url:'https://github.com/Fablitox/SoundboardMaker/releases/download/1.0.0/com.soundboardmaker.streamdeck.streamDeckPlugin'}]};
let published=fallbackRelease,releaseLookupFailed=false;
const releaseStatus=document.getElementById('release-status'),downloads=document.getElementById('downloads');
const isInstaller=asset=>/^SoundboardMaker-Setup-.*\.exe$/i.test(asset.name);
const isPlugin=asset=>/\.streamDeckPlugin$/i.test(asset.name);
function isStableAppRelease(r){return !!r&&!r.draft&&!r.prerelease&&/^v?\d+\.\d+\.\d+(?:\.\d+)?$/.test(r.tag_name)&&Array.isArray(r.assets)&&r.assets.some(isInstaller)}
function refreshReleaseText(){
  const fr=state.language==='fr';
  const availableText=fr?'Soundboard Maker '+published.tag_name+' est disponible !':'Soundboard Maker '+published.tag_name+' is now available!';
  for(const id of ['release-heading','hero-version'])document.getElementById(id).textContent=availableText;
  releaseStatus.textContent=releaseLookupFailed?(fr?'Les informations GitHub ne peuvent pas être actualisées pour le moment. La version 1.0.0 reste disponible ci-dessous.':'GitHub information cannot be refreshed right now. Version 1.0.0 remains available below.'):(fr?'Téléchargez Soundboard Maker pour Windows et découvrez toutes ses fonctionnalités.':'Download Soundboard Maker for Windows and explore its features.');
  document.getElementById('release-notes').href=published.html_url;
  downloads.textContent='';
  for(const asset of published.assets.filter(a=>isInstaller(a)||isPlugin(a))){
    const a=document.createElement('a');a.className='primary';a.href=asset.browser_download_url;
    a.dataset.umamiEvent=isInstaller(asset)?'download-installer':'download-streamdeck-plugin';
    a.textContent=isInstaller(asset)?(fr?'Télécharger pour Windows':'Download for Windows'):(fr?'Plugin Stream Deck':'Stream Deck plugin');downloads.append(a);
  }
  downloads.hidden=false;
}
async function loadRelease(){
  try{
    const response=await fetch('https://api.github.com/repos/Fablitox/SoundBoardMaker/releases?per_page=20',{headers:{Accept:'application/vnd.github+json'},signal:AbortSignal.timeout(8000)});
    if(!response.ok)throw new Error('Release lookup unavailable');
    const data=await response.json();
    if(!Array.isArray(data))throw new Error('Unexpected release response');
    const latest=data.find(isStableAppRelease);if(!latest)throw new Error('No app release in response');
    published=latest;releaseLookupFailed=false;
  }catch(_){releaseLookupFailed=true}
  refreshReleaseText();
}
applyLanguage();loadRelease();

/* Screenshots are now available in the public repository. Display the gallery
   immediately, with independently loading images instead of an all-or-nothing gate. */
const shotSrc=(key,language)=>'screenshots/'+key+'_'+language.toUpperCase()+'.png?v=20261030-7';
const shotDialog=document.getElementById('shot-dialog');
const shotDialogImage=document.getElementById('shot-dialog-image');
const shotDialogTitle=document.getElementById('shot-dialog-title');
const shotDialogCaption=document.getElementById('shot-dialog-caption');

function syncScreenshots(){
  for(const img of document.querySelectorAll('[data-shot]')){
    img.src=shotSrc(img.dataset.shot,state.language);
    const title=img.closest('.shot-card, .featured-shot')?.querySelector('strong')?.textContent||'Soundboard Maker';
    img.alt=title+' — Soundboard Maker ('+state.language.toUpperCase()+')';
  }
  if(shotDialog.open && shotDialogImage.dataset.key){
    shotDialogImage.src=shotSrc(shotDialogImage.dataset.key,state.language);
    shotDialogCaption.textContent=state.language==='fr'?'Capture réelle du logiciel':'Actual application screenshot';
  }
}
langButton.addEventListener('click',syncScreenshots);
for(const btn of document.querySelectorAll('[data-shot-open]')){
  btn.addEventListener('click',()=>{
    const key=btn.dataset.shotOpen;
    const label=btn.closest('.featured-shot, .shot-card')?.querySelector('strong')?.textContent||'Soundboard Maker';
    shotDialogImage.dataset.key=key;
    shotDialogImage.src=shotSrc(key,state.language);
    shotDialogImage.alt=label;
    shotDialogTitle.textContent=label;
    shotDialogCaption.textContent=state.language==='fr'?'Capture réelle du logiciel':'Actual application screenshot';
    shotDialog.showModal();
  });
}
document.getElementById('shot-dialog-close').addEventListener('click',()=>shotDialog.close());
shotDialog.addEventListener('click',event=>{if(event.target===shotDialog)shotDialog.close()});
syncScreenshots();
