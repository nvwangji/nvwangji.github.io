import{c as l,f as r}from"./_Uint8Array.18199458.js";import{aX as b,x as h}from"./index.7006beae.js";var e=b?b.isConcatSpreadable:void 0;function x(n){return h(n)||l(n)||!!(e&&n&&n[e])}function m(n,o,i,s,f){var t=-1,g=n.length;for(i||(i=x),f||(f=[]);++t<g;){var a=n[t];o>0&&i(a)?o>1?m(a,o-1,i,s,f):r(f,a):s||(f[f.length]=a)}return f}function S(n){var o=n==null?0:n.length;return o?m(n,1):[]}export{m as b,S as f};
