import{ax as h,az as o,aA as n,d as m,a6 as g,M as c,P as $,ai as p,J as N,o as _,Z as x,w as C,ak as j,n as v,u as f,al as O,ay as w,X as E,av as k}from"./index.1d217137.js";const S=Symbol("rowContextKey"),K=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>n({})},sm:{type:o([Number,Object]),default:()=>n({})},md:{type:o([Number,Object]),default:()=>n({})},lg:{type:o([Number,Object]),default:()=>n({})},xl:{type:o([Number,Object]),default:()=>n({})}}),P=m({name:"ElCol"}),B=m({...P,props:K,setup(d){const t=d,{gutter:u}=g(S,{gutter:c(()=>0)}),a=$("col"),b=c(()=>{const e={};return u.value&&(e.paddingLeft=e.paddingRight=`${u.value/2}px`),e}),i=c(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];p(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{p(t[s])?e.push(a.b(`${s}-${t[s]}`)):N(t[s])&&Object.entries(t[s]).forEach(([l,r])=>{e.push(l!=="span"?a.b(`${s}-${l}-${r}`):a.b(`${s}-${r}`))})}),u.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,y)=>(_(),x(w(e.tag),{class:v(f(i)),style:O(f(b))},{default:C(()=>[j(e.$slots,"default")]),_:3},8,["class","style"]))}});var A=E(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const J=k(A);export{J as E,S as r};
