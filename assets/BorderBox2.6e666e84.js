import{_ as p}from"./index.2fc0df38.js";import{p as d,r as i,a7 as v,P as _,y as c,B as t,x as a}from"./@vue.7df1a0ef.js";import"./@vueuse.fe63d129.js";import"./vue-router.e129948e.js";import"./pinia.685e9614.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.54ccd689.js";import"./lodash.8679a684.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.4775bb8f.js";import"./dexie.c25c286a.js";import"./@icon-park.87123711.js";const f={class:"dv-border-box-2"},h=["width","height"],m=["fill","points"],j=["stroke","points"],x=["stroke","points"],y=["fill"],b=["fill","cx"],$=["fill","cx","cy"],g=["fill","cy"],V=d({props:{propValue:null,element:null},setup(l){const e=i(150),o=i(150),n=s=>{const r=s[0].contentRect;e.value=r.width,o.value=r.height};return(s,u)=>{const r=v("resize");return _((a(),c("div",f,[(a(),c("svg",{class:"dv-border-svg-container",width:e.value,height:o.value},[t("polygon",{fill:l.propValue.backgroundColor,points:`
          7, 7 ${e.value-7}, 7 ${e.value-7}, ${o.value-7} 7, ${o.value-7}
        `},null,8,m),t("polyline",{stroke:l.propValue.color1,points:`2, 2 ${e.value-2} ,2 ${e.value-2}, ${o.value-2} 2, ${o.value-2} 2, 2`},null,8,j),t("polyline",{stroke:l.propValue.color2,points:`6, 6 ${e.value-6}, 6 ${e.value-6}, ${o.value-6} 6, ${o.value-6} 6, 6`},null,8,x),t("circle",{fill:l.propValue.color1,cx:"11",cy:"11",r:"1"},null,8,y),t("circle",{fill:l.propValue.color1,cx:e.value-11,cy:"11",r:"1"},null,8,b),t("circle",{fill:l.propValue.color1,cx:e.value-11,cy:o.value-11,r:"1"},null,8,$),t("circle",{fill:l.propValue.color1,cx:"11",cy:o.value-11,r:"1"},null,8,g)],8,h))],512)),[[r,n]])}}});var J=p(V,[["__scopeId","data-v-daabc8ca"]]);export{J as default};
