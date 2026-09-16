(async()=>{
'use strict';
const status=document.getElementById('runtimeStatus');
try{
  if(typeof DecompressionStream==='undefined')throw new Error('このブラウザはDecompressionStreamに対応していません');
  const loadScript=src=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=()=>resolve();s.onerror=()=>reject(new Error(src+' load failed'));document.head.appendChild(s)});
  for(const f of ['engine-patch-v63-1.js','engine-patch-v63-2.js','engine-patch-v63-3.js','engine-patch-v63-4.js','engine-patch-v63-run.js'])await loadScript(f);
  const files=['game-data-01.txt','game-data-02.txt','game-data-03.txt','game-data-04.txt','game-data-05.txt','game-data-06.txt','game-data-07.txt','game-data-08.txt','game-data-09.txt','game-data-10.txt','game-data-11.txt','game-data-12.txt'];
  const parts=await Promise.all(files.map(async f=>{const r=await fetch(f,{cache:'no-store'});if(!r.ok)throw new Error(f+' '+r.status);return r.text()}));
  const b64=parts.join('').replace(/\s/g,'');
  const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
  const stream=new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
  let js=await new Response(stream).text();
  if(typeof window.__patchPEEngineV63!=='function')throw new Error('v6.3 engine patch loader is missing');
  js=window.__patchPEEngineV63(js);
  (0,eval)(js);
}catch(e){console.error(e);if(status){status.textContent='起動エラー: '+(e&&e.message?e.message:String(e));status.className='runtime bad'}}
})();
