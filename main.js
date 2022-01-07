(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(81),i=n.n(a),c=n(645),o=n.n(c),r=n(667),s=n.n(r),d=new URL(n(593),n.b),l=o()(i()),u=s()(d);l.push([e.id,"/* main page */\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    background-color: black;\n    color: white;\n}\n\n#content {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: url("+u+") center no-repeat;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header {\n    background-color: rgba(0, 0, 0, .8);\n    width: 100%;\n    max-width: 900px;\n    margin: 0px 50px;\n    padding: 0px 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.nav-bar {\n    width: 400px;\n    display: flex;\n    justify-content: center;\n}\n\n.nav-btn {\n    background-color:  white;\n    width: 120px;\n    height: 50px;\n    color: black;\n    border: none;\n    font-size: 18px;\n}\n\n.nav-btn:hover{\n    background-color: black;\n    color: white;\n    cursor: pointer;\n    transition: 500ms;\n}\n\n.active {\n    background-color: black;\n    color: white;\n}\n\n.active:hover {\n    cursor: default;\n}\n\n.header h1 {\n    font-size: 38px;\n}\n\n.main {\n    background-color: rgba(0, 0, 0, .8);\n    height: 100vh;\n    width: 100%;\n    max-width: 900px;\n    margin: 0px 50px;\n    padding: 0px 15px;\n    display: flex;\n    justify-content: center;\n}\n\n.footer {\n    background-color: #333333;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 26px;\n}\n\n.footer a {\n    text-decoration: none;\n    color: white;\n}\n\n.footer a:hover {\n    color: #e0e0e0;\n}\n\n/* home page */\n\n.home {\n    background-color: black;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.hero-section {\n    display: flex;\n    gap: 20px;\n    margin: 20px;\n}\n\n.hero-title {\n    text-align: center;\n}\n\n.hero-img {\n    width: 300px;\n}\n\n.invitation {\n    margin: 25px;\n}\n\n.invite-img {\n    width: 300px;\n    height: 300px;\n    object-fit: cover;\n    border-radius: 50%;\n    margin: 20px;\n}\n\n/* menu page */\n\n.menu {\n    background-color: black;\n    width: 100%;\n    padding: 15px;\n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(2, 1fr);\n}\n\n.menu-title {\n    text-align: center;\n    grid-column: span 2;\n}\n\n.menu-item {\n    justify-items: center;\n    text-align: center;\n    padding: 35px;\n}\n\n.menu-item:hover {\n    background-color: #333333;\n    cursor: pointer;\n}\n\n.menu-item-img {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n}\n\n/* contact page */\n\n.contact {\n    background-color: black;\n    width: 100%;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.map-location {\n    width: 600px;\n    margin: 50px;\n}",""]);const m=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,c){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&o[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var c={},o=[],r=0;r<e.length;r++){var s=e[r],d=a.base?s[0]+a.base:s[0],l=c[d]||0,u="".concat(d," ").concat(l);c[d]=l+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=i(p,a);a.byIndex=r,t.splice(r,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var c=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<c.length;o++){var r=n(c[o]);t[r].references--}for(var s=a(e,i),d=0;d<c.length;d++){var l=n(c[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},593:(e,t,n)=>{e.exports=n.p+"3fbe81012d230d736826.jpg"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var c=t[a]={id:a,exports:{}};return e[a](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("hero-section");const n=document.createElement("div");n.classList.add("hero-text");const a=document.createElement("h2");a.classList.add("hero-title"),a.textContent="Let's eat at My Restaurant!";const i=document.createElement("p");i.classList.add("hero-para"),i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum purus ut ultricies interdum. Vivamus eu metus sit amet neque porta volutpat iaculis sit amet orci. Nullam sed ornare elit. Fusce in risus eu nisi finibus venenatis.",n.appendChild(a),n.appendChild(i);const c=document.createElement("img");c.setAttribute("src","../src/imgs/hero.jpg"),c.classList.add("hero-img"),t.appendChild(n),t.appendChild(c);const o=document.createElement("h3");o.classList.add("invitation"),o.textContent="Check out our menu or come visit us!";const r=document.createElement("img");return r.setAttribute("src","../src/imgs/invite-img.jpg"),r.classList.add("invite-img"),e.appendChild(t),e.appendChild(o),e.appendChild(r),e}())};function t(){const t=document.createElement("button");t.classList.add("nav-btn","home-btn"),t.textContent="Home",t.addEventListener("click",(n=>{n.target.classList.contains("active")||(a(t),e())}));const n=document.createElement("button");n.classList.add("nav-btn","menu-btn"),n.textContent="Menu",n.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(n),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h2");t.classList.add("menu-title"),t.textContent="Menu";const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("img");a.classList.add("menu-item-img"),a.setAttribute("src","../src/imgs/menu-item-1.jpg");const i=document.createElement("p");i.classList.add("menu-item-text"),i.textContent="menu item 1";const c=document.createElement("p");c.classList.add("menu-item-price"),c.textContent="$15",n.appendChild(a),n.appendChild(i),n.appendChild(c);const o=document.createElement("div");o.classList.add("menu-item");const r=document.createElement("img");r.classList.add("menu-item-img"),r.setAttribute("src","../src/imgs/menu-item-2.jpg");const s=document.createElement("p");s.classList.add("menu-item-text"),s.textContent="menu item 2";const d=document.createElement("p");d.classList.add("menu-item-price"),d.textContent="$15",o.appendChild(r),o.appendChild(s),o.appendChild(d);const l=document.createElement("div");l.classList.add("menu-item");const u=document.createElement("img");u.classList.add("menu-item-img"),u.setAttribute("src","../src/imgs/menu-item-3.jpg");const m=document.createElement("p");m.classList.add("menu-item-text"),m.textContent="menu item 3";const p=document.createElement("p");p.classList.add("menu-item-price"),p.textContent="$15",l.appendChild(u),l.appendChild(m),l.appendChild(p);const h=document.createElement("div");h.classList.add("menu-item");const g=document.createElement("img");g.classList.add("menu-item-img"),g.setAttribute("src","../src/imgs/menu-item-4.jpg");const f=document.createElement("p");f.classList.add("menu-item-text"),f.textContent="menu item 4";const v=document.createElement("p");return v.classList.add("menu-item-price"),v.textContent="$15",h.appendChild(g),h.appendChild(f),h.appendChild(v),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(l),e.appendChild(h),e}())}())}));const i=document.createElement("button");return i.classList.add("nav-btn","contact-btn"),i.textContent="Contact",i.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(i),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("h2");t.classList.add("contact-title"),t.textContent="Contact";const n=document.createElement("p");n.classList.add("contact-info"),n.textContent="(000) 000 - 0000";const a=document.createElement("p");a.textContent="Nth, Dummy St. Nowhere Town - Country",a.classList.add("contact-info");const i=document.createElement("img");return i.classList.add("map-location"),i.setAttribute("src","../src/imgs/map.jpg"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(i),e}())}())})),[t,n,i]}function a(e){document.querySelectorAll(".nav-btn").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}var i=n(379),c=n.n(i),o=n(795),r=n.n(o),s=n(569),d=n.n(s),l=n(565),u=n.n(l),m=n(216),p=n.n(m),h=n(589),g=n.n(h),f=n(426),v={};v.styleTagTransform=g(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=p(),c()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");return n.textContent="My Restaurant",e.appendChild(n),e.appendChild(function(){const e=document.createElement("nav");e.classList.add("nav-bar");for(let n=0;n<t().length;n++)e.appendChild(t()[n]);return e}()),e}()),n.appendChild(function(){const e=document.createElement("div");return e.classList.add("main"),e.setAttribute("id","main"),e}()),n.appendChild(function(){const e=document.createElement("div");return e.classList.add("footer"),e.innerHTML='Copyright © <a href="https://github.com/Daniel-Geremias">Daniel Geremias</a>',e}()),a(document.querySelector(".nav-btn")),e()}()})()})();