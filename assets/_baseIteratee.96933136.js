import{S as I,k as M}from"./_Uint8Array.18199458.js";import{b as h}from"./isEqual.57f99950.js";import{k as _,b3 as E,aY as O,I as g,aI as l,x as y}from"./index.7006beae.js";import{h as C,i as L}from"./hasIn.33793410.js";var d=1,D=2;function G(n,r,i,t){var e=i.length,o=e,a=!t;if(n==null)return!o;for(n=Object(n);e--;){var f=i[e];if(a&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++e<o;){f=i[e];var u=f[0],s=n[u],A=f[1];if(a&&f[2]){if(s===void 0&&!(u in n))return!1}else{var p=new I;if(t)var R=t(s,A,u,n,r,p);if(!(R===void 0?h(A,s,d|D,t,p):R))return!1}}return!0}function P(n){return n===n&&!_(n)}function w(n){for(var r=M(n),i=r.length;i--;){var t=r[i],e=n[t];r[i]=[t,e,P(e)]}return r}function m(n,r){return function(i){return i==null?!1:i[n]===r&&(r!==void 0||n in Object(i))}}function F(n){var r=w(n);return r.length==1&&r[0][2]?m(r[0][0],r[0][1]):function(i){return i===n||G(i,n,r)}}var S=1,b=2;function c(n,r){return E(n)&&P(r)?m(O(n),r):function(i){var t=g(i,n);return t===void 0&&t===r?C(i,n):h(r,t,S|b)}}function x(n){return function(r){return r==null?void 0:r[n]}}function K(n){return function(r){return l(r,n)}}function N(n){return E(n)?x(O(n)):K(n)}function Y(n){return typeof n=="function"?n:n==null?L:typeof n=="object"?y(n)?c(n[0],n[1]):F(n):N(n)}export{Y as b};