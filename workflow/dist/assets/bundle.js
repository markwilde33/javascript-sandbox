!function(e){var o={};function n(t){if(o[t])return o[t].exports;var l=o[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var l in e)n.d(t,l,function(o){return e[o]}.bind(null,l));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}([function(e,o,n){"use strict";n.r(o),console.log("dom file");const t=document.querySelector("body"),l=[{name:"booboo",silly:!0},{name:"hoohoo",silly:!1},{name:"looloo",silly:!1},{name:"googoo",silly:!0},{name:"noonoo",silly:!0}];console.log("log index file"),t.style.background="peachpuff",(e=>{const o=document.createElement("h1");o.textContent=e,t.appendChild(o)})("who shot cha?"),console.log("mario@marioland.ie"),console.log(l);const r=(e=>e.filter(e=>e.silly))(l);console.log(l,r),console.table(l,r),console.log("webpack-dev-server is live")}]);