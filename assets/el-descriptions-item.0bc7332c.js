import{d as w,a6 as T,e7 as H,be as V,P as L,a1 as P,ab as D,aP as J,ax as A,az as Q,u as n,o as l,e as f,g as b,$ as y,a0 as z,Z as C,f as j,X as M,ah as Y,ag as x,aR as ee,aj as te,M as se,n as _,ak as W,am as le,cr as ne,i as F,t as K,av as ae,aw as re}from"./index.1d217137.js";const B=Symbol("elDescriptions");var E=w({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup(){return{descriptions:T(B,{})}},render(){var g,o,t,N,a,c,k;const i=H(this.cell),e=(((g=this.cell)==null?void 0:g.dirs)||[]).map(U=>{const{dir:X,arg:Z,modifiers:q,value:G}=U;return[X,G,Z,q]}),{border:u,direction:r}=this.descriptions,s=r==="vertical",v=((N=(t=(o=this.cell)==null?void 0:o.children)==null?void 0:t.label)==null?void 0:N.call(t))||i.label,d=(k=(c=(a=this.cell)==null?void 0:a.children)==null?void 0:c.default)==null?void 0:k.call(c),m=i.span,S=i.align?`is-${i.align}`:"",h=i.labelAlign?`is-${i.labelAlign}`:S,$=i.className,R=i.labelClassName,I={width:V(i.width),minWidth:V(i.minWidth)},p=L("descriptions");switch(this.type){case"label":return P(D(this.tag,{style:I,class:[p.e("cell"),p.e("label"),p.is("bordered-label",u),p.is("vertical-label",s),h,R],colSpan:s?m:1},v),e);case"content":return P(D(this.tag,{style:I,class:[p.e("cell"),p.e("content"),p.is("bordered-content",u),p.is("vertical-content",s),S,$],colSpan:s?m:m*2-1},d),e);default:return P(D("td",{style:I,class:[p.e("cell"),S],colSpan:m},[J(v)?void 0:D("span",{class:[p.e("label"),R]},v),D("span",{class:[p.e("content"),$]},d)]),e)}}});const ie=A({row:{type:Q(Array),default:()=>[]}}),oe={key:1},ce=w({name:"ElDescriptionsRow"}),pe=w({...ce,props:ie,setup(g){const o=T(B,{});return(t,N)=>n(o).direction==="vertical"?(l(),f(y,{key:0},[b("tr",null,[(l(!0),f(y,null,z(t.row,(a,c)=>(l(),C(n(E),{key:`tr1-${c}`,cell:a,tag:"th",type:"label"},null,8,["cell"]))),128))]),b("tr",null,[(l(!0),f(y,null,z(t.row,(a,c)=>(l(),C(n(E),{key:`tr2-${c}`,cell:a,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(l(),f("tr",oe,[(l(!0),f(y,null,z(t.row,(a,c)=>(l(),f(y,{key:`tr3-${c}`},[n(o).border?(l(),f(y,{key:0},[j(n(E),{cell:a,tag:"td",type:"label"},null,8,["cell"]),j(n(E),{cell:a,tag:"td",type:"content"},null,8,["cell"])],64)):(l(),C(n(E),{key:1,cell:a,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var ue=M(pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const de=A({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:Y,title:{type:String,default:""},extra:{type:String,default:""}}),me=w({name:"ElDescriptions"}),fe=w({...me,props:de,setup(g){const o=g,t=L("descriptions"),N=x(),a=ee();te(B,o);const c=se(()=>[t.b(),t.m(N.value)]),k=(e,u,r,s=!1)=>(e.props||(e.props={}),u>r&&(e.props.span=r),s&&(e.props.span=u),e),i=()=>{if(!a.default)return[];const e=ne(a.default()).filter(d=>{var m;return((m=d==null?void 0:d.type)==null?void 0:m.name)==="ElDescriptionsItem"}),u=[];let r=[],s=o.column,v=0;return e.forEach((d,m)=>{var S;const h=((S=d.props)==null?void 0:S.span)||1;if(m<e.length-1&&(v+=h>s?s:h),m===e.length-1){const $=o.column-v%o.column;r.push(k(d,$,s,!0)),u.push(r);return}h<s?(s-=h,r.push(d)):(r.push(k(d,h,s)),u.push(r),s=o.column,r=[])}),u};return(e,u)=>(l(),f("div",{class:_(n(c))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(l(),f("div",{key:0,class:_(n(t).e("header"))},[b("div",{class:_(n(t).e("title"))},[W(e.$slots,"title",{},()=>[F(K(e.title),1)])],2),b("div",{class:_(n(t).e("extra"))},[W(e.$slots,"extra",{},()=>[F(K(e.extra),1)])],2)],2)):le("v-if",!0),b("div",{class:_(n(t).e("body"))},[b("table",{class:_([n(t).e("table"),n(t).is("bordered",e.border)])},[b("tbody",null,[(l(!0),f(y,null,z(i(),(r,s)=>(l(),C(ue,{key:s,row:r},null,8,["row"]))),128))])],2)],2)],2))}});var he=M(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]);const ye=A({label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}),O=w({name:"ElDescriptionsItem",props:ye}),ge=ae(he,{DescriptionsItem:O}),ve=re(O);export{ve as E,ge as a};
