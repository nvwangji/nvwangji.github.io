import{A as m,bZ as z,ax as P,bo as W,d as _,ag as M,P as V,M as $,o as f,e as H,g as h,ak as w,n as c,u as a,Z as g,w as v,f as y,aF as k,aT as b,b as C,am as S,al as T,bm as I,X as F,av as R}from"./index.1d217137.js";const Z=(s,l)=>{if(!m)return!1;const e={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(l)],n=z(s,e);return["scroll","auto","overlay"].some(o=>n.includes(o))},D=(s,l)=>{if(!m)return;let e=s;for(;e;){if([window,document,document.documentElement].includes(e))return window;if(Z(e,l))return e;e=e.parentNode}return e};let p;const G=s=>{var l;if(!m)return 0;if(p!==void 0)return p;const e=document.createElement("div");e.className=`${s}-scrollbar__wrap`,e.style.visibility="hidden",e.style.width="100px",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);const n=e.offsetWidth;e.style.overflow="scroll";const o=document.createElement("div");o.style.width="100%",e.appendChild(o);const r=o.offsetWidth;return(l=e.parentNode)==null||l.removeChild(e),p=n-r,p};function J(s,l){if(!m)return;if(!l){s.scrollTop=0;return}const e=[];let n=l.offsetParent;for(;n!==null&&s!==n&&s.contains(n);)e.push(n),n=n.offsetParent;const o=l.offsetTop+e.reduce((t,d)=>t+d.offsetTop,0),r=o+l.offsetHeight,i=s.scrollTop,u=i+s.clientHeight;o<i?s.scrollTop=o:r>u&&(s.scrollTop=r-s.clientHeight)}const x=P({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:W,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),A={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},K=_({name:"ElTag"}),X=_({...K,props:x,emits:A,setup(s,{emit:l}){const e=s,n=M(),o=V("tag"),r=$(()=>{const{type:t,hit:d,effect:B,closable:E,round:N}=e;return[o.b(),o.is("closable",E),o.m(t),o.m(n.value),o.m(B),o.is("hit",d),o.is("round",N)]}),i=t=>{l("close",t)},u=t=>{l("click",t)};return(t,d)=>t.disableTransitions?(f(),H("span",{key:0,class:c(a(r)),style:T({backgroundColor:t.color}),onClick:u},[h("span",{class:c(a(o).e("content"))},[w(t.$slots,"default")],2),t.closable?(f(),g(a(C),{key:0,class:c(a(o).e("close")),onClick:b(i,["stop"])},{default:v(()=>[y(a(k))]),_:1},8,["class","onClick"])):S("v-if",!0)],6)):(f(),g(I,{key:1,name:`${a(o).namespace.value}-zoom-in-center`,appear:""},{default:v(()=>[h("span",{class:c(a(r)),style:T({backgroundColor:t.color}),onClick:u},[h("span",{class:c(a(o).e("content"))},[w(t.$slots,"default")],2),t.closable?(f(),g(a(C),{key:0,class:c(a(o).e("close")),onClick:b(i,["stop"])},{default:v(()=>[y(a(k))]),_:1},8,["class","onClick"])):S("v-if",!0)],6)]),_:3},8,["name"]))}});var j=F(X,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const L=R(j);export{L as E,G as a,D as g,J as s,x as t};