import{A as M,k as ke,ax as me,az as ie,aA as ve,ai as J,d as ee,bJ as fe,bK as Ie,bL as _e,W as pe,P as ge,ac as ze,K as I,bM as Le,bA as Ce,M as v,N as ue,Q as we,a3 as be,o as b,Z as ce,f as c,w as L,g as w,n as d,u as t,aT as Ee,am as C,b as O,aF as Se,e as x,by as xe,ap as Ne,$ as U,bN as Oe,bO as Te,ay as Re,bP as Ae,bQ as $e,a0 as Be,a1 as Me,an as Ve,al as de,ak as G,bm as Pe,bn as Xe,X as ye,ae as V,bE as B,bR as Ye,av as he,bS as De,t as Fe,bk as He,a8 as Ke,au as We,bT as je}from"./index.1d217137.js";import{d as Ze}from"./index.2470b070.js";import{u as Qe}from"./index.92a8df7b.js";import{g as qe}from"./index.517b5042.js";const Ge=(r,f)=>{if(!M||!r||!f)return!1;const l=r.getBoundingClientRect();let s;return f instanceof Element?s=f.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<s.bottom&&l.bottom>s.top&&l.right>s.left&&l.left<s.right};var Je="Expected a function";function re(r,f,l){var s=!0,y=!0;if(typeof r!="function")throw new TypeError(Je);return ke(l)&&(s="leading"in l?!!l.leading:s,y="trailing"in l?!!l.trailing:y),Ze(r,f,{leading:s,maxWait:f,trailing:y})}const Ue=me({urlList:{type:ie(Array),default:()=>ve([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),ea={close:()=>!0,switch:r=>J(r),rotate:r=>J(r)},aa=["src"],ta=ee({name:"ElImageViewer"}),na=ee({...ta,props:Ue,emits:ea,setup(r,{expose:f,emit:l}){const s=r,y={CONTAIN:{name:"contain",icon:fe(Ie)},ORIGINAL:{name:"original",icon:fe(_e)}},{t:E}=pe(),i=ge("image-viewer"),{nextZIndex:ae}=ze(),T=I(),N=I([]),S=Le(),_=I(!0),p=I(s.initialIndex),g=Ce(y.CONTAIN),u=I({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),P=v(()=>{const{urlList:a}=s;return a.length<=1}),A=v(()=>p.value===0),F=v(()=>p.value===s.urlList.length-1),te=v(()=>s.urlList[p.value]),ne=v(()=>[i.e("btn"),i.e("prev"),i.is("disabled",!s.infinite&&A.value)]),X=v(()=>[i.e("btn"),i.e("next"),i.is("disabled",!s.infinite&&F.value)]),se=v(()=>{const{scale:a,deg:n,offsetX:o,offsetY:h,enableTransition:z}=u.value;let m=o/a,k=h/a;switch(n%360){case 90:case-270:[m,k]=[k,-m];break;case 180:case-180:[m,k]=[-m,-k];break;case 270:case-90:[m,k]=[-k,m];break}const $={transform:`scale(${a}) rotate(${n}deg) translate(${m}px, ${k}px)`,transition:z?"transform .3s":""};return g.value.name===y.CONTAIN.name&&($.maxWidth=$.maxHeight="100%"),$}),H=v(()=>J(s.zIndex)?s.zIndex:ae());function R(){oe(),l("close")}function le(){const a=re(o=>{switch(o.code){case B.esc:s.closeOnPressEscape&&R();break;case B.space:Z();break;case B.left:Q();break;case B.up:e("zoomIn");break;case B.right:q();break;case B.down:e("zoomOut");break}}),n=re(o=>{const h=o.deltaY||o.deltaX;e(h<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});S.run(()=>{V(document,"keydown",a),V(document,"wheel",n)})}function oe(){S.stop()}function K(){_.value=!1}function W(a){_.value=!1,a.target.alt=E("el.image.error")}function j(a){if(_.value||a.button!==0||!T.value)return;u.value.enableTransition=!1;const{offsetX:n,offsetY:o}=u.value,h=a.pageX,z=a.pageY,m=re($=>{u.value={...u.value,offsetX:n+$.pageX-h,offsetY:o+$.pageY-z}}),k=V(document,"mousemove",m);V(document,"mouseup",()=>{k()}),a.preventDefault()}function Y(){u.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function Z(){if(_.value)return;const a=Ye(y),n=Object.values(y),o=g.value.name,z=(n.findIndex(m=>m.name===o)+1)%a.length;g.value=y[a[z]],Y()}function D(a){const n=s.urlList.length;p.value=(a+n)%n}function Q(){A.value&&!s.infinite||D(p.value-1)}function q(){F.value&&!s.infinite||D(p.value+1)}function e(a,n={}){if(_.value)return;const{minScale:o,maxScale:h}=s,{zoomRate:z,rotateDeg:m,enableTransition:k}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(a){case"zoomOut":u.value.scale>o&&(u.value.scale=Number.parseFloat((u.value.scale/z).toFixed(3)));break;case"zoomIn":u.value.scale<h&&(u.value.scale=Number.parseFloat((u.value.scale*z).toFixed(3)));break;case"clockwise":u.value.deg+=m,l("rotate",u.value.deg);break;case"anticlockwise":u.value.deg-=m,l("rotate",u.value.deg);break}u.value.enableTransition=k}return ue(te,()=>{we(()=>{const a=N.value[0];a!=null&&a.complete||(_.value=!0)})}),ue(p,a=>{Y(),l("switch",a)}),be(()=>{var a,n;le(),(n=(a=T.value)==null?void 0:a.focus)==null||n.call(a)}),f({setActiveItem:D}),(a,n)=>(b(),ce(Xe,{to:"body",disabled:!a.teleported},[c(Pe,{name:"viewer-fade",appear:""},{default:L(()=>[w("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:d(t(i).e("wrapper")),style:de({zIndex:t(H)})},[w("div",{class:d(t(i).e("mask")),onClick:n[0]||(n[0]=Ee(o=>a.hideOnClickModal&&R(),["self"]))},null,2),C(" CLOSE "),w("span",{class:d([t(i).e("btn"),t(i).e("close")]),onClick:R},[c(t(O),null,{default:L(()=>[c(t(Se))]),_:1})],2),C(" ARROW "),t(P)?C("v-if",!0):(b(),x(U,{key:0},[w("span",{class:d(t(ne)),onClick:Q},[c(t(O),null,{default:L(()=>[c(t(xe))]),_:1})],2),w("span",{class:d(t(X)),onClick:q},[c(t(O),null,{default:L(()=>[c(t(Ne))]),_:1})],2)],64)),C(" ACTIONS "),w("div",{class:d([t(i).e("btn"),t(i).e("actions")])},[w("div",{class:d(t(i).e("actions__inner"))},[c(t(O),{onClick:n[1]||(n[1]=o=>e("zoomOut"))},{default:L(()=>[c(t(Oe))]),_:1}),c(t(O),{onClick:n[2]||(n[2]=o=>e("zoomIn"))},{default:L(()=>[c(t(Te))]),_:1}),w("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(O),{onClick:Z},{default:L(()=>[(b(),ce(Re(t(g).icon)))]),_:1}),w("i",{class:d(t(i).e("actions__divider"))},null,2),c(t(O),{onClick:n[3]||(n[3]=o=>e("anticlockwise"))},{default:L(()=>[c(t(Ae))]),_:1}),c(t(O),{onClick:n[4]||(n[4]=o=>e("clockwise"))},{default:L(()=>[c(t($e))]),_:1})],2)],2),C(" CANVAS "),w("div",{class:d(t(i).e("canvas"))},[(b(!0),x(U,null,Be(a.urlList,(o,h)=>Me((b(),x("img",{ref_for:!0,ref:z=>N.value[h]=z,key:o,src:o,style:de(t(se)),class:d(t(i).e("img")),onLoad:K,onError:W,onMousedown:j},null,46,aa)),[[Ve,h===p.value]])),128))],2),G(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var sa=ye(na,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const la=he(sa),oa=me({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:ie([String,Object])},previewSrcList:{type:ie(Array),default:()=>ve([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),ra={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>J(r),close:()=>!0,show:()=>!0},ia=["src","loading"],ua={key:0},ca=ee({name:"ElImage",inheritAttrs:!1}),da=ee({...ca,props:oa,emits:ra,setup(r,{emit:f}){const l=r;let s="";const{t:y}=pe(),E=ge("image"),i=De(),ae=Qe(),T=I(),N=I(!1),S=I(!0),_=I(!1),p=I(),g=I(),u=M&&"loading"in HTMLImageElement.prototype;let P,A;const F=v(()=>[E.e("inner"),X.value&&E.e("preview"),S.value&&E.is("loading")]),te=v(()=>i.style),ne=v(()=>{const{fit:e}=l;return M&&e?{objectFit:e}:{}}),X=v(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),se=v(()=>{const{previewSrcList:e,initialIndex:a}=l;let n=a;return a>e.length-1&&(n=0),n}),H=v(()=>l.loading==="eager"?!1:!u&&l.loading==="lazy"||l.lazy),R=()=>{!M||(S.value=!0,N.value=!1,T.value=l.src)};function le(e){S.value=!1,N.value=!1,f("load",e)}function oe(e){S.value=!1,N.value=!0,f("error",e)}function K(){Ge(p.value,g.value)&&(R(),Y())}const W=je(K,200,!0);async function j(){var e;if(!M)return;await we();const{scrollContainer:a}=l;Ke(a)?g.value=a:We(a)&&a!==""?g.value=(e=document.querySelector(a))!=null?e:void 0:p.value&&(g.value=qe(p.value)),g.value&&(P=V(g,"scroll",W),setTimeout(()=>K(),100))}function Y(){!M||!g.value||!W||(P==null||P(),g.value=void 0)}function Z(e){if(!!e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function D(){!X.value||(A=V("wheel",Z,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",_.value=!0,f("show"))}function Q(){A==null||A(),document.body.style.overflow=s,_.value=!1,f("close")}function q(e){f("switch",e)}return ue(()=>l.src,()=>{H.value?(S.value=!0,N.value=!1,Y(),j()):R()}),be(()=>{H.value?j():R()}),(e,a)=>(b(),x("div",{ref_key:"container",ref:p,class:d([t(E).b(),e.$attrs.class]),style:de(t(te))},[N.value?G(e.$slots,"error",{key:0},()=>[w("div",{class:d(t(E).e("error"))},Fe(t(y)("el.image.error")),3)]):(b(),x(U,{key:1},[T.value!==void 0?(b(),x("img",He({key:0},t(ae),{src:T.value,loading:e.loading,style:t(ne),class:t(F),onClick:D,onLoad:le,onError:oe}),null,16,ia)):C("v-if",!0),S.value?(b(),x("div",{key:1,class:d(t(E).e("wrapper"))},[G(e.$slots,"placeholder",{},()=>[w("div",{class:d(t(E).e("placeholder"))},null,2)])],2)):C("v-if",!0)],64)),t(X)?(b(),x(U,{key:2},[_.value?(b(),ce(t(la),{key:0,"z-index":e.zIndex,"initial-index":t(se),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:Q,onSwitch:q},{default:L(()=>[e.$slots.viewer?(b(),x("div",ua,[G(e.$slots,"viewer")])):C("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):C("v-if",!0)],64)):C("v-if",!0)],6))}});var fa=ye(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const wa=he(fa);export{wa as E};
