import{r as g,h as b}from"./echarts.4f9736bc.js";import{b as j}from"./@vueuse.fe63d129.js";import{h as x}from"./index.59b178ec.js";import{u as w,b as V}from"./index.2fc0df38.js";import{t as y}from"./mydark.8efe4250.js";import{d as v}from"./lodash-es.4775bb8f.js";import{p as S,r as k,q as z,w as E,o as L,y as O,x as T}from"./@vue.7df1a0ef.js";import"./zrender.706c9170.js";import"./tslib.34a40861.js";import"./axios.19d3e859.js";import"./vue-router.e129948e.js";import"./pinia.685e9614.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.54ccd689.js";import"./lodash.8679a684.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./dexie.c25c286a.js";import"./@icon-park.87123711.js";const ee=S({props:{element:null,propValue:null},setup(u){const a=u;g("mydark",y);const n=k(null);let t=null,i=0;const c=w(),m=e=>{const o=e;a.propValue.datatag&&o.TagName===a.propValue.datatag&&(i=Number(o.TagValue),p())};z(()=>{d(),h()}),V("actual",m);function d(){x.post({url:a.propValue.history,data:[a.propValue.datatag]}).then(e=>{e.ErrorCode===200&&(i=Number(e.Results[0].TagValue))}).catch(e=>{console.log(e);const o=a.propValue.maxValue;i=Math.round(Math.random()*o)}).finally(()=>{p()})}j(n,e=>{const o=e[0],{width:s,height:r}=o.contentRect;t==null||t.resize({width:s,height:r})});const l=()=>{const e="#03b7c9",o=a.propValue.maxValue,s=a.propValue.name,r=a.propValue.unit,f=a.propValue.value;return{series:[{type:"gauge",radius:"80%",splitNumber:10,min:0,max:o,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:2,shadowBlur:0,color:[[1,e]]}},axisTick:{show:!0,lineStyle:{color:e,width:1},length:-5,splitNumber:10},splitLine:{show:!0,length:-14,lineStyle:{color:e}},axisLabel:{distance:-20,color:e,fontSize:"14",fontWeight:"bold"},pointer:{show:0},detail:{show:0}},{name:s,type:"gauge",radius:"80%",startAngle:225,endAngle:-45,min:0,max:o,axisLine:{show:!0,lineStyle:{width:16,color:[[1,"rgba(255,255,255,.1)"]]}},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"105%"},detail:{show:!0,offsetCenter:[0,"100%"],fontSize:20,color:"#fff",formatter:["{value} "+(r||""),"{name|"+s+"}"].join(`
`),rich:{name:{fontSize:14,lineHeight:30,color:"#ddd"}}},itemStyle:{color:e},data:[{value:f}]}]}},p=v(()=>{const e=l();e.series[1].data[0]=i,t&&t.setOption({series:e.series})},300),h=()=>{t=b(n.value,"mydark"),t.clear(),t.setOption(l())};return c.isEditMode&&E(()=>a.propValue,(e,o)=>{console.log(e),t&&(t.clear(),t.setOption(l()))},{deep:!0}),L(()=>{t&&(t.clear(),t.dispose())}),(e,o)=>(T(),O("div",{ref:(s,r)=>{r.chartEl=s,n.value=s}},null,512))}});export{ee as default};