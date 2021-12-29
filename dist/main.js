(()=>{"use strict";var n,e,r,t,o,a,i,c,s,u,l,p,d,f,m={772:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,'body {\n  background-color: black;\n}\n\n#wrapper {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  font-family: "Poiret One", cursive;\n  caret-color: transparent;\n}\n\n#project-wrap {\n  background-color: rgb(214, 214, 214);\n  height: 100%;\n  width: 25%;\n  border-right: 1px solid black;\n}\n\n#title {\n  text-align: center;\n  font-size: 4rem;\n  padding: 4rem 0 1rem 0;\n}\n\n.divider {\n  background-color: black;\n  margin: 0 auto;\n  width: 20rem;\n  height: 0.2rem;\n}\n\n#add-project {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem 1rem 1rem auto;\n  padding: 1rem;\n  font-size: 1.5rem;\n  background-color: transparent;\n  border: transparent;\n  cursor: pointer;\n  font-family: "Poiret One", cursive;\n}\n\n.plus {\n  font-size: 2rem;\n  margin-right: 1rem;\n}\n\n#project-form {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 2rem;\n}\n\n#project-form label {\n  margin-right: 1rem;\n}\n\n#project-form :first-child input {\n  font-size: 1.1rem;\n}\n\n#project-form input {\n  font-family: "Poiret One", cursive;\n}\n\n#projects {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#project {\n  background-color: transparent;\n  border: transparent;\n  font-size: 2rem;\n  padding: 1rem;\n  cursor: pointer;\n  color: rgb(27, 27, 27);\n  font-family: "Poiret One", cursive;\n}\n\n#todo {\n  background-color: rgb(221, 221, 221);\n  height: 100%;\n  width: 75%;\n}\n',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var s=t(n,o),u=0;u<a.length;u++){var l=r(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function h(n){var e=v[n];if(void 0!==e)return e.exports;var r=v[n]={id:n,exports:{}};return m[n](r,r.exports,h),r.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var r in e)h.o(e,r)&&!h.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=h(379),e=h.n(n),r=h(795),t=h.n(r),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),u=h.n(s),l=h(589),p=h.n(l),d=h(772),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=u(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();