const state={language:localStorage.getItem('sbm-language')==='en'?'en':'fr'};const langButton=document.getElementById('language');
function applyLanguage(){document.documentElement.lang=state.language;langButton.textContent=state.language==='fr'?'EN':'FR';document.querySelectorAll('[data-fr][data-en]').forEach(el=>{el.textContent=el.dataset[state.language]});refreshReleaseText()}
langButton.addEventListener('click',()=>{state.language=state.language==='fr'?'en':'fr';localStorage.setItem('sbm-language',state.language);applyLanguage()});
let published=null;const releaseStatus=document.getElementById('release-status'),downloads=document.getElementById('downloads');
function refreshReleaseText(){if(!published)return;releaseStatus.textContent=state.language==='fr'?'Dernière version stable publiée : '+published.tag_name:'Latest stable version: '+published.tag_name;downloads.textContent='';const items=published.assets.filter(a=>/^SoundboardMaker-Setup-.*\.exe$/i.test(a.name)||/\.streamDeckPlugin$/i.test(a.name));for(const asset of items){const a=document.createElement('a');a.className='primary';a.href=asset.browser_download_url;a.textContent=/\.exe$/i.test(asset.name)?(state.language==='fr'?'Installer Windows':'Windows installer'):'Stream Deck Plugin';downloads.append(a)}downloads.hidden=items.length===0}
async function loadRelease(){try{const response=await fetch('https://api.github.com/repos/Fablitox/SoundBoardMaker/releases?per_page=20',{headers:{Accept:'application/vnd.github+json'}});if(!response.ok)return;const data=await response.json();published=data.find(r=>!r.draft&&!r.prerelease&&/^v?1\./i.test(r.tag_name)&&r.assets.some(a=>/^SoundboardMaker-Setup-.*\.exe$/i.test(a.name)))||null;refreshReleaseText()}catch(_){}}
applyLanguage();loadRelease();

/* Screenshots are now available in the public repository. Display the gallery
   immediately, with independently loading images instead of an all-or-nothing gate. */
const shotSrc=(key,language)=>'screenshots/'+key+'_'+language.toUpperCase()+'.png?v=20261030-2';
const shotDialog=document.getElementById('shot-dialog');
const shotDialogImage=document.getElementById('shot-dialog-image');
const shotDialogTitle=document.getElementById('shot-dialog-title');
const shotDialogCaption=document.getElementById('shot-dialog-caption');

function syncScreenshots(){
  for(const img of document.querySelectorAll('[data-shot]')){
    img.src=shotSrc(img.dataset.shot,state.language);
    const title=img.closest('.shot-card')?.querySelector('strong')?.textContent||'Soundboard Maker';
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
    const label=btn.querySelector('strong')?.textContent||'Soundboard Maker';
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
