import{w as O,l as J,m as L,u as y,s as T,r as E}from"./@vue.7df1a0ef.js";function _(e){return J()?(L(e),!0):!1}const h=typeof window!="undefined",P=e=>typeof e=="string",S=()=>{};function A(e,o){function r(...t){e(()=>o.apply(this,t),{fn:o,thisArg:this,args:t})}return r}const x=e=>e();var I=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,D=(e,o)=>{var r={};for(var t in e)C.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&I)for(var t of I(e))o.indexOf(t)<0&&M.call(e,t)&&(r[t]=e[t]);return r};function G(e,o,r={}){const t=r,{eventFilter:n=x}=t,s=D(t,["eventFilter"]);return O(e,A(n,o),s)}function g(e){var o;const r=y(e);return(o=r==null?void 0:r.$el)!=null?o:r}const d=h?window:void 0,H=h?window.document:void 0;h&&window.navigator;function $(...e){let o,r,t,n;if(P(e[0])?([r,t,n]=e,o=d):[o,r,t,n]=e,!o)return S;let s=S;const i=O(()=>y(o),l=>{s(),!!l&&(l.addEventListener(r,t,n),s=()=>{l.removeEventListener(r,t,n),s=S})},{immediate:!0,flush:"post"}),a=()=>{i(),s()};return _(a),a}function k(e,o,r={}){const{window:t=d,event:n="pointerdown"}=r;return t?$(t,n,i=>{const a=g(e);!a||a===i.target||i.composedPath().includes(a)||o(i)},{passive:!0}):void 0}const U={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))}};function ee(e,o,r=(n=>(n=d)==null?void 0:n.localStorage)(),t={}){var n;const{flush:s="pre",deep:i=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,shallow:w,window:c=d,eventFilter:p,onError:j=f=>{console.error(f)}}=t,u=y(o),z=u==null?"any":u instanceof Set?"set":u instanceof Map?"map":typeof u=="boolean"?"boolean":typeof u=="string"?"string":typeof u=="object"||Array.isArray(u)?"object":Number.isNaN(u)?"any":"number",v=(w?T:E)(o),m=(n=t.serializer)!=null?n:U[z];function N(f){if(!(!r||f&&f.key!==e))try{const b=f?f.newValue:r.getItem(e);b==null?(v.value=u,l&&u!==null&&r.setItem(e,m.write(u))):v.value=m.read(b)}catch(b){j(b)}}return N(),c&&a&&$(c,"storage",f=>setTimeout(()=>N(f),0)),r&&G(v,()=>{try{v.value==null?r.removeItem(e):r.setItem(e,m.write(v.value))}catch(f){j(f)}},{flush:s,deep:i,eventFilter:p}),v}var F=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,B=(e,o)=>{var r={};for(var t in e)q.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&F)for(var t of F(e))o.indexOf(t)<0&&V.call(e,t)&&(r[t]=e[t]);return r};function te(e,o,r={}){const t=r,{window:n=d}=t,s=B(t,["window"]);let i;const a=n&&"ResizeObserver"in n,l=()=>{i&&(i.disconnect(),i=void 0)},w=O(()=>g(e),p=>{l(),a&&n&&p&&(i=new n.ResizeObserver(o),i.observe(p,s))},{immediate:!0,flush:"post"}),c=()=>{l(),w()};return _(c),{isSupported:a,stop:c}}var R=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=(e,o)=>{var r={};for(var t in e)K.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&R)for(var t of R(e))o.indexOf(t)<0&&Q.call(e,t)&&(r[t]=e[t]);return r};function Y(e,o,r={}){const t=r,{window:n=d}=t,s=X(t,["window"]);let i;const a=n&&"IntersectionObserver"in n,l=()=>{i&&(i.disconnect(),i=void 0)},w=O(()=>g(e),p=>{l(),a&&n&&p&&(i=new n.MutationObserver(o),i.observe(p,s))},{immediate:!0}),c=()=>{l(),w()};return _(c),{isSupported:a,stop:c}}var W;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(W||(W={}));function re(e=null,o={}){var r,t;const{document:n=H,observe:s=!1}=o,i=E((r=e!=null?e:n==null?void 0:n.title)!=null?r:null);return O(i,(a,l)=>{P(a)&&a!==l&&n&&(n.title=a)},{immediate:!0}),s&&n&&Y((t=n.head)==null?void 0:t.querySelector("title"),()=>{n&&n.title!==i.value&&(i.value=n.title)},{childList:!0}),i}export{re as a,te as b,k as o,ee as u};
