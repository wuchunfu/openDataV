var x=(l,v,c)=>new Promise((a,u)=>{var b=s=>{try{i(c.next(s))}catch(d){u(d)}},f=s=>{try{i(c.throw(s))}catch(d){u(d)}},i=s=>s.done?a(s.value):Promise.resolve(s.value).then(b,f);i((c=c.apply(l,v)).next())});import{d as F,r as t,i as R,q as G,a as M,v as N,o as k,c as g,F as T,e as j,b as n,t as _,l as q,u as C,x as A,p as L,j as O,_ as P}from"./index.b272d73b.js";import{u as U}from"./useProp.afe31ed3.js";import{h as W}from"./index.da20cfc7.js";const J=l=>(L("data-v-b75d48de"),l=l(),O(),l),K={class:"ranking-info"},Q={class:"rank"},X={class:"info-name"},Y={class:"ranking-value"},Z={class:"ranking-column"},aa=J(()=>n("div",{class:"shine"},null,-1)),ea=[aa],oa=F({__name:"RankBoard",props:{component:null},setup(l){const v=l;A(o=>({"2817398f":f.value,"0f7a29d8":d.value,"4daae5ae":i.value,"29c6d951":s.value,da6b59cc:w.value,"6aa839e0":H.value,"64eeda5b":b.value,fe514a58:C(I),"430a9e4b":B.value,"7927a606":S.value,fa721ce6:h.value}));const c=(o,r,e)=>{if(o==="bar")switch(r){case"barHeight":b.value=`${e}px`;break;case"borderRadius":S.value=`${e}px`;break;case"color1":h.value=e;break;case"color2":$.value=e;break}else if(o==="line")switch(r){case"lineHeight":w.value=`${e}px`;break;case"borderGap":B.value=`${e}px`;break;case"lineColor":H.value=e;break}else if(o==="text")switch(r){case"fontSize":f.value=`${e}px`;break;case"labelColor":i.value=e;break;case"valueColor":s.value=e;break;case"rankColor":d.value=e;break}o==="data"&&r==="unit"&&(u.value=e)},{propValue:a}=U(v.component,c),u=t(a.data.unit),b=t(`${a.bar.barHeight}px`),f=t(`${a.text.fontSize}px`),i=t(a.text.labelColor||"#fff"),s=t(a.text.valueColor||"#fff"),d=t(a.text.rankColor||"#fff"),h=t(a.bar.color1||"#3DE7C9"),$=t(a.bar.color2||"#00BAFF"),S=t(`${a.bar.borderRadius}px`),w=t(`${a.line.lineHeight}px`),B=t(`${a.line.borderGap}px`),H=t(a.line.lineColor||"#3DE7C9"),I=R(()=>`linear-gradient(to right, ${h.value}, ${$.value})`);let p;const z=G(),m=t([]),V=R(()=>a.data.maxValue?a.data.maxValue:Math.max(...m.value.map(o=>o.value))),y=o=>{o.sort((r,e)=>e.value-r.value),m.value=o},D=()=>x(this,null,function*(){if(a.data.url)try{const o=yield W.post({url:a.data.url});o.status===200&&y(o.data)}catch(o){console.log(o.message||o),z.isEditMode&&y(v.component.exampleData)}});return M(()=>x(this,null,function*(){yield D(),p&&clearTimeout(p),p=setInterval(D,a.data.interval||1e5)})),N(()=>{p&&clearTimeout(p)}),(o,r)=>(k(),g("div",{class:"dv-scroll-ranking-board",ref:t},[(k(!0),g(T,null,j(m.value,(e,E)=>(k(),g("div",{class:"row-item",key:e.label},[n("div",K,[n("div",Q,"No."+_(E+1),1),n("div",X,_(e.label),1),n("div",Y,_(e.value)+" "+_(u.value),1)]),n("div",Z,[n("div",{class:"inside-column",style:q({width:`${C(V)?e.value*100/C(V):100}%`})},ea,4)])]))),128))]))}});const na=P(oa,[["__scopeId","data-v-b75d48de"]]);export{na as default};
