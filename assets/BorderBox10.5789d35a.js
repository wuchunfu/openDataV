import{_ as v}from"./index.2fc0df38.js";import{p as h,r as i,a7 as m,P as _,y as s,B as p,F as f,a6 as g,I as j,x as r,E as b}from"./@vue.7df1a0ef.js";import"./@vueuse.fe63d129.js";import"./vue-router.e129948e.js";import"./pinia.685e9614.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.54ccd689.js";import"./lodash.8679a684.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.4775bb8f.js";import"./dexie.c25c286a.js";import"./@icon-park.87123711.js";const x=["width","height"],y=["fill","points"],$=["width","height"],w=["fill"],B=h({props:{propValue:null,element:null},setup(a){const e=i(150),t=i(150),c=i(["left-top","right-top","left-bottom","right-bottom"]),d=l=>{const o=l[0].contentRect;e.value=o.width,t.value=o.height};return(l,u)=>{const o=m("resize");return _((r(),s("div",{class:"dv-border-box-10",style:j(`box-shadow: inset 0 0 25px 3px ${a.propValue.colorLeft}`)},[(r(),s("svg",{class:"dv-border-svg-container",width:e.value,height:t.value},[p("polygon",{fill:a.propValue.backgroundColor,points:`
          4, 0 ${e.value-4}, 0 ${e.value}, 4 ${e.value}, ${t.value-4} ${e.value-4}, ${t.value}
          4, ${t.value} 0, ${t.value-4} 0, 4
        `},null,8,y)],8,x)),(r(!0),s(f,null,g(c.value,n=>(r(),s("svg",{width:e.value,height:t.value,key:n,class:b(`${n} dv-border-svg-container`)},[p("polygon",{fill:a.propValue.colorRight,points:"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"},null,8,w)],10,$))),128))],4)),[[o,d]])}}});var G=v(B,[["__scopeId","data-v-35af7306"]]);export{G as default};