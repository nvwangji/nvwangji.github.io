import{d as c,K as d,c as m,o as E,e as b,g as p,f as o,w as _,i as x,_ as h}from"./index.1d217137.js";import{E as f,a as D}from"./el-table-column.95901fa4.js";/* empty css                    *//* empty css               */import{u,w as F}from"./xlsx.db07aefa.js";import"./_Uint8Array.c9a01e9e.js";import"./_initCloneObject.dbcbbc42.js";import"./isArrayLikeObject.a1b0afab.js";import"./hasIn.e82d5dd8.js";import"./index.b44c9ee3.js";import"./event.776e7e11.js";import"./isEqual.6c06b711.js";import"./flatten.abf4a111.js";import"./_baseIteratee.15aecd01.js";import"./index.2470b070.js";const B={class:"container"},g={class:"handle-box"},v=x("\u5BFC\u51FAExcel"),C=c({name:"export"}),k=c({...C,setup(w){const s=d([]);(()=>{s.value=[{id:1,name:"\u5C0F\u660E",sno:"S001",class:"\u4E00\u73ED",age:"10",sex:"\u7537"},{id:2,name:"\u5C0F\u7EA2",sno:"S002",class:"\u4E00\u73ED",age:"9",sex:"\u5973"}]})();const n=[["\u5E8F\u53F7","\u59D3\u540D","\u5B66\u53F7","\u73ED\u7EA7","\u5E74\u9F84","\u6027\u522B"]],i=()=>{s.value.map((a,e)=>{const t=[e+1];t.push(a.name,a.sno,a.class,a.age,a.sex),n.push(t)});let r=u.aoa_to_sheet(n),l=u.book_new();u.book_append_sheet(l,r,"\u7B2C\u4E00\u9875"),F(l,"\u8868\u683C.xlsx")};return(r,l)=>{const a=m,e=f,t=D;return E(),b("div",null,[p("div",B,[p("div",g,[o(a,{type:"primary",onClick:i},{default:_(()=>[v]),_:1})]),o(t,{data:s.value,border:"",class:"table","header-cell-class-name":"table-header"},{default:_(()=>[o(e,{prop:"id",label:"ID",width:"55",align:"center"}),o(e,{prop:"name",label:"\u59D3\u540D"}),o(e,{prop:"sno",label:"\u5B66\u53F7"}),o(e,{prop:"class",label:"\u73ED\u7EA7"}),o(e,{prop:"age",label:"\u5E74\u9F84"}),o(e,{prop:"sex",label:"\u6027\u522B"})]),_:1},8,["data"])])])}}});const L=h(k,[["__scopeId","data-v-a32e0e80"]]);export{L as default};
