(()=>{"use strict";var n={372:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},772:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'body {\n  background-color: black;\n}\n\n#wrapper {\n  display: grid;\n  font-family: "Poiret One", cursive;\n  caret-color: transparent;\n  grid-template-columns: 1fr 3fr;\n  height: 100vh;\n  width: 100vw;\n}\n\n#project-wrap {\n  grid-column: 1/2;\n  background-color: rgb(243, 95, 95);\n  border-right: 1px solid black;\n}\n\n#title {\n  text-align: center;\n  font-size: clamp(2rem, 4vw, 4rem);\n  padding: 4rem 1rem 1rem 1rem;\n}\n\n.divider {\n  background-color: black;\n  margin: 0 auto;\n  width: max(20vw, 10rem);\n  height: 0.2rem;\n}\n\n#add-project {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem 1rem 0 auto;\n  padding: 1rem;\n  font-size: 1.5rem;\n  background-color: transparent;\n  border: transparent;\n  cursor: pointer;\n  font-family: "Poiret One", cursive;\n}\n\n.plus {\n  font-size: 2rem;\n  margin-right: 1rem;\n}\n\n#project-form {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  margin: 1rem;\n  margin-top: 2.65rem;\n}\n\n#project-form label {\n  margin-right: 1rem;\n}\n\n#project-form :first-child input {\n  font-size: 1.1rem;\n}\n\n#project-form input {\n  font-family: "Poiret One", cursive;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#project {\n  background-color: transparent;\n  border: transparent;\n  font-size: 2rem;\n  padding: 1rem;\n  cursor: pointer;\n  color: rgb(27, 27, 27);\n  font-family: "Poiret One", cursive;\n}\n\n#todo {\n  grid-column: 2/-1;\n  grid-row: 1/2;\n  background-color: rgb(255, 255, 255);\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  margin-left: 3rem;\n}\n\n.priority {\n  background-color: lime;\n  width: 1rem;\n  height: 1rem;\n  outline: black solid 1px;\n  margin-right: 1rem;\n}\n\n.name {\n  font-size: 25px;\n}\n\n.date {\n  margin-right: 1rem;\n}\n\n.details {\n  margin-left: auto;\n  margin-right: 1rem;\n  background: transparent;\n  font-size: 15px;\n  font-family: "Poiret One";\n  cursor: pointer;\n}\n\n.edit {\n  margin-right: 1rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.edit-icon {\n  width: auto;\n  height: 1.3rem;\n}\n\n.delete {\n  margin-right: 3rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.delete-icon {\n  width: auto;\n  height: 1.3rem;\n}\n\n.add {\n  position: absolute;\n  left: 90%;\n  top: 85%;\n}\n\n#add-task {\n  text-decoration: none;\n  background-color: rgb(243, 95, 95);\n  height: 80px;\n  width: 80px;\n  font-size: 5rem;\n  border-radius: 50%;\n  line-height: 0;\n  border: 2px solid black;\n}\n\n#add-task:active {\n  border: 5px solid black;\n  background-color: rgb(193, 19, 19);\n}\n\n#form-box {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  grid-column: 2/-1;\n  grid-row: 1/2;\n  z-index: 10;\n  margin: 1rem;\n}\n\n.form-modal {\n  background-color: rgb(180, 135, 200);\n  border-radius: 20px;\n\n  outline: 5px solid black;\n}\n\n.form-title {\n  display: flex;\n  justify-content: center;\n  font-size: 3rem;\n  margin-top: 3rem;\n}\n\n#add-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 2rem;\n}\n\n#add-form > * {\n  margin: 15px;\n  width: 25%;\n  min-width: 200px;\n}\n\n#task-name {\n  font-size: 1.3rem;\n}\n\ntextarea {\n  resize: none;\n}\n\n.submission {\n  display: flex;\n  width: 25%;\n  min-width: 200px;\n  height: 30px;\n  justify-content: space-evenly;\n}\n\n.submission button {\n  min-width: 100px;\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,m="".concat(c," ").concat(l);i[c]=l+1;var p=t(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),d=t.n(s),c=t(216),l=t.n(c),m=t(589),p=t.n(m),u=t(772),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var h=t(372),g={};function b(n){!function(){if(null==x)return;let n=x.textContent;n=n.substring(2,n.length-2),x.textContent=n}();let e=n.target.innerHTML;e="- "+e+" -",n.target.innerHTML=e,x=n.target}function y(){let n=document.getElementById("add-project"),e=document.getElementById("project-form");"none"==n.style.display?(n.style.display="flex",e.style.display="none"):(n.style.display="none",e.style.display="flex"),document.getElementById("project-name").value=""}function v(){let n=document.getElementById("form-box");"flex"==n.style.display?n.style.display="none":n.style.display="flex"}g.styleTagTransform=p(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;let x=null;!function(){let n=document.getElementById("projects"),e=document.createElement("button");e.setAttribute("id","project"),e.textContent="- Example -",e.addEventListener("click",b,e),n.appendChild(e),x=e}(),function(){const n=document.getElementById("todo"),e=document.createElement("div");e.classList.add("task");const t=document.createElement("div");t.classList.add("priority"),e.appendChild(t);const r=document.createElement("p");r.classList.add("name"),r.textContent="Go to work",e.appendChild(r);const o=document.createElement("button");o.classList.add("details"),o.textContent="Details",e.appendChild(o);const i=document.createElement("p");i.classList.add("date"),i.textContent="July 19th",e.appendChild(i);const a=document.createElement("button");a.classList.add("edit");const s=document.createElement("img");s.classList.add("edit-icon"),s.setAttribute("src","../dist/img/edit.png"),a.appendChild(s),e.appendChild(a);const d=document.createElement("button");d.classList.add("delete");const c=document.createElement("img");c.classList.add("delete-icon"),c.setAttribute("src","../dist/img/trash.png"),d.appendChild(c),e.appendChild(d),n.appendChild(e)}(),document.getElementById("add").addEventListener("click",(function(){let n=document.getElementById("projects"),e=document.getElementById("project-name").value;if(""==e)return;let t=document.createElement("button");t.setAttribute("id","project"),t.textContent=e,t.addEventListener("click",b,t),n.appendChild(t),y()})),document.getElementById("cancel").addEventListener("click",y),document.getElementById("add-project").addEventListener("click",y),document.getElementById("add-task").addEventListener("click",v),document.getElementById("cancel-btn").addEventListener("click",v)})()})();