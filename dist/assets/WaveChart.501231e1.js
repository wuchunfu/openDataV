var V=(e,t,l)=>new Promise((h,u)=>{var f=r=>{try{w(l.next(r))}catch(M){u(M)}},v=r=>{try{w(l.throw(r))}catch(M){u(M)}},w=r=>r.done?h(r.value):Promise.resolve(r.value).then(f,v);w((l=l.apply(e,t)).next())});import{c as de,S as X,C as J,a as ie,i as he,b as ce,d as fe,e as pe,f as ge,g as me,h as ye,j as F,G as K,k as we,R as Q,Z as ee,l as Pe,p as Se,m as te,B as be,n as ae,o as Ie,u as Me}from"./hooks.a4487968.js";import{u as Ce}from"./useProp.afe31ed3.js";import{h as Le}from"./index.02393965.js";import{d as De,r as Te,a as Ee,w as xe,u as _e,o as ke,c as Ae,f as Re}from"./index.b31e1272.js";import"./index.c787022e.js";function We(e,t){return t=t||{},de(e,null,null,t.state!=="normal")}function ze(e){var t=X.extend(e);return X.registerClass(t),t}function Be(e){var t=J.extend(e);return J.registerClass(t),t}ie([he,ce]);ie(fe);ze({type:"series.liquidFill",optionUpdated:function(){var e=this.option;e.gridSize=Math.max(Math.floor(e.gridSize),4)},getInitialData:function(e,t){var l=pe(e.data,{coordDimensions:["value"]}),h=new ge(l,this);return h.initData(e.data),h},defaultOption:{color:["#294D99","#156ACF","#1598ED","#45BDFF"],center:["50%","50%"],radius:"50%",amplitude:"8%",waveLength:"80%",phase:"auto",period:"auto",direction:"right",shape:"circle",waveAnimation:!0,animationEasing:"linear",animationEasingUpdate:"linear",animationDuration:2e3,animationDurationUpdate:1e3,outline:{show:!0,borderDistance:8,itemStyle:{color:"none",borderColor:"#294D99",borderWidth:8,shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.25)"}},backgroundStyle:{color:"#E3F7FF"},itemStyle:{opacity:.95,shadowBlur:50,shadowColor:"rgba(0, 0, 0, 0.4)"},label:{show:!0,color:"#294D99",insideColor:"#fff",fontSize:50,fontWeight:"bold",align:"center",baseline:"middle",position:"inside"},emphasis:{itemStyle:{opacity:.8}}}});const Oe=me({type:"ec-liquid-fill",shape:{waveLength:0,radius:0,radiusY:0,cx:0,cy:0,waterLevel:0,amplitude:0,phase:0,inverse:!1},buildPath:function(e,t){t.radiusY==null&&(t.radiusY=t.radius);for(var l=Math.max(Math.ceil(2*t.radius/t.waveLength*4)*2,8);t.phase<-Math.PI*2;)t.phase+=Math.PI*2;for(;t.phase>0;)t.phase-=Math.PI*2;var h=t.phase/Math.PI/2*t.waveLength,u=t.cx-t.radius+h-t.radius*2;e.moveTo(u,t.waterLevel);for(var f=0,v=0;v<l;++v){var w=v%4,r=Ye(v*t.waveLength/4,w,t.waveLength,t.amplitude);e.bezierCurveTo(r[0][0]+u,-r[0][1]+t.waterLevel,r[1][0]+u,-r[1][1]+t.waterLevel,r[2][0]+u,-r[2][1]+t.waterLevel),v===l-1&&(f=r[2][0])}t.inverse?(e.lineTo(f+u,t.cy-t.radiusY),e.lineTo(u,t.cy-t.radiusY),e.lineTo(u,t.waterLevel)):(e.lineTo(f+u,t.cy+t.radiusY),e.lineTo(u,t.cy+t.radiusY),e.lineTo(u,t.waterLevel)),e.closePath()}});function Ye(e,t,l,h){return t===0?[[e+1/2*l/Math.PI/2,h/2],[e+1/2*l/Math.PI,h],[e+l/4,h]]:t===1?[[e+1/2*l/Math.PI/2*(Math.PI-2),h],[e+1/2*l/Math.PI/2*(Math.PI-1),h/2],[e+l/4,0]]:t===2?[[e+1/2*l/Math.PI/2,-h/2],[e+1/2*l/Math.PI,-h],[e+l/4,-h]]:[[e+1/2*l/Math.PI/2*(Math.PI-2),-h],[e+1/2*l/Math.PI/2*(Math.PI-1),-h/2],[e+l/4,0]]}var L=Se;function re(e){return e&&e.indexOf("path://")===0}Be({type:"liquidFill",render:function(e,t,l){var h=this,u=this.group;u.removeAll();var f=e.getData(),v=f.getItemModel(0),w=v.get("center"),r=v.get("radius"),M=l.getWidth(),C=l.getHeight(),Y=Math.min(M,C),B=0,x=0,U=e.get("outline.show");U&&(B=e.get("outline.borderDistance"),x=L(e.get("outline.itemStyle.borderWidth"),Y));var D=L(w[0],M),T=L(w[1],C),E,_,k,S=!1,P=e.get("shape");if(P==="container"?(S=!0,E=[M/2,C/2],_=[E[0]-x/2,E[1]-x/2],k=[L(B,M),L(B,C)],r=[Math.max(_[0]-k[0],0),Math.max(_[1]-k[1],0)]):(E=L(r,Y)/2,_=E-x/2,k=L(B,Y),r=Math.max(_-k,0)),U){var ne=H();ne.style.lineWidth=x,u.add(H())}var le=S?0:D-r,oe=S?0:T-r,A=null;u.add(se());var q=this._data,G=[];f.diff(q).add(function(a){var i=N(a,!1),n=i.shape.waterLevel;i.shape.waterLevel=S?C/2:r,ye(i,{shape:{waterLevel:n}},e),i.z2=2,$(a,i,null),u.add(i),f.setItemGraphicEl(a,i),G.push(i)}).update(function(a,i){for(var n=q.getItemGraphicEl(i),d=N(a,!1,n),s={},o=["amplitude","cx","cy","phase","radius","radiusY","waterLevel","waveLength"],p=0;p<o.length;++p){var c=o[p];d.shape.hasOwnProperty(c)&&(s[c]=d.shape[c])}for(var m={},g=["fill","opacity","shadowBlur","shadowColor"],p=0;p<g.length;++p){var c=g[p];d.style.hasOwnProperty(c)&&(m[c]=d.style[c])}S&&(s.radiusY=C/2),F(n,{shape:s,x:d.x,y:d.y},e),e.isUniversalTransitionEnabled&&e.isUniversalTransitionEnabled()?F(n,{style:m},e):n.useStyle(m);var y=n.getClipPath(),b=d.getClipPath();n.setClipPath(d.getClipPath()),n.shape.inverse=d.inverse,y&&b&&h._shape===P&&!re(P)&&F(b,{shape:y.shape},e,{isFrom:!0}),$(a,n,n),u.add(n),f.setItemGraphicEl(a,n),G.push(n)}).remove(function(a){var i=q.getItemGraphicEl(a);u.remove(i)}).execute(),v.get("label.show")&&u.add(ue(G)),this._shape=P,this._data=f;function R(a,i){if(P)if(re(P)){var n=te(P.slice(7),{}),d=n.getBoundingRect(),s=d.width,o=d.height;s>o?(o=a*2/s*o,s=a*2):(s=a*2/o*s,o=a*2);var p=i?0:D-s/2,c=i?0:T-o/2;return n=te(P.slice(7),{},new be(p,c,s,o)),i&&(n.x=-s/2,n.y=-o/2),n}else if(S){var m=i?-a[0]:D-a[0],g=i?-a[1]:T-a[1];return ae("rect",m,g,a[0]*2,a[1]*2)}else{var m=i?-a:D-a,g=i?-a:T-a;return P==="pin"?g+=a:P==="arrow"&&(g-=a),ae(P,m,g,a*2,a*2)}return new Ie({shape:{cx:i?0:D,cy:i?0:T,r:a}})}function H(){var a=R(E);return a.style.fill=null,a.setStyle(e.getModel("outline.itemStyle").getItemStyle()),a}function se(){var a=R(r);a.setStyle(e.getModel("backgroundStyle").getItemStyle()),a.style.fill=null,a.z2=5;var i=R(r);i.setStyle(e.getModel("backgroundStyle").getItemStyle()),i.style.stroke=null;var n=new K;return n.add(a),n.add(i),n}function N(a,i,n){var d=S?r[0]:r,s=S?C/2:r,o=f.getItemModel(a),p=o.getModel("itemStyle"),c=o.get("phase"),m=L(o.get("amplitude"),s*2),g=L(o.get("waveLength"),d*2),y=f.get("value",a),b=s-y*s*2;c=n?n.shape.phase:c==="auto"?a*Math.PI/4:c;var I=p.getItemStyle();if(!I.fill){var W=e.get("color"),O=a%W.length;I.fill=W[O]}var ve=d*2,z=new Oe({shape:{waveLength:g,radius:d,radiusY:s,cx:ve,cy:0,waterLevel:b,amplitude:m,phase:c,inverse:i},style:I,x:D,y:T});z.shape._waterLevel=b;var j=o.getModel("emphasis.itemStyle").getItemStyle();j.lineWidth=0,z.ensureState("emphasis").style=j,we(z);var Z=R(r,!0);return Z.setStyle({fill:"white"}),z.setClipPath(Z),z}function $(a,i,n){var d=f.getItemModel(a),s=d.get("period"),o=d.get("direction"),p=f.get("value",a),c=d.get("phase");c=n?n.shape.phase:c==="auto"?a*Math.PI/4:c;var m=function(b){var I=f.count();return I===0?b:b*(.2+(I-a)/I*.8)},g=0;s==="auto"?g=m(5e3):g=typeof s=="function"?s(p,a):s;var y=0;o==="right"||o==null?y=Math.PI:o==="left"?y=-Math.PI:o==="none"?y=0:console.error("Illegal direction value for liquid fill."),o!=="none"&&d.get("waveAnimation")&&i.animate("shape",!0).when(0,{phase:c}).when(g/2,{phase:y+c}).when(g,{phase:y*2+c}).during(function(){A&&A.dirty(!0)}).start()}function ue(a){var i=v.getModel("label");function n(){var I=e.getFormattedLabel(0,"normal"),W=f.get("value",0)*100,O=f.getName(0)||e.name;return isNaN(W)||(O=W.toFixed(0)+"%"),I==null?O:I}var d={z2:10,shape:{x:le,y:oe,width:(S?r[0]:r)*2,height:(S?r[1]:r)*2},style:{fill:"transparent"},textConfig:{position:i.get("position")||"inside"},silent:!0},s={style:{text:n(),textAlign:i.get("align"),textVerticalAlign:i.get("baseline")}};Object.assign(s.style,We(i));var o=new Q(d),p=new Q(d);p.disableLabelAnimation=!0,o.disableLabelAnimation=!0;var c=new ee(s),m=new ee(s);o.setTextContent(c),p.setTextContent(m);var g=i.get("insideColor");m.style.fill=g;var y=new K;y.add(o),y.add(p);var b=R(r,!0);return A=new Pe({shape:{paths:a},x:D,y:T}),A.setClipPath(b),p.setClipPath(A),y}},dispose:function(){}});const Ne=De({__name:"WaveChart",props:{component:null},setup(e){const t=e,l=Te(null);let h=0;const{updateEchart:u,resizeHandler:f}=Me(l),{propValue:v}=Ce(t.component,()=>V(this,null,function*(){u(w())})),w=()=>({series:[{type:"liquidFill",amplitude:v.options.amplitude,data:[h],outline:{show:v.options.outlineShow,itemStyle:{borderColor:v.options.outlineColor}},shape:v.options.shape,radius:v.options.radius,direction:v.options.direction,waveAnimation:v.options.waveAnimation,label:{show:v.options.labelShow},backgroundStyle:{color:v.options.backgroundColor},color:[v.options.color]}]});return Ee(()=>V(this,null,function*(){try{const r=yield Le.get({url:v.data.url});r.status===200&&(h=r.data.data)}catch(r){h=t.component.exampleData.data}u(w())})),(r,M)=>{const C=Re("resize");return xe((ke(),Ae("div",{ref_key:"chartEl",ref:l},null,512)),[[C,_e(f)]])}}});export{Ne as default};
