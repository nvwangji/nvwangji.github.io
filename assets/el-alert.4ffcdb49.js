import{ax as N,bR as $,c0 as h,d as S,aR as A,P as I,K as V,M as p,o as a,Z as l,w as u,a1 as D,an as M,g as k,u as e,b,n as o,ay as P,am as n,e as i,ak as g,i as C,t as d,f as R,$ as z,bm as F,X as K,b_ as O,av as X}from"./index.7006beae.js";const Z=["light","dark"],_=N({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:$(h),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:Z,default:"light"}}),j={close:r=>r instanceof MouseEvent},q=S({name:"ElAlert"}),G=S({...q,props:_,emits:j,setup(r,{emit:w}){const c=r,{Close:B}=O,f=A(),t=I("alert"),m=V(!0),y=p(()=>h[c.type]),E=p(()=>[t.e("icon"),{[t.is("big")]:!!c.description||!!f.default}]),T=p(()=>({[t.is("bold")]:c.description||f.default})),v=s=>{m.value=!1,w("close",s)};return(s,J)=>(a(),l(F,{name:e(t).b("fade"),persisted:""},{default:u(()=>[D(k("div",{class:o([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(y)?(a(),l(e(b),{key:0,class:o(e(E))},{default:u(()=>[(a(),l(P(e(y))))]),_:1},8,["class"])):n("v-if",!0),k("div",{class:o(e(t).e("content"))},[s.title||s.$slots.title?(a(),i("span",{key:0,class:o([e(t).e("title"),e(T)])},[g(s.$slots,"title",{},()=>[C(d(s.title),1)])],2)):n("v-if",!0),s.$slots.default||s.description?(a(),i("p",{key:1,class:o(e(t).e("description"))},[g(s.$slots,"default",{},()=>[C(d(s.description),1)])],2)):n("v-if",!0),s.closable?(a(),i(z,{key:2},[s.closeText?(a(),i("div",{key:0,class:o([e(t).e("close-btn"),e(t).is("customed")]),onClick:v},d(s.closeText),3)):(a(),l(e(b),{key:1,class:o(e(t).e("close-btn")),onClick:v},{default:u(()=>[R(e(B))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[M,m.value]])]),_:3},8,["name"]))}});var H=K(G,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const Q=X(H);export{Q as E};