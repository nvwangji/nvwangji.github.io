import{ax as P,az as $,d as S,P as L,M as O,aG as R,ai as U,o as p,e as m,n as y,u,ak as C,i as c,t as h,am as w,g as o,al as q,X as G,av as K,r as M,K as D,b as Q,T as X,f as e,w as a,p as Z,j as H,dP as z,$ as J,a0 as W,Z as Y,dQ as ee,dR as te,_ as ae}from"./index.1d217137.js";import{E as oe}from"./el-pagination.dd2e61c8.js";/* empty css                 *//* empty css               */import"./el-select.059e5ae3.js";import{E as se,a as le}from"./el-table-column.95901fa4.js";/* empty css                    */import{E as ne}from"./el-date-picker.5fa464d4.js";import{E as ue}from"./el-row.d146bde5.js";import{E as re}from"./el-col.fa7b6f09.js";import{E as ie}from"./el-card.146dba2b.js";import{g as de}from"./index.49595ae6.js";import"./isEqual.6c06b711.js";import"./_Uint8Array.c9a01e9e.js";import"./index.92a8df7b.js";import"./event.776e7e11.js";import"./index.517b5042.js";import"./strings.a52aca86.js";import"./_baseIteratee.15aecd01.js";import"./hasIn.e82d5dd8.js";import"./index.2470b070.js";import"./validator.0c079793.js";import"./_initCloneObject.dbcbbc42.js";import"./isArrayLikeObject.a1b0afab.js";import"./index.b44c9ee3.js";import"./flatten.abf4a111.js";import"./_commonjsHelpers.712cc82f.js";import"./request.21d5eda1.js";const pe=P({decimalSeparator:{type:String,default:"."},groupSeparator:{type:String,default:","},precision:{type:Number,default:0},formatter:Function,value:{type:$([Number,Object]),default:0},prefix:String,suffix:String,title:String,valueStyle:{type:$([String,Object,Array])}}),ce=S({name:"ElStatistic"}),_e=S({...ce,props:pe,setup(b,{expose:r}){const F=b,i=L("statistic"),E=O(()=>{const{value:t,formatter:v,precision:f,decimalSeparator:g,groupSeparator:s}=F;if(R(v))return v(t);if(!U(t))return t;let[d,_=""]=String(t).split(".");return _=_.padEnd(f,"0").slice(0,f>0?f:0),d=d.replace(/\B(?=(\d{3})+(?!\d))/g,s),[d,_].join(_?g:"")});return r({displayValue:E}),(t,v)=>(p(),m("div",{class:y(u(i).b())},[t.$slots.title||t.title?(p(),m("div",{key:0,class:y(u(i).e("head"))},[C(t.$slots,"title",{},()=>[c(h(t.title),1)])],2)):w("v-if",!0),o("div",{class:y(u(i).e("content"))},[t.$slots.prefix||t.prefix?(p(),m("div",{key:0,class:y(u(i).e("prefix"))},[C(t.$slots,"prefix",{},()=>[o("span",null,h(t.prefix),1)])],2)):w("v-if",!0),o("span",{class:y(u(i).e("number")),style:q(t.valueStyle)},h(u(E)),7),t.$slots.suffix||t.suffix?(p(),m("div",{key:1,class:y(u(i).e("suffix"))},[C(t.$slots,"suffix",{},()=>[o("span",null,h(t.suffix),1)])],2)):w("v-if",!0)],2)],2))}});var me=G(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/statistic/src/statistic.vue"]]);const fe=K(me);const A=b=>(Z("data-v-f1db17b3"),b=b(),H(),b),ge={class:"container"},he={style:{display:"inline-flex","align-items":"center"}},be=c(" \u6628\u65E5\u6D88\u8017\u6570\u636E "),ve={style:{display:"inline-flex","align-items":"center"}},ye=c(" \u6628\u65E5\u6D88\u8017\u6570\u636E "),Fe={class:"statistic-card"},Ee={style:{display:"inline-flex","align-items":"center"}},De={class:"statistic-footer"},Se={class:"footer-item"},xe=A(()=>o("span",null,"\u8F83\u524D\u4E00\u5929",-1)),Be={key:0,class:"green"},ke={key:1,class:"red"},Ce=c(" 12% "),we={class:"container",style:{margin:"20px 0"}},ze=A(()=>o("div",{class:"title"},"\u8BA2\u5355\u62A5\u8868",-1)),Ae={class:"handle-box"},Ne=c(" \u65E5\u671F\u8303\u56F4\u9009\u62E9\uFF1A "),Ve={class:"pagination"},Ie={class:"container"},Te=A(()=>o("div",{class:"title"},"\u4F18\u5316\u5E08\u62A5\u8868",-1)),$e={class:"handle-box"},je=c(" \u65E5\u671F\u8303\u56F4\u9009\u62E9\uFF1A "),Pe={class:"pagination"},Le=S({name:"dashboard_"}),Oe=S({...Le,setup(b){const r=M({date:"",pageIndex:1,pageSize:10}),F=D([]),i=D([]),E=D([{title:"\u6D88\u8017",num:98500,trend:"up",change:"500"},{title:"\u66DD\u5149",num:1e3,trend:"up",change:"500"},{title:"\u70B9\u51FB",num:98500,trend:"down",change:"78"},{title:"\u70B9\u51FB\u7387",num:.8,trend:"up",change:"15%"},{title:"\u8F6C\u5316",num:98500,trend:"down",change:"68"}]),t=D(0),v=(g,s)=>{r.pageIndex=g,f(s)},f=g=>{de(g).then(s=>{g==="order"?F.value=s.data.list:i.value=s.data.list,t.value=s.data.pageTotal||50})};return f("order"),f("yhs"),(g,s)=>{const d=Q,_=X,x=fe,B=ie,k=re,N=ue,V=ne,l=se,I=le,T=oe;return p(),m("div",ge,[e(B,null,{default:a(()=>[e(N,{gutter:20},{default:a(()=>[e(k,{span:4},{default:a(()=>[e(B,{shadow:"hover",style:{"background-color":"#ddd"}},{default:a(()=>[e(x,{value:8846},{title:a(()=>[o("div",he,[be,e(_,{effect:"dark",content:"Number of users who logged into the product in one day",placement:"top"},{default:a(()=>[e(d,{style:{"margin-left":"4px"},size:12},{default:a(()=>[e(u(z))]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),e(k,{span:4},{default:a(()=>[e(B,{shadow:"hover",style:{"background-color":"#ddd"}},{default:a(()=>[e(x,{value:8846},{title:a(()=>[o("div",ve,[ye,e(_,{effect:"dark",content:"Number of users who logged into the product in one day",placement:"top"},{default:a(()=>[e(d,{style:{"margin-left":"4px"},size:12},{default:a(()=>[e(u(z))]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),e(N,{gutter:16},{default:a(()=>[(p(!0),m(J,null,W(E.value,(n,j)=>(p(),Y(k,{span:4,key:j},{default:a(()=>[o("div",Fe,[e(x,{value:n.num},{title:a(()=>[o("div",Ee,[c(h(n.title)+" ",1),e(_,{effect:"dark",content:"Number of users who logged into the product in one day",placement:"top"},{default:a(()=>[e(d,{style:{"margin-left":"4px"},size:12},{default:a(()=>[e(u(z))]),_:1})]),_:1})])]),_:2},1032,["value"]),o("div",De,[o("div",Se,[xe,n.trend==="up"?(p(),m("span",Be,[c(h(n.change)+" ",1),e(d,null,{default:a(()=>[e(u(ee))]),_:1})])):(p(),m("span",ke,[Ce,e(d,null,{default:a(()=>[e(u(te))]),_:1})]))])])])]),_:2},1024))),128))]),_:1})]),_:1}),o("div",we,[ze,o("div",Ae,[Ne,e(V,{modelValue:r.date,"onUpdate:modelValue":s[0]||(s[0]=n=>r.date=n),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),e(I,{data:F.value,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:a(()=>[e(l,{prop:"no",label:"\u8BA2\u5355\u53F7",align:"center"}),e(l,{prop:"ad",label:"\u5E7F\u544A\u540D\u79F0"}),e(l,{label:"\u4F18\u5316\u5E08",prop:"yhs"}),e(l,{prop:"bgl",label:"\u66DD\u5149\u91CF"}),e(l,{prop:"djl",label:"\u70B9\u51FB\u91CF"}),e(l,{prop:"djlv",label:"\u70B9\u51FB\u7387"}),e(l,{prop:"yys",label:"\u8868\u5355\u9884\u7EA6\u6570"}),e(l,{label:"\u6D88\u8017\u91D1\u989D"},{default:a(n=>[c("\uFFE5"+h(n.row.xhje),1)]),_:1})]),_:1},8,["data"]),o("div",Ve,[e(T,{background:"",layout:"total, prev, pager, next","current-page":r.pageIndex,"page-size":r.pageSize,total:t.value,onCurrentChange:s[1]||(s[1]=n=>v(n,"order"))},null,8,["current-page","page-size","total"])])]),o("div",Ie,[Te,o("div",$e,[je,e(V,{modelValue:r.date,"onUpdate:modelValue":s[2]||(s[2]=n=>r.date=n),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),e(I,{data:i.value,border:"",class:"table",ref:"multipleTable","header-cell-class-name":"table-header"},{default:a(()=>[e(l,{prop:"name",label:"\u59D3\u540D",align:"center"}),e(l,{prop:"zw",label:"\u804C\u4F4D"}),e(l,{label:"\u5E74\u5EA6\u7D2F\u8BA1\u8BA2\u5355\u6570",prop:"ljs"}),e(l,{prop:"dds",label:"\u8BA2\u5355\u6570"}),e(l,{prop:"scje",label:"\u5B9E\u5145\u91D1\u989D"}),e(l,{prop:"pf",label:"\u8BC4\u5206"})]),_:1},8,["data"]),o("div",Pe,[e(T,{background:"",layout:"total, prev, pager, next","current-page":r.pageIndex,"page-size":r.pageSize,total:t.value,onCurrentChange:v},null,8,["current-page","page-size","total"])])])])}}});const ft=ae(Oe,[["__scopeId","data-v-f1db17b3"]]);export{ft as default};