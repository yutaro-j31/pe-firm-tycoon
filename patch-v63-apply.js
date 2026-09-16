(()=>{
'use strict';
window.applyV63Patch=function(source){
  const lines=String(source).split('\n');
  if(lines.length!==474) throw new Error('v6.3 patch base mismatch: '+lines.length);
  const ops=(window.__PE_V63_OPS||[]).slice().sort((a,b)=>b[0]-a[0]);
  if(ops.length!==20) throw new Error('v6.3 patch parts missing: '+ops.length);
  for(const [i,del,add] of ops) lines.splice(i,del,...add);
  const out=lines.join('\n');
  if(out.length!==166938) throw new Error('v6.3 patch output mismatch: '+out.length);
  return out;
};
})();
