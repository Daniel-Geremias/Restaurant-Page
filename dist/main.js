(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([t.id,"body {\n    margin: 0px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main {\n    display: flex;\n    justify-content: center;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n}",""]);const i=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&c[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},c=[],i=0;i<t.length;i++){var s=t[i],d=r.base?s[0]+r.base:s[0],u=o[d]||0,l="".concat(d," ").concat(u);o[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var c=0;c<o.length;c++){var i=n(o[c]);e[i].references--}for(var s=r(t,a),d=0;d<o.length;d++){var u=n(o[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("home"),t.textContent="This is the home page!",t}())};function e(){const e=document.createElement("button");e.classList.add("nav-btn","home-btn"),e.textContent="Home",e.addEventListener("click",(n=>{n.target.classList.contains("active")||(r(e),t())}));const n=document.createElement("button");n.classList.add("nav-btn","menu-btn"),n.textContent="Menu",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(r(n),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.textContent="This is the menu page!",t}())}())}));const a=document.createElement("button");return a.classList.add("nav-btn","contact-btn"),a.textContent="Contact",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(r(a),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("contact"),t.textContent="This is the contact page!",t}())}())})),[e,n,a]}function r(t){document.querySelectorAll(".nav-btn").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}var a=n(379),o=n.n(a),c=n(795),i=n.n(c),s=n(569),d=n.n(s),u=n(565),l=n.n(u),p=n(216),f=n.n(p),m=n(589),v=n.n(m),h=n(426),y={};y.styleTagTransform=v(),y.setAttributes=l(),y.insert=d().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=f(),o()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const t=document.createElement("div");t.classList.add("header");const n=document.createElement("h1");return n.textContent="My Restaurant",t.appendChild(n),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("nav-bar");for(let n=0;n<e().length;n++)t.appendChild(e()[n]);return t}()),t}()),n.appendChild(function(){const t=document.createElement("div");return t.classList.add("main"),t.setAttribute("id","main"),t}()),n.appendChild(function(){const t=document.createElement("div");return t.classList.add("footer"),t.innerHTML='Copyright © <a href="https://github.com/Daniel-Geremias">Daniel Geremias</a>',t}()),r(document.querySelector(".nav-btn")),t()}()})()})();