import{a3 as z,ad as W,at as I,be as C,R as N,C as D,P as L,c7 as A,A as $,a9 as E,N as U,c6 as j,a7 as F,c8 as K,aa as V,bY as f,ax as q,az as x,d as G,f as J,c9 as v,ak as k,ab as Q}from"./index.7006beae.js";import{a as Z}from"./scroll.4eabaed8.js";const ae=(e,o,n)=>{let s={offsetX:0,offsetY:0};const a=l=>{const u=l.clientX,r=l.clientY,{offsetX:d,offsetY:m}=s,i=e.value.getBoundingClientRect(),p=i.left,y=i.top,Y=i.width,S=i.height,T=document.documentElement.clientWidth,O=document.documentElement.clientHeight,P=-p+d,B=-y+m,H=T-p-Y+d,X=O-y-S+m,h=g=>{const w=Math.min(Math.max(d+g.clientX-u,P),H),M=Math.min(Math.max(m+g.clientY-r,B),X);s={offsetX:w,offsetY:M},e.value&&(e.value.style.transform=`translate(${C(w)}, ${C(M)})`)},b=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",b)},c=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",a)},t=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",a)};z(()=>{W(()=>{n.value?c():t()})}),I(()=>{t()})},ce=(e,o={})=>{N(e)||D("[useLockscreen]","You need to pass a ref param to this function");const n=o.ns||L("popup"),s=A(()=>n.bm("parent","hidden"));if(!$||E(document.body,s.value))return;let a=0,c=!1,t="0";const l=()=>{setTimeout(()=>{V(document==null?void 0:document.body,s.value),c&&document&&(document.body.style.width=t)},200)};U(e,u=>{if(!u){l();return}c=!E(document.body,s.value),c&&(t=document.body.style.width),a=Z(n.namespace.value);const r=document.documentElement.clientHeight<document.body.scrollHeight,d=j(document.body,"overflowY");a>0&&(r||d==="scroll")&&c&&(document.body.style.width=`calc(100% - ${a}px)`),F(document.body,s.value)}),K(()=>l())},_=e=>{if(!e)return{onClick:f,onMousedown:f,onMouseup:f};let o=!1,n=!1;return{onClick:t=>{o&&n&&e(t),o=n=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{n=t.target===t.currentTarget}}},R=q({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:x([String,Array,Object])},zIndex:{type:x([String,Number])}}),ee={click:e=>e instanceof MouseEvent},te="overlay";var oe=G({name:"ElOverlay",props:R,emits:ee,setup(e,{slots:o,emit:n}){const s=L(te),a=u=>{n("click",u)},{onClick:c,onMousedown:t,onMouseup:l}=_(e.customMaskEvent?void 0:a);return()=>e.mask?J("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:t,onMouseup:l},[k(o,"default")],v.STYLE|v.CLASS|v.PROPS,["onClick","onMouseup","onMousedown"]):Q("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[k(o,"default")])}});const le=oe;export{le as E,ce as a,_ as b,ae as u};
