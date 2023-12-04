import{ax as N,d as T,P as $,M as v,ab as I,ak as A,K as x,ad as L,H as p,ai as g,az as y,c2 as C,au as B,bo as O,f as h,c9 as o,i as R,dS as z,dT as k,av as V}from"./index.1d217137.js";const Y=N({prefixCls:{type:String}}),P=T({name:"ElSpaceItem",props:Y,setup(e,{slots:u}){const d=$("space"),r=v(()=>`${e.prefixCls||d.b()}__item`);return()=>I("div",{class:r.value},A(u,"default"))}}),w={small:8,default:12,large:16};function _(e){const u=$("space"),d=v(()=>[u.b(),u.m(e.direction),e.class]),r=x(0),n=x(0),S=v(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${n.value}px`}:{},a={alignItems:e.alignment};return[t,a,e.style]}),f=v(()=>{const t={paddingBottom:`${n.value}px`,marginRight:`${r.value}px`},a=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,a]});return L(()=>{const{size:t="small",wrap:a,direction:i,fill:l}=e;if(p(t)){const[s=0,c=0]=t;r.value=s,n.value=c}else{let s;g(t)?s=t:s=w[t||"small"]||w.small,(a||l)&&i==="horizontal"?r.value=n.value=s:i==="horizontal"?(r.value=s,n.value=0):(n.value=s,r.value=0)}}),{classes:d,containerStyle:S,itemStyle:f}}const j=N({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:y([String,Object,Array]),default:""},style:{type:y([String,Array,Object]),default:""},alignment:{type:y(String),default:"center"},prefixCls:{type:String},spacer:{type:y([Object,String,Number,Array]),default:null,validator:e=>C(e)||g(e)||B(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:O,validator:e=>g(e)||p(e)&&e.length===2&&e.every(g)}}),F=T({name:"ElSpace",props:j,setup(e,{slots:u}){const{classes:d,containerStyle:r,itemStyle:n}=_(e);function S(f,t="",a=[]){const{prefixCls:i}=e;return f.forEach((l,s)=>{z(l)?p(l.children)&&l.children.forEach((c,m)=>{z(c)&&p(c.children)?S(c.children,`${t+m}-`,a):a.push(h(P,{style:n.value,prefixCls:i,key:`nested-${t+m}`},{default:()=>[c]},o.PROPS|o.STYLE,["style","prefixCls"]))}):k(l)&&a.push(h(P,{style:n.value,prefixCls:i,key:`LoopKey${t+s}`},{default:()=>[l]},o.PROPS|o.STYLE,["style","prefixCls"]))}),a}return()=>{var f;const{spacer:t,direction:a}=e,i=A(u,"default",{key:0},()=>[]);if(((f=i.children)!=null?f:[]).length===0)return null;if(p(i.children)){let l=S(i.children);if(t){const s=l.length-1;l=l.reduce((c,m,E)=>{const b=[...c,m];return E!==s&&b.push(h("span",{style:[n.value,a==="vertical"?"width: 100%":null],key:E},[C(t)?t:R(t,o.TEXT)],o.STYLE)),b},[])}return h("div",{class:d.value,style:r.value},l,o.STYLE|o.CLASS)}return i.children}}}),W=V(F);export{W as E};
