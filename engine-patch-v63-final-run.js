(()=>{
'use strict';
window.__patchPEEngineV63Final=function(source){
  const lines=String(source).split('\n');
  if(lines.length!==482)throw new Error('v6.3 final patch base mismatch: '+lines.length);
  const ops=(window.__PE_V63_FINAL_OPS||[]).slice().sort((a,b)=>b[0]-a[0]);
  if(ops.length!==9)throw new Error('v6.3 final patch parts missing: '+ops.length);
  for(const [i,del,add] of ops)lines.splice(i,del,...add);
  const out=lines.join('\n');
  if(out.length!==166938)throw new Error('v6.3 final patch output mismatch: '+out.length);
  return out;
};
})();
