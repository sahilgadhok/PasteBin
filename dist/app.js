webpackJsonp([0],[,function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(i(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(i(n.parts[a]));l[n.id]={id:n.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+_+'~="'+e.id+'"]');if(r){if(v)return m;r.parentNode.removeChild(r)}if(g){var i=d++;r=p||(p=a()),t=o.bind(null,r,i,!1),n=o.bind(null,r,i,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function o(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),h.ssrId&&e.setAttribute(_,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(44),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,m=function(){},h=null,_="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){v=n,h=a||{};var i=u(e,t);return r(i),function(t){for(var n=[],a=0;a<i.length;a++){var o=i[a],s=l[o.id];s.refs--,n.push(s)}t?(i=u(e,t),r(i)):i=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,a){var i,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),r&&(c._scopeId=r);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,f=l?c.render:c.beforeCreate;l?c.render=function(e,t){return u.call(t),f(e,t)}:c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:i,exports:o,options:c}}},,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(46),a=n(51),i=n(56),o=n(61);t.a=[{path:"/",name:"Home",component:r.a},{path:"/search",name:"Search",component:a.a},{path:"/profile",name:"Profile",component:i.a},{path:"/file",name:"File",component:o.a}]},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(40),a=(n.n(r),n(9)),i=n(10),o=n(41),s=n(16),c=new i.default({routes:s.a});a.default.use(i.default),new a.default({el:"#app",render:function(e){return e(o.a)},router:c})},function(e,t,n){"use strict";e.exports=n(8).polyfill()},function(e,t,n){"use strict";function r(e){n(42)}var a=n(45),i=n(66),o=n(3),s=r,c=o(a.a,i.a,s,"data-v-8dfde174",null);t.a=c.exports},function(e,t,n){var r=n(43);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("3d98c35f",r,!0,{})},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,"",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],c=i[2],u=i[3],l={id:e+":"+a,css:s,media:c,sourceMap:u};r[o]?r[o].parts.push(l):n.push(r[o]={id:o,parts:[l]})}return n}},function(e,t,n){"use strict";var r=n(16);t.a={name:"App",data:function(){return{routes:r.a}}}},function(e,t,n){"use strict";function r(e){n(47)}var a=n(49),i=n(50),o=n(3),s=r,c=o(a.a,i.a,s,"data-v-072aa68a",null);t.a=c.exports},function(e,t,n){var r=n(48);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("5ad9f43c",r,!0,{})},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";function r(e){var t={};return t[e.filename]={content:e.content},i.a.post("https://api.github.com/gists",{files:t,description:"",public:!0})}var a=n(5),i=n.n(a);t.a={name:"Home",data:function(){return{error:"",newFile:{url:"",show:!1},paste:{filename:"",content:""}}},methods:{checkFile:function(e){var t=e.target.files;this.file=t.length>0?t[0]:void 0},submitFile:function(){function e(e,n){t.newFile.show=!1,r({filename:e,content:n}).then(function(e){t.newFile.url=e.data.html_url,t.newFile.show=!0}).catch(function(){t.error="Failed to create the file"})}var t=this;if(!(t.file||t.paste.filename&&t.paste.content))return void(t.error="No file or invalid paste");if(t.error="",t.file){var n=new FileReader;n.readAsText(t.file),n.onload=function(n){e(t.file.name,n.target.result)}}else e(t.paste.filename,t.paste.content)}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"upload-page"}},[n("h2",[e._v("Upload File or Paste Text")]),e._v(" "),e.newFile.show?n("div",{staticClass:"bg-success"},[e._v("File Created!\n    "),n("a",{attrs:{target:"_blank",href:e.newFile.url}},[e._v(e._s(e.newFile.url))])]):e._e(),e._v(" "),e.error?n("div",{staticClass:"bg-danger"},[e._v(e._s(e.error))]):e._e(),e._v(" "),n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("input",{attrs:{id:"upload-file",type:"file",accept:"text"},on:{change:function(t){e.checkFile(t)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.paste.filename,expression:"paste.filename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filename"},domProps:{value:e.paste.filename},on:{input:function(t){t.target.composing||e.$set(e.paste,"filename",t.target.value)}}}),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.paste.content,expression:"paste.content"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:e.paste.content},on:{input:function(t){t.target.composing||e.$set(e.paste,"content",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[e._v("Reset")]),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.submitFile()}}},[e._v("Submit")])])])])},a=[],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(52)}var a=n(54),i=n(55),o=n(3),s=r,c=o(a.a,i.a,s,"data-v-73759bda",null);t.a=c.exports},function(e,t,n){var r=n(53);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("2429e96e",r,!0,{})},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";var r=n(5),a=n.n(r);t.a={name:"Search",data:function(){return{table:{props:["filename","url"],headers:{filename:"Filename",url:"Url"},data:[]}}},methods:{searchFiles:function(){var e=this;a.a.get("https://api.github.com/gists/public").then(function(t){var n=t.data;console.log(n),e.table.data=n.map(function(e){return{id:e.id,filename:e.files[Object.keys(e.files)[0]].filename,url:e.html_url}})}).catch(function(e){console.error(e)})}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(t){e.searchFiles()}}},[e._v("Search")]),e._v(" "),n("table",[n("thead",[n("tr",e._l(e.table.props,function(t,r){return n("th",{key:r},[n("span",[e._v(e._s(e.table.headers[t]))])])}))]),e._v(" "),n("tbody",e._l(e.table.data,function(t){return n("tr",{key:t.id},e._l(e.table.props,function(r,a){return n("td",{key:a},[n("span",[e._v(e._s(t[r]))])])}))})),e._v(" "),n("tfoot",[n("tr",[n("td",{attrs:{colspan:e.table.props.length}},[e._v("1")])])])])])},a=[],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(57)}var a=n(59),i=n(60),o=n(3),s=r,c=o(a.a,i.a,s,"data-v-2fbccc4e",null);t.a=c.exports},function(e,t,n){var r=n(58);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("2fcabbfc",r,!0,{})},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";t.a={name:"Profile",data:function(){return{username:"Foo",groups:["Bar"],files:[{name:"package.json",url:"./index.html#/file"}]}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("Username "+e._s(e.username))]),e._v(" "),n("div",[e._v("Groups\n    "),e._l(e.groups,function(t,r){return n("span",{key:r},[e._v(e._s(t))])})],2),e._v(" "),n("div",[e._v("Files\n    "),e._l(e.files,function(t){return n("a",{key:t.url,attrs:{href:t.url}},[e._v(e._s(t.name))])})],2)])},a=[],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";function r(e){n(62)}var a=n(64),i=n(65),o=n(3),s=r,c=o(a.a,i.a,s,"data-v-7d3c356c",null);t.a=c.exports},function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(2)("33ad2f3a",r,!0,{})},function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,"",""])},function(e,t,n){"use strict";var r=n(5),a=n.n(r);t.a={name:"FileView",data:function(){var e={filename:"package.json",content:""};return a.a.get(e.filename,{responseType:"text"}).then(function(t){e.content=t.data}).catch(function(e){console.error(e)}),e}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v(e._s(e.filename))]),e._v(" "),n("pre",[e._v(e._s(e.content))])])},a=[],i={render:r,staticRenderFns:a};t.a=i},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("h1",[e._v("File Host App")]),e._v(" "),n("ul",e._l(e.routes,function(t){return n("li",{key:t.path},[n("router-link",{attrs:{exact:"",to:t.path}},[e._v(e._s(t.name))])],1)})),e._v(" "),n("router-view")],1)},a=[],i={render:r,staticRenderFns:a};t.a=i}],[39]);
//# sourceMappingURL=app.js.map