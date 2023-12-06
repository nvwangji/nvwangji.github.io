import{d as w,r as z,K as t,o as _,e as i,g as E,f as a,w as e,$ as x,a0 as A,Z as M,i as o,t as y,p as T,j,_ as q}from"./index.7006beae.js";import{E as K}from"./el-card.f49a2a3f.js";import{E as L}from"./el-divider.040da3c1.js";import{E as P}from"./el-space.a11bb663.js";import{E as R}from"./el-row.9e3de8b9.js";import{E as U}from"./el-col.c2c3ccdf.js";import{E as Z}from"./el-date-picker.27d61e34.js";/* empty css                 */import{E as G}from"./el-alert.4ffcdb49.js";import{E as H}from"./el-text.01c1db59.js";import"./request.21d5eda1.js";import"./_commonjsHelpers.712cc82f.js";import"./index.bfa5536e.js";import"./event.776e7e11.js";import"./flatten.6e8ce978.js";import"./_Uint8Array.18199458.js";import"./index.2d2aac23.js";import"./isEqual.57f99950.js";const J=c=>(T("data-v-c7aea368"),c=c(),j(),c),O={class:"container"},Q=o("\u5E7F\u544A\u5B8C\u6574\u6570\u636E"),W={class:"handle-box"},X=o("\u9009\u62E9\u65F6\u95F4\uFF1A"),Y=o(" \u5E7F\u544AID: 20231111 "),aa=o(" \u5E7F\u544A\u540D\u79F0:7.29-\u6D17\u8138-\u5C0F\u7A0B\u5E8F-1 "),ea=o(" \u6240\u5C5E\u63A8\u5E7F\u8BA1\u5212: 7.29-\u6D17\u8138-\u5C0F\u7A0B\u5E8F-1 "),ua=J(()=>E("div",{class:"item_img"},null,-1)),ta=w({name:"basetable"}),la=w({...ta,setup(c){const l=(u,d)=>Math.floor(Math.random()*(d-u))+u,m=z({date:"",name:"",pageIndex:1,pageSize:10}),F=t([]),f=t([]),D=t([]),v=t([]),h=t([]),b=t([]),B=t([]),C=t([]);return(()=>{for(let u=0;u<10;u++)F.value.push({label:`app\u6807\u9898${u}`,value:l(2e3,5e3)}),f.value.push({label:`\u6E38\u620F\u6807\u9898${u}`,value:l(2e3,5e3)}),D.value.push({label:`\u7535\u8BDD\u6807\u9898${u}`,value:l(2e3,5e3)}),v.value.push({label:`\u91D1\u878D\u6807\u9898${u}`,value:l(2e3,5e3)}),h.value.push({label:`\u4E0B\u5355\u6807\u9898${u}`,value:l(2e3,5e3)}),b.value.push({label:`\u4ED8\u8D39\u6807\u9898${u}`,value:l(2e3,5e3)}),B.value.push({label:`\u7B7E\u5355\u6807\u9898${u}`,value:l(2e3,5e3)});C.value=[{data:F},{data:f},{data:D},{data:v},{data:h},{data:b},{data:B}]})(),(u,d)=>{const g=H,$=G,I=Z,s=U,r=R,S=P,V=L,k=K;return _(),i("div",null,[E("div",O,[a(g,{class:"big_title",size:"large"},{default:e(()=>[Q]),_:1}),a($,{closable:!1,title:"\u6CE8:\u5E7F\u544A\u5386\u53F2\u6570\u636E\uFF0C\u6309\u5C0F\u65F6\u4FDD\u5B58\u6570\u636E\u91CF\u8F83\u5927\uFF0C\u6211\u4EEC\u5C06\u6309\u7167\u6BCF\u65E5\u7EF4\u5EA6\u8FDB\u884C\u4FDD\u5B58\u3002\u82E5\u60A8\u7B5B\u9009\u975E\u672C\u65E5\u6570\u636E\uFF0C\u5219\u53EA\u80FD\u6309\u7167\u65E5\u671F\u7B5B\u9009\u65E0\u6CD5\u7B5B\u9009\u65F6\u95F4\u6BB5\u3002",type:"warning","show-icon":"",class:"mb10",style:{margin:"20px 0"}}),E("div",W,[a(g,{class:"mx-1"},{default:e(()=>[X]),_:1}),a(I,{modelValue:m.date,"onUpdate:modelValue":d[0]||(d[0]=p=>m.date=p),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),a(r,{gutter:20,class:"handle-box"},{default:e(()=>[a(s,{span:6},{default:e(()=>[Y]),_:1}),a(s,{span:6},{default:e(()=>[aa]),_:1}),a(s,{span:6},{default:e(()=>[ea]),_:1})]),_:1}),a(k,{class:"box-card"},{default:e(()=>[(_(),i(x,null,A(7,p=>a(r,{gutter:20},{default:e(()=>[(_(!0),i(x,null,A(C.value[p-1].data,(n,N)=>(_(),M(s,{span:N%5==1?4:5,class:"item"},{default:e(()=>[a(r,{style:{"margin-top":"10px"}},{default:e(()=>[a(s,{span:6},{default:e(()=>[ua]),_:1}),a(s,{span:18},{default:e(()=>[a(S,{direction:"vertical"},{default:e(()=>[a(r,{style:{color:"#999"}},{default:e(()=>[o(y(n==null?void 0:n.label),1)]),_:2},1024),a(r,{style:{"font-weight":"bold"}},{default:e(()=>[o(y(n==null?void 0:n.value),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["span"]))),256)),a(V,{"border-style":"dashed"})]),_:2},1024)),64))]),_:1})])])}}});const ga=q(la,[["__scopeId","data-v-c7aea368"]]);export{ga as default};
