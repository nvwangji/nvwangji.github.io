import{ax as k,ah as z,au as N,ai as w,D as _,K as S,a6 as q,M as v,ag as H,aL as W,d as y,P as B,o as I,e as G,g,a1 as h,cb as P,u as e,R as F,n as c,aT as R,ak as V,i as D,t as M,X as $,Q as T,al as X,bc as x,aM as J,aQ as Y,a3 as Z,aj as ee,r as ae,O as oe,N as le,aN as se,av as ne,aw as K}from"./index.7006beae.js";import{U as C,C as te}from"./event.776e7e11.js";const A=k({size:z,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),re=k({...A,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),L={[C]:s=>N(s)||w(s)||_(s),[te]:s=>N(s)||w(s)||_(s)},U=Symbol("radioGroupKey"),j=(s,m)=>{const n=S(),o=q(U,void 0),d=v(()=>!!o),b=v({get(){return d.value?o.modelValue:s.modelValue},set(i){d.value?o.changeEvent(i):m&&m(C,i),n.value.checked=s.modelValue===s.label}}),r=H(v(()=>o==null?void 0:o.size)),u=W(v(()=>o==null?void 0:o.disabled)),l=S(!1),p=v(()=>u.value||d.value&&b.value!==s.label?-1:0);return{radioRef:n,isGroup:d,radioGroup:o,focus:l,size:r,disabled:u,tabIndex:p,modelValue:b}},ie=["value","name","disabled"],de=y({name:"ElRadio"}),ue=y({...de,props:re,emits:L,setup(s,{emit:m}){const n=s,o=B("radio"),{radioRef:d,radioGroup:b,focus:r,size:u,disabled:l,modelValue:p}=j(n,m);function i(){T(()=>m("change",p.value))}return(a,t)=>{var f;return I(),G("label",{class:c([e(o).b(),e(o).is("disabled",e(l)),e(o).is("focus",e(r)),e(o).is("bordered",a.border),e(o).is("checked",e(p)===a.label),e(o).m(e(u))])},[g("span",{class:c([e(o).e("input"),e(o).is("disabled",e(l)),e(o).is("checked",e(p)===a.label)])},[h(g("input",{ref_key:"radioRef",ref:d,"onUpdate:modelValue":t[0]||(t[0]=E=>F(p)?p.value=E:null),class:c(e(o).e("original")),value:a.label,name:a.name||((f=e(b))==null?void 0:f.name),disabled:e(l),type:"radio",onFocus:t[1]||(t[1]=E=>r.value=!0),onBlur:t[2]||(t[2]=E=>r.value=!1),onChange:i,onClick:t[3]||(t[3]=R(()=>{},["stop"]))},null,42,ie),[[P,e(p)]]),g("span",{class:c(e(o).e("inner"))},null,2)],2),g("span",{class:c(e(o).e("label")),onKeydown:t[4]||(t[4]=R(()=>{},["stop"]))},[V(a.$slots,"default",{},()=>[D(M(a.label),1)])],34)],2)}}});var pe=$(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const me=k({...A,name:{type:String,default:""}}),be=["value","name","disabled"],ce=y({name:"ElRadioButton"}),fe=y({...ce,props:me,setup(s){const m=s,n=B("radio"),{radioRef:o,focus:d,size:b,disabled:r,modelValue:u,radioGroup:l}=j(m),p=v(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(i,a)=>{var t;return I(),G("label",{class:c([e(n).b("button"),e(n).is("active",e(u)===i.label),e(n).is("disabled",e(r)),e(n).is("focus",e(d)),e(n).bm("button",e(b))])},[h(g("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":a[0]||(a[0]=f=>F(u)?u.value=f:null),class:c(e(n).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((t=e(l))==null?void 0:t.name),disabled:e(r),onFocus:a[1]||(a[1]=f=>d.value=!0),onBlur:a[2]||(a[2]=f=>d.value=!1),onClick:a[3]||(a[3]=R(()=>{},["stop"]))},null,42,be),[[P,e(u)]]),g("span",{class:c(e(n).be("button","inner")),style:X(e(u)===i.label?e(p):{}),onKeydown:a[4]||(a[4]=R(()=>{},["stop"]))},[V(i.$slots,"default",{},()=>[D(M(i.label),1)])],38)],2)}}});var O=$(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const ve=k({id:{type:String,default:void 0},size:z,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ge=L,ye=["id","aria-label","aria-labelledby"],Re=y({name:"ElRadioGroup"}),ke=y({...Re,props:ve,emits:ge,setup(s,{emit:m}){const n=s,o=B("radio"),d=x(),b=S(),{formItem:r}=J(),{inputId:u,isLabeledByFormItem:l}=Y(n,{formItemContext:r}),p=a=>{m(C,a),T(()=>m("change",a))};Z(()=>{const a=b.value.querySelectorAll("[type=radio]"),t=a[0];!Array.from(a).some(f=>f.checked)&&t&&(t.tabIndex=0)});const i=v(()=>n.name||d.value);return ee(U,ae({...oe(n),changeEvent:p,name:i})),le(()=>n.modelValue,()=>{n.validateEvent&&(r==null||r.validate("change").catch(a=>se()))}),(a,t)=>(I(),G("div",{id:e(u),ref_key:"radioGroupRef",ref:b,class:c(e(o).b("group")),role:"radiogroup","aria-label":e(l)?void 0:a.label||"radio-group","aria-labelledby":e(l)?e(r).labelId:void 0},[V(a.$slots,"default")],10,ye))}});var Q=$(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Be=ne(pe,{RadioButton:O,RadioGroup:Q}),Ie=K(Q);K(O);export{Be as E,Ie as a};