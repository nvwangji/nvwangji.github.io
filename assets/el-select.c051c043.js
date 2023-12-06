import{bz as Fl,a6 as Ne,M as p,J as Se,aO as Fe,I as N,N as F,u as S,L as gl,d as Ie,P as de,bc as kl,r as Re,O as yl,at as Rl,Q as k,X as He,a1 as we,an as Cl,o as g,e as D,ak as ue,g as z,t as Z,n as O,aT as J,K,a3 as Ol,af as Kl,al as ne,W as Sl,bi as Hl,bA as Il,aM as Ql,bB as Gl,ag as jl,aN as Ul,aG as oe,bC as Oe,A as Xl,as as Yl,ai as Jl,bD as bl,bE as Tl,au as zl,S as Zl,T as xl,b as _l,bF as en,b8 as Ll,aD as ln,U as nn,bG as on,aj as Al,bH as tn,a as Y,Y as an,f as se,w as L,Z as W,$ as qe,a0 as hl,am as Q,bm as El,bx as q,bI as rn,bl as sn,ay as Ml,av as un,aw as Bl}from"./index.7006beae.js";import{i as dn,E as cn}from"./index.bfa5536e.js";import{E as pn,t as fn}from"./index.bd815bb4.js";import{e as vn}from"./strings.f6901f8b.js";import{U as x,C as Wl}from"./event.776e7e11.js";import{s as mn}from"./scroll.4eabaed8.js";import{b as bn}from"./_baseIteratee.96933136.js";import{t as hn,d as Vl,C as gn}from"./index.2d2aac23.js";import{i as $l}from"./isEqual.57f99950.js";import{i as yn}from"./validator.d91f66e6.js";var Dl=1/0,Cn=17976931348623157e292;function On(e){if(!e)return e===0?e:0;if(e=hn(e),e===Dl||e===-Dl){var l=e<0?-1:1;return l*Cn}return e===e?e:0}function Sn(e){var l=On(e),a=l%1;return l===l?a?l-a:l:0}function wn(e,l,a,v){for(var f=e.length,u=a+(v?1:-1);v?u--:++u<f;)if(l(e[u],u,e))return u;return-1}var In=Math.max,Tn=Math.min;function Ln(e,l,a){var v=e==null?0:e.length;if(!v)return-1;var f=v-1;return a!==void 0&&(f=Sn(a),f=a<0?In(v+f,0):Tn(f,v-1)),wn(e,bn(l),f,!0)}const En=e=>Fl[e||"default"],ql=Symbol("ElSelectGroup"),Qe=Symbol("ElSelect");function Mn(e,l){const a=Ne(Qe),v=Ne(ql,{disabled:!1}),f=p(()=>Se(e.value)),u=p(()=>a.props.multiple?h(a.props.modelValue,e.value):I(e.value,a.props.modelValue)),s=p(()=>{if(a.props.multiple){const c=a.props.modelValue||[];return!u.value&&c.length>=a.props.multipleLimit&&a.props.multipleLimit>0}else return!1}),m=p(()=>e.label||(f.value?"":e.value)),d=p(()=>e.value||e.label||""),w=p(()=>e.disabled||l.groupDisabled||s.value),b=gl(),h=(c=[],y)=>{if(f.value){const t=a.props.valueKey;return c&&c.some(C=>Fe(N(C,t))===N(y,t))}else return c&&c.includes(y)},I=(c,y)=>{if(f.value){const{valueKey:t}=a.props;return N(c,t)===N(y,t)}else return c===y},E=()=>{!e.disabled&&!v.disabled&&(a.hoverIndex=a.optionsArray.indexOf(b.proxy))};F(()=>m.value,()=>{!e.created&&!a.props.remote&&a.setSelected()}),F(()=>e.value,(c,y)=>{const{remote:t,valueKey:C}=a.props;if(Object.is(c,y)||(a.onOptionDestroy(y,b.proxy),a.onOptionCreate(b.proxy)),!e.created&&!t){if(C&&Se(c)&&Se(y)&&c[C]===y[C])return;a.setSelected()}}),F(()=>v.disabled,()=>{l.groupDisabled=v.disabled},{immediate:!0});const{queryChange:T}=Fe(a);return F(T,c=>{const{query:y}=S(c),t=new RegExp(vn(y),"i");l.visible=t.test(m.value)||e.created,l.visible||a.filteredOptionsCount--},{immediate:!0}),{select:a,currentLabel:m,currentValue:d,itemSelected:u,isDisabled:w,hoverItem:E}}const Vn=Ie({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const l=de("select"),a=kl(),v=p(()=>[l.be("dropdown","item"),l.is("disabled",S(m)),{selected:S(s),hover:S(h)}]),f=Re({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:u,itemSelected:s,isDisabled:m,select:d,hoverItem:w}=Mn(e,f),{visible:b,hover:h}=yl(f),I=gl().proxy;d.onOptionCreate(I),Rl(()=>{const T=I.value,{selected:c}=d,t=(d.props.multiple?c:[c]).some(C=>C.value===I.value);k(()=>{d.cachedOptions.get(T)===I&&!t&&d.cachedOptions.delete(T)}),d.onOptionDestroy(T,I)});function E(){e.disabled!==!0&&f.groupDisabled!==!0&&d.handleOptionSelect(I)}return{ns:l,id:a,containerKls:v,currentLabel:u,itemSelected:s,isDisabled:m,select:d,hoverItem:w,visible:b,hover:h,selectOptionClick:E,states:f}}}),$n=["id","aria-disabled","aria-selected"];function Dn(e,l,a,v,f,u){return we((g(),D("li",{id:e.id,class:O(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:l[0]||(l[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:l[1]||(l[1]=J((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[ue(e.$slots,"default",{},()=>[z("span",null,Z(e.currentLabel),1)])],42,$n)),[[Cl,e.visible]])}var wl=He(Vn,[["render",Dn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Pn=Ie({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Ne(Qe),l=de("select"),a=p(()=>e.props.popperClass),v=p(()=>e.props.multiple),f=p(()=>e.props.fitInputWidth),u=K("");function s(){var m;u.value=`${(m=e.selectWrapper)==null?void 0:m.offsetWidth}px`}return Ol(()=>{s(),Kl(e.selectWrapper,s)}),{ns:l,minWidth:u,popperClass:a,isMultiple:v,isFitInputWidth:f}}});function kn(e,l,a,v,f,u){return g(),D("div",{class:O([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ne({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ue(e.$slots,"default")],6)}var Kn=He(Pn,[["render",kn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function zn(e){const{t:l}=Sl();return Re({options:new Map,cachedOptions:new Map,disabledOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,prefixWidth:11,mouseEnter:!1,focused:!1})}const An=(e,l,a)=>{const{t:v}=Sl(),f=de("select");Hl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},p(()=>e.suffixTransition===!1));const u=K(null),s=K(null),m=K(null),d=K(null),w=K(null),b=K(null),h=K(null),I=K(null),E=K(),T=Il({query:""}),c=Il(""),y=K([]);let t=0;const{form:C,formItem:G}=Ql(),Ge=p(()=>!e.filterable||e.multiple||!l.visible),j=p(()=>e.disabled||(C==null?void 0:C.disabled)),Te=p(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!j.value&&l.inputHovering&&n}),Le=p(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),je=p(()=>f.is("reverse",Le.value&&l.visible&&e.suffixTransition)),ce=p(()=>(C==null?void 0:C.statusIcon)&&(G==null?void 0:G.validateState)&&Gl[G==null?void 0:G.validateState]),Ee=p(()=>e.remote?300:0),pe=p(()=>e.loading?e.loadingText||v("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||v("el.select.noMatch"):l.options.size===0?e.noDataText||v("el.select.noData"):null),M=p(()=>{const n=Array.from(l.options.values()),o=[];return y.value.forEach(i=>{const r=n.findIndex(V=>V.currentLabel===i);r>-1&&o.push(n[r])}),o.length>=n.length?o:n}),Ue=p(()=>Array.from(l.cachedOptions.values())),Xe=p(()=>{const n=M.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),_=jl(),Ye=p(()=>["small"].includes(_.value)?"small":"default"),Je=p({get(){return l.visible&&pe.value!==!1},set(n){l.visible=n}});F([()=>j.value,()=>_.value,()=>C==null?void 0:C.size],()=>{k(()=>{R()})}),F(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n,e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(l.currentPlaceholder="")}),F(()=>e.modelValue,(n,o)=>{e.multiple&&(R(),n&&n.length>0||s.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",X(l.query))),fe(),e.filterable&&!e.multiple&&(l.inputLength=20),!$l(n,o)&&e.validateEvent&&(G==null||G.validate("change").catch(i=>Ul()))},{flush:"post",deep:!0}),F(()=>l.visible,n=>{var o,i,r,V,$;n?((i=(o=d.value)==null?void 0:o.updatePopper)==null||i.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,(V=(r=m.value)==null?void 0:r.focus)==null||V.call(r),e.multiple?($=s.value)==null||$.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),X(l.query),!e.multiple&&!e.remote&&(T.value.query="",Oe(T),Oe(c)))):(e.filterable&&(oe(e.filterMethod)&&e.filterMethod(""),oe(e.remoteMethod)&&e.remoteMethod("")),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Ze(),k(()=>{s.value&&s.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),a.emit("visible-change",n)}),F(()=>l.options.entries(),()=>{var n,o,i;if(!Xl)return;(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R();const r=((i=h.value)==null?void 0:i.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!Yl(e.modelValue)||!Array.from(r).includes(document.activeElement))&&fe(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ve()},{flush:"post"}),F(()=>l.hoverIndex,n=>{Jl(n)&&n>-1?E.value=M.value[n]||{}:E.value={},M.value.forEach(o=>{o.hover=E.value===o})});const R=()=>{k(()=>{var n,o;if(!u.value)return;const i=u.value.$el.querySelector("input");t=t||(i.clientHeight>0?i.clientHeight+2:0);const r=b.value,V=getComputedStyle(i).getPropertyValue(f.cssVarName("input-height")),$=Number.parseFloat(V)||En(_.value||(C==null?void 0:C.size)),A=_.value||$===t||t<=0?$:t;!(i.offsetParent===null)&&(i.style.height=`${(l.selected.length===0?A:Math.max(r?r.clientHeight+(r.clientHeight>A?6:0):0,A))-2}px`),l.visible&&pe.value!==!1&&((o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n))})},X=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(oe(e.filterMethod)||oe(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,k(()=>{var o,i;l.visible&&((i=(o=d.value)==null?void 0:o.updatePopper)==null||i.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&k(()=>{if(!j.value){const o=s.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Me()}R()}),e.remote&&oe(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):oe(e.filterMethod)?(e.filterMethod(n),Oe(c)):(l.filteredOptionsCount=l.optionsCount,T.value.query=n,Oe(T),Oe(c)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await k(),Ve())}},Me=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},Ve=()=>{const n=M.value.filter(r=>r.visible&&!r.disabled&&!r.states.groupDisabled),o=n.find(r=>r.created),i=n[0];l.hoverIndex=ve(M.value,o||i)},fe=()=>{var n;if(e.multiple)l.selectedLabel="";else{const i=$e(e.modelValue);(n=i.props)!=null&&n.created?(l.createdLabel=i.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=i.currentLabel,l.selected=i,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(i=>{o.push($e(i))}),l.selected=o,k(()=>{R()})},$e=n=>{let o;const i=bl(n).toLowerCase()==="object",r=bl(n).toLowerCase()==="null",V=bl(n).toLowerCase()==="undefined";for(let H=l.cachedOptions.size-1;H>=0;H--){const B=Ue.value[H];if(i?N(B.value,e.valueKey)===N(n,e.valueKey):B.value===n){o={value:n,currentLabel:B.currentLabel,isDisabled:B.isDisabled};break}}if(o)return o;const $=i?n.label:!r&&!V?n:"",A={value:n,currentLabel:$};return e.multiple&&(A.hitState=!1),A},Ze=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>M.value.findIndex(i=>N(i,n)===N(o,n)))):l.hoverIndex=-1:l.hoverIndex=M.value.findIndex(o=>re(o)===re(l.selected))},300)},xe=()=>{var n,o;_e(),(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&R()},_e=()=>{var n;l.inputWidth=(n=u.value)==null?void 0:n.$el.offsetWidth},el=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,X(l.query))},ll=Vl(()=>{el()},Ee.value),nl=Vl(n=>{X(n.target.value)},Ee.value),ee=n=>{$l(e.modelValue,n)||a.emit(Wl,n)},De=n=>Ln(n,o=>!l.disabledOptions.has(o)),ol=n=>{if(n.code!==Tl.delete){if(n.target.value.length<=0&&!be()){const o=e.modelValue.slice(),i=De(o);if(i<0)return;o.splice(i,1),a.emit(x,o),ee(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}},te=(n,o)=>{const i=l.selected.indexOf(o);if(i>-1&&!j.value){const r=e.modelValue.slice();r.splice(i,1),a.emit(x,r),ee(r),a.emit("remove-tag",o.value)}n.stopPropagation(),ae()},Pe=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!zl(o))for(const i of l.selected)i.isDisabled&&o.push(i.value);a.emit(x,o),ee(o),l.hoverIndex=-1,l.visible=!1,a.emit("clear"),ae()},ke=n=>{var o;if(e.multiple){const i=(e.modelValue||[]).slice(),r=ve(i,n.value);r>-1?i.splice(r,1):(e.multipleLimit<=0||i.length<e.multipleLimit)&&i.push(n.value),a.emit(x,i),ee(i),n.created&&(l.query="",X(""),l.inputLength=20),e.filterable&&((o=s.value)==null||o.focus())}else a.emit(x,n.value),ee(n.value),l.visible=!1;tl(),!l.visible&&k(()=>{ie(n)})},ve=(n=[],o)=>{if(!Se(o))return n.indexOf(o);const i=e.valueKey;let r=-1;return n.some((V,$)=>Fe(N(V,i))===N(o,i)?(r=$,!0):!1),r},tl=()=>{const n=s.value||u.value;n&&(n==null||n.focus())},ie=n=>{var o,i,r,V,$;const A=Array.isArray(n)?n[0]:n;let H=null;if(A!=null&&A.value){const B=M.value.filter(We=>We.value===A.value);B.length>0&&(H=B[0].$el)}if(d.value&&H){const B=(V=(r=(i=(o=d.value)==null?void 0:o.popperRef)==null?void 0:i.contentRef)==null?void 0:r.querySelector)==null?void 0:V.call(r,`.${f.be("dropdown","wrap")}`);B&&mn(B,H)}($=I.value)==null||$.handleScroll()},me=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n),n.disabled&&l.disabledOptions.set(n.value,n)},il=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},al=n=>{n.code!==Tl.backspace&&be(!1),l.inputLength=s.value.value.length*15+20,R()},be=n=>{if(!Array.isArray(l.selected))return;const o=De(l.selected.map(r=>r.value)),i=l.selected[o];if(!!i)return n===!0||n===!1?(i.hitState=n,n):(i.hitState=!i.hitState,i.hitState)},rl=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,k(()=>X(o));else{const i=o[o.length-1]||"";l.isOnComposition=!dn(i)}},sl=()=>{k(()=>ie(l.selected))},ul=n=>{l.focused||((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),l.focused=!0,a.emit("focus",n))},ae=()=>{var n,o;l.visible?(n=s.value||u.value)==null||n.focus():(o=u.value)==null||o.focus()},dl=()=>{var n,o,i;l.visible=!1,(n=u.value)==null||n.blur(),(i=(o=m.value)==null?void 0:o.blur)==null||i.call(o)},U=n=>{var o,i,r;((o=d.value)==null?void 0:o.isFocusInsideContent(n))||((i=w.value)==null?void 0:i.isFocusInsideContent(n))||((r=h.value)==null?void 0:r.contains(n.relatedTarget))||(l.visible&&ge(),l.focused=!1,a.emit("blur",n))},he=n=>{Pe(n)},ge=()=>{l.visible=!1},ye=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Ke=n=>{n&&!l.mouseEnter||j.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!d.value||!d.value.isFocusInsideContent())&&(l.visible=!l.visible),ae())},cl=()=>{l.visible?M.value[l.hoverIndex]&&ke(M.value[l.hoverIndex]):Ke()},re=n=>Se(n.value)?N(n.value,e.valueKey):n.value,ze=p(()=>M.value.filter(n=>n.visible).every(n=>n.disabled)),pl=p(()=>e.multiple?l.selected.slice(0,e.maxCollapseTags):[]),Ce=p(()=>e.multiple?l.selected.slice(e.maxCollapseTags):[]),Ae=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!ze.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=M.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&Ae(n),k(()=>ie(E.value))}},fl=()=>{l.mouseEnter=!0},Be=()=>{l.mouseEnter=!1},vl=(n,o)=>{var i,r;te(n,o),(r=(i=w.value)==null?void 0:i.updatePopper)==null||r.call(i)},ml=p(()=>({maxWidth:`${S(l.inputWidth)-32-(ce.value?22:0)}px`,width:"100%"}));return{optionList:y,optionsArray:M,hoverOption:E,selectSize:_,handleResize:xe,debouncedOnInputChange:ll,debouncedQueryChange:nl,deletePrevTag:ol,deleteTag:te,deleteSelected:Pe,handleOptionSelect:ke,scrollToOption:ie,readonly:Ge,resetInputHeight:R,showClose:Te,iconComponent:Le,iconReverse:je,showNewOption:Xe,collapseTagSize:Ye,setSelected:fe,managePlaceholder:Me,selectDisabled:j,emptyText:pe,toggleLastOptionHitState:be,resetInputState:al,handleComposition:rl,onOptionCreate:me,onOptionDestroy:il,handleMenuEnter:sl,handleFocus:ul,focus:ae,blur:dl,handleBlur:U,handleClearClick:he,handleClose:ge,handleKeydownEscape:ye,toggleMenu:Ke,selectOption:cl,getValueKey:re,navigateOptions:Ae,handleDeleteTooltipTag:vl,dropMenuVisible:Je,queryChange:T,groupQueryChange:c,showTagList:pl,collapseTagList:Ce,selectTagsStyle:ml,reference:u,input:s,iOSInput:m,tooltipRef:d,tagTooltipRef:w,tags:b,selectWrapper:h,scrollbar:I,handleMouseEnter:fl,handleMouseLeave:Be}};var Bn=Ie({name:"ElOptions",emits:["update-options"],setup(e,{slots:l,emit:a}){let v=[];function f(u,s){if(u.length!==s.length)return!1;for(const[m]of u.entries())if(u[m]!=s[m])return!1;return!0}return()=>{var u,s;const m=(u=l.default)==null?void 0:u.call(l),d=[];function w(b){!Array.isArray(b)||b.forEach(h=>{var I,E,T,c;const y=(I=(h==null?void 0:h.type)||{})==null?void 0:I.name;y==="ElOptionGroup"?w(!zl(h.children)&&!Array.isArray(h.children)&&oe((E=h.children)==null?void 0:E.default)?(T=h.children)==null?void 0:T.default():h.children):y==="ElOption"?d.push((c=h.props)==null?void 0:c.label):Array.isArray(h.children)&&w(h.children)})}return m.length&&w((s=m[0])==null?void 0:s.children),f(d,v)||(v=d,a("update-options",d)),m}}});const Pl="ElSelect",Wn=Ie({name:Pl,componentName:Pl,components:{ElInput:cn,ElSelectMenu:Kn,ElOption:wl,ElOptions:Bn,ElTag:pn,ElScrollbar:Zl,ElTooltip:xl,ElIcon:_l},directives:{ClickOutside:gn},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:yn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:en.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:Ll,default:ln},fitInputWidth:Boolean,suffixIcon:{type:Ll,default:nn},tagType:{...fn.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:on,default:"bottom-start"},ariaLabel:{type:String,default:void 0}},emits:[x,Wl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const a=de("select"),v=de("input"),{t:f}=Sl(),u=kl(),s=zn(e),{optionList:m,optionsArray:d,hoverOption:w,selectSize:b,readonly:h,handleResize:I,collapseTagSize:E,debouncedOnInputChange:T,debouncedQueryChange:c,deletePrevTag:y,deleteTag:t,deleteSelected:C,handleOptionSelect:G,scrollToOption:Ge,setSelected:j,resetInputHeight:Te,managePlaceholder:Le,showClose:je,selectDisabled:ce,iconComponent:Ee,iconReverse:pe,showNewOption:M,emptyText:Ue,toggleLastOptionHitState:Xe,resetInputState:_,handleComposition:Ye,onOptionCreate:Je,onOptionDestroy:R,handleMenuEnter:X,handleFocus:Me,focus:Ve,blur:fe,handleBlur:$e,handleClearClick:Ze,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:ee,handleDeleteTooltipTag:De,dropMenuVisible:ol,reference:te,input:Pe,iOSInput:ke,tooltipRef:ve,tagTooltipRef:tl,tags:ie,selectWrapper:me,scrollbar:il,queryChange:al,groupQueryChange:be,handleMouseEnter:rl,handleMouseLeave:sl,showTagList:ul,collapseTagList:ae,selectTagsStyle:dl}=An(e,s,l),{inputWidth:U,selected:he,inputLength:ge,filteredOptionsCount:ye,visible:Ke,selectedLabel:cl,hoverIndex:re,query:ze,inputHovering:pl,currentPlaceholder:Ce,menuVisibleOnFocus:Ae,isOnComposition:fl,options:Be,cachedOptions:vl,optionsCount:ml,prefixWidth:n}=yl(s),o=p(()=>{const P=[a.b()],le=S(b);return le&&P.push(a.m(le)),e.disabled&&P.push(a.m("disabled")),P}),i=p(()=>[a.e("tags"),a.is("disabled",S(ce))]),r=p(()=>[a.b("tags-wrapper"),{"has-prefix":S(n)&&S(he).length}]),V=p(()=>[a.e("input"),a.is(S(b)),a.is("disabled",S(ce))]),$=p(()=>[a.e("input"),a.is(S(b)),a.em("input","iOS")]),A=p(()=>[a.is("empty",!e.allowCreate&&Boolean(S(ze))&&S(ye)===0)]),H=p(()=>({maxWidth:`${S(U)>123?S(U)-123:S(U)-75}px`})),B=p(()=>({marginLeft:`${S(n)}px`,flexGrow:1,width:`${S(ge)/(S(U)-32)}%`,maxWidth:`${S(U)-42}px`}));Al(Qe,Re({props:e,options:Be,optionsArray:d,cachedOptions:vl,optionsCount:ml,filteredOptionsCount:ye,hoverIndex:re,handleOptionSelect:G,onOptionCreate:Je,onOptionDestroy:R,selectWrapper:me,selected:he,setSelected:j,queryChange:al,groupQueryChange:be})),Ol(()=>{s.cachedPlaceHolder=Ce.value=e.placeholder||(()=>f("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Ce.value=""),Kl(me,I),e.remote&&e.multiple&&Te(),k(()=>{const P=te.value&&te.value.$el;if(!!P&&(U.value=P.getBoundingClientRect().width,l.slots.prefix)){const le=P.querySelector(`.${v.e("prefix")}`);n.value=Math.max(le.getBoundingClientRect().width+11,30)}}),j()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(x,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(x,"");const We=p(()=>{var P,le;return(le=(P=ve.value)==null?void 0:P.popperRef)==null?void 0:le.contentRef});return{isIOS:tn,onOptionsRendered:P=>{m.value=P},prefixWidth:n,selectSize:b,readonly:h,handleResize:I,collapseTagSize:E,debouncedOnInputChange:T,debouncedQueryChange:c,deletePrevTag:y,deleteTag:t,handleDeleteTooltipTag:De,deleteSelected:C,handleOptionSelect:G,scrollToOption:Ge,inputWidth:U,selected:he,inputLength:ge,filteredOptionsCount:ye,visible:Ke,selectedLabel:cl,hoverIndex:re,query:ze,inputHovering:pl,currentPlaceholder:Ce,menuVisibleOnFocus:Ae,isOnComposition:fl,options:Be,resetInputHeight:Te,managePlaceholder:Le,showClose:je,selectDisabled:ce,iconComponent:Ee,iconReverse:pe,showNewOption:M,emptyText:Ue,toggleLastOptionHitState:Xe,resetInputState:_,handleComposition:Ye,handleMenuEnter:X,handleFocus:Me,focus:Ve,blur:fe,handleBlur:$e,handleClearClick:Ze,handleClose:xe,handleKeydownEscape:_e,toggleMenu:el,selectOption:ll,getValueKey:nl,navigateOptions:ee,dropMenuVisible:ol,reference:te,input:Pe,iOSInput:ke,tooltipRef:ve,popperPaneRef:We,tags:ie,selectWrapper:me,scrollbar:il,wrapperKls:o,tagsKls:i,tagWrapperKls:r,inputKls:V,iOSInputKls:$,scrollbarKls:A,selectTagsStyle:dl,nsSelect:a,tagTextStyle:H,inputStyle:B,handleMouseEnter:rl,handleMouseLeave:sl,showTagList:ul,collapseTagList:ae,tagTooltipRef:tl,contentId:u,hoverOption:w}}}),qn=["disabled","autocomplete","aria-activedescendant","aria-controls","aria-expanded","aria-label"],Nn=["disabled"],Fn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function Rn(e,l,a,v,f,u){const s=Y("el-tag"),m=Y("el-tooltip"),d=Y("el-icon"),w=Y("el-input"),b=Y("el-option"),h=Y("el-options"),I=Y("el-scrollbar"),E=Y("el-select-menu"),T=an("click-outside");return we((g(),D("div",{ref:"selectWrapper",class:O(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...c)=>e.handleMouseEnter&&e.handleMouseEnter(...c)),onMouseleave:l[23]||(l[23]=(...c)=>e.handleMouseLeave&&e.handleMouseLeave(...c)),onClick:l[24]||(l[24]=J((...c)=>e.toggleMenu&&e.toggleMenu(...c),["stop"]))},[se(m,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:L(()=>{var c,y;return[z("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=t=>e.inputHovering=!1)},[e.multiple?(g(),D("div",{key:0,ref:"tags",tabindex:"-1",class:O(e.tagsKls),style:ne(e.selectTagsStyle),onClick:l[15]||(l[15]=(...t)=>e.focus&&e.focus(...t))},[e.collapseTags&&e.selected.length?(g(),W(El,{key:0,onAfterLeave:e.resetInputHeight},{default:L(()=>[z("span",{class:O(e.tagWrapperKls)},[(g(!0),D(qe,null,hl(e.showTagList,t=>(g(),W(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:C=>e.deleteTag(C,t)},{default:L(()=>[z("span",{class:O(e.nsSelect.e("tags-text")),style:ne(e.tagTextStyle)},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128)),e.selected.length>e.maxCollapseTags?(g(),W(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:L(()=>[e.collapseTagsTooltip?(g(),W(m,{key:0,ref:"tagTooltipRef",disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:L(()=>[z("span",{class:O(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-e.maxCollapseTags),3)]),content:L(()=>[z("div",{class:O(e.nsSelect.e("collapse-tags"))},[(g(!0),D(qe,null,hl(e.collapseTagList,t=>(g(),D("div",{key:e.getValueKey(t),class:O(e.nsSelect.e("collapse-tag"))},[se(s,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:C=>e.handleDeleteTooltipTag(C,t)},{default:L(()=>[z("span",{class:O(e.nsSelect.e("tags-text")),style:ne({maxWidth:e.inputWidth-75+"px"})},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(g(),D("span",{key:1,class:O(e.nsSelect.e("tags-text"))},"+ "+Z(e.selected.length-e.maxCollapseTags),3))]),_:1},8,["size","type"])):Q("v-if",!0)],2)]),_:1},8,["onAfterLeave"])):Q("v-if",!0),e.collapseTags?Q("v-if",!0):(g(),W(El,{key:1,onAfterLeave:e.resetInputHeight},{default:L(()=>[z("span",{class:O(e.tagWrapperKls),style:ne(e.prefixWidth&&e.selected.length?{marginLeft:`${e.prefixWidth}px`}:"")},[(g(!0),D(qe,null,hl(e.selected,t=>(g(),W(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:C=>e.deleteTag(C,t)},{default:L(()=>[z("span",{class:O(e.nsSelect.e("tags-text")),style:ne({maxWidth:e.inputWidth-75+"px"})},Z(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],6)]),_:1},8,["onAfterLeave"])),e.filterable&&!e.selectDisabled?we((g(),D("input",{key:2,ref:"input","onUpdate:modelValue":l[0]||(l[0]=t=>e.query=t),type:"text",class:O(e.inputKls),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ne(e.inputStyle),role:"combobox","aria-activedescendant":((c=e.hoverOption)==null?void 0:c.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[3]||(l[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[4]||(l[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[5]||(l[5]=q(J(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[6]||(l[6]=q(J(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[7]||(l[7]=q((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[8]||(l[8]=q(J((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[9]||(l[9]=q((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[10]||(l[10]=q(t=>e.visible=!1,["tab"]))],onCompositionstart:l[11]||(l[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[14]||(l[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,qn)),[[rn,e.query]]):Q("v-if",!0)],6)):Q("v-if",!0),e.isIOS&&!e.multiple&&e.filterable&&e.readonly?(g(),D("input",{key:1,ref:"iOSInput",class:O(e.iOSInputKls),disabled:e.selectDisabled,type:"text"},null,10,Nn)):Q("v-if",!0),se(w,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedLabel=t),type:"text",placeholder:typeof e.currentPlaceholder=="function"?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:O([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,role:"combobox","aria-activedescendant":((y=e.hoverOption)==null?void 0:y.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropMenuVisible,label:e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=q(J(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=q(J(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),q(J(e.selectOption,["stop","prevent"]),["enter"]),q(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=q(t=>e.visible=!1,["tab"]))]},sn({suffix:L(()=>[e.iconComponent&&!e.showClose?(g(),W(d,{key:0,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:L(()=>[(g(),W(Ml(e.iconComponent)))]),_:1},8,["class"])):Q("v-if",!0),e.showClose&&e.clearIcon?(g(),W(d,{key:1,class:O([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:L(()=>[(g(),W(Ml(e.clearIcon)))]),_:1},8,["class","onClick"])):Q("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:L(()=>[z("div",Fn,[ue(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","aria-activedescendant","aria-controls","aria-expanded","label","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]}),content:L(()=>[se(E,null,{default:L(()=>[we(se(I,{id:e.contentId,ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:O(e.scrollbarKls),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:L(()=>[e.showNewOption?(g(),W(b,{key:0,value:e.query,created:!0},null,8,["value"])):Q("v-if",!0),se(h,{onUpdateOptions:e.onOptionsRendered},{default:L(()=>[ue(e.$slots,"default")]),_:3},8,["onUpdateOptions"])]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Cl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(g(),D(qe,{key:0},[e.$slots.empty?ue(e.$slots,"empty",{key:0}):(g(),D("p",{key:1,class:O(e.nsSelect.be("dropdown","empty"))},Z(e.emptyText),3))],64)):Q("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[T,e.handleClose,e.popperPaneRef]])}var Hn=He(Wn,[["render",Rn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const Qn=Ie({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const l=de("select"),a=K(!0),v=gl(),f=K([]);Al(ql,Re({...yl(e)}));const u=Ne(Qe);Ol(()=>{f.value=s(v.subTree)});const s=d=>{const w=[];return Array.isArray(d.children)&&d.children.forEach(b=>{var h;b.type&&b.type.name==="ElOption"&&b.component&&b.component.proxy?w.push(b.component.proxy):(h=b.children)!=null&&h.length&&w.push(...s(b))}),w},{groupQueryChange:m}=Fe(u);return F(m,()=>{a.value=f.value.some(d=>d.visible===!0)},{flush:"post"}),{visible:a,ns:l}}});function Gn(e,l,a,v,f,u){return we((g(),D("ul",{class:O(e.ns.be("group","wrap"))},[z("li",{class:O(e.ns.be("group","title"))},Z(e.label),3),z("li",null,[z("ul",{class:O(e.ns.b("group"))},[ue(e.$slots,"default")],2)])],2)),[[Cl,e.visible]])}var Nl=He(Qn,[["render",Gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const oo=un(Hn,{Option:wl,OptionGroup:Nl}),to=Bl(wl);Bl(Nl);export{to as E,oo as a,wn as b};
