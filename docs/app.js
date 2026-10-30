const state={language:localStorage.getItem('sbm-language')==='en'?'en':'fr'};const langButton=document.getElementById('language');
function applyLanguage(){document.documentElement.lang=state.language;langButton.textContent=state.language==='fr'?'EN':'FR';document.querySelectorAll('[data-fr][data-en]').forEach(el=>{el.textContent=el.dataset[state.language]});refreshReleaseText()}
langButton.addEventListener('click',()=>{state.language=state.language==='fr'?'en':'fr';localStorage.setItem('sbm-language',state.language);applyLanguage()});
let published=null;const releaseStatus=document.getElementById('release-status'),downloads=document.getElementById('downloads');
function refreshReleaseText(){if(!published)return;releaseStatus.textContent=state.language==='fr'?'Dernière version stable publiée : '+published.tag_name:'Latest stable version: '+published.tag_name;downloads.textContent='';const items=published.assets.filter(a=>/^SoundboardMaker-Setup-.*\.exe$/i.test(a.name)||/\.streamDeckPlugin$/i.test(a.name));for(const asset of items){const a=document.createElement('a');a.className='primary';a.href=asset.browser_download_url;a.textContent=/\.exe$/i.test(asset.name)?(state.language==='fr'?'Installer Windows':'Windows installer'):'Stream Deck Plugin';downloads.append(a)}downloads.hidden=items.length===0}
async function loadRelease(){try{const response=await fetch('https://api.github.com/repos/Fablitox/SoundBoardMaker/releases?per_page=20',{headers:{Accept:'application/vnd.github+json'}});if(!response.ok)return;const data=await response.json();published=data.find(r=>!r.draft&&!r.prerelease&&/^v?1\./i.test(r.tag_name)&&r.assets.some(a=>/^SoundboardMaker-Setup-.*\.exe$/i.test(a.name)))||null;refreshReleaseText()}catch(_){}}
applyLanguage();loadRelease();

/* The gallery remains hidden until its eight original PNGs are available in the public repo.
   This avoids broken thumbnails while the assets are being uploaded. */
const shotNames=['Bibliotheque','Editeur','Capture_Replay','StreamDeck'];
const shotGallery=document.getElementById('gallery');
const shotDialog=document.getElementById('shot-dialog');
const shotDialogImage=document.getElementById('shot-dialog-image');
const shotDialogTitle=document.getElementById('shot-dialog-title');
const shotDialogCaption=document.getElementById('shot-dialog-caption');
let galleryReady=false;
const shotSrc=(key,language)=>'screenshots/'+key+'_'+language.toUpperCase()+'.png';
function showLanguageScreenshots(){
 if(!galleryReady)return;
 for(const img of document.querySelectorAll('[data-shot]')){
  img.src=shotSrc(img.dataset.shot,state.language);
  const title=img.closest('.shot-card').querySelector('strong').textContent;
  img.alt=title+' — Soundboard Maker ('+state.language.toUpperCase()+')';
 }
 if(shotDialog.open && shotDialogImage.dataset.key){
  shotDialogImage.src=shotSrc(shotDialogImage.dataset.key,state.language);
  shotDialogCaption.textContent=state.language==='fr'?'Capture réelle du logiciel':'Actual application screenshot';
 }
}
const originalLanguageHandler=langButton.onclick;
langButton.addEventListener('click',()=>showLanguageScreenshots());
for(const btn of document.querySelectorAll('[data-shot-open]')){
 btn.addEventListener('click',()=>{
  if(!galleryReady)return;
  const key=btn.dataset.shotOpen;
  shotDialogImage.dataset.key=key;
  shotDialogImage.src=shotSrc(key,state.language);
  shotDialogImage.alt=btn.querySelector('strong').textContent;
  shotDialogTitle.textContent=btn.querySelector('strong').textContent;
  shotDialogCaption.textContent=state.language==='fr'?'Capture réelle du logiciel':'Actual application screenshot';
  shotDialog.showModal();
 });
}
document.getElementById('shot-dialog-close').addEventListener('click',()=>shotDialog.close());
shotDialog.addEventListener('click',e=>{if(e.target===shotDialog)shotDialog.close()});
async function ensureGalleryAssets(){
 const images=shotNames.flatMap(key=>['fr','en'].map(lang=>shotSrc(key,lang)));
 const result=await Promise.all(images.map(src=>new Promise(resolve=>{
  const img=new Image();img.onload=()=>resolve(true);img.onerror=()=>resolve(false);img.src=src;
 })));
 if(!result.every(Boolean))return;
 galleryReady=true;shotGallery.hidden=false;showLanguageScreenshots();
}
ensureGalleryAssets();
