webpackJsonp([0],[,,function(t,e){t.exports=function(t,e,n,a,r){var s,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,i=t.default);var c="function"==typeof i?i.options:i;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),a&&(c._scopeId=a);var u;if(r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,f=l?c.render:c.beforeCreate;l?c.render=function(t,e){return u.call(e),f(t,e)}:c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:i,options:c}}},,,,function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var s=a(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function a(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var a=n(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(a[s]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function a(t){for(var e=0;e<t.length;e++){var n=t[e],a=l[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(s(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(s(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function s(t){var e,n,a=document.querySelector("style["+b+'~="'+t.id+'"]');if(a){if(v)return h;a.parentNode.removeChild(a)}if(_){var s=d++;a=p||(p=r()),e=i.bind(null,a,s,!1),n=i.bind(null,a,s,!0)}else a=r(),e=o.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function i(t,e,n,a){var r=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var s=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}function o(t,e){var n=e.css,a=e.media,r=e.sourceMap;if(a&&t.setAttribute("media",a),m.ssrId&&t.setAttribute(b,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(70),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},m=null,b="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){v=n,m=r||{};var s=u(t,e);return a(s),function(e){for(var n=[],r=0;r<s.length;r++){var i=s[r],o=l[i.id];o.refs--,n.push(o)}e?(s=u(t,e),a(s)):s=[];for(var r=0;r<n.length;r++){var o=n[r];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete l[o.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(72),r=n(77),s=n(93),i=n(98);e.a=[{path:"/",name:"Home",component:a.a},{path:"/search",name:"Search",component:r.a},{path:"/profile",name:"Profile",component:s.a},{path:"/file",name:"File",component:i.a}]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(66),r=(n.n(a),n(16)),s=n(17),i=n(67),o=n(23),c=new s.default({routes:o.a});r.default.use(s.default),new r.default({el:"#app",render:function(t){return t(i.a)},router:c})},function(t,e,n){"use strict";t.exports=n(15).polyfill()},function(t,e,n){"use strict";function a(t){n(68)}var r=n(71),s=n(103),i=n(2),o=a,c=i(r.a,s.a,o,"data-v-8dfde174",null);e.a=c.exports},function(t,e,n){var a=n(69);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(7)("3d98c35f",a,!0,{})},function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},function(t,e){t.exports=function(t,e){for(var n=[],a={},r=0;r<e.length;r++){var s=e[r],i=s[0],o=s[1],c=s[2],u=s[3],l={id:t+":"+r,css:o,media:c,sourceMap:u};a[i]?a[i].parts.push(l):n.push(a[i]={id:i,parts:[l]})}return n}},function(t,e,n){"use strict";var a=n(23);e.a={name:"App",data:function(){return{routes:a.a}}}},function(t,e,n){"use strict";function a(t){n(73)}var r=n(75),s=n(76),i=n(2),o=a,c=i(r.a,s.a,o,"data-v-072aa68a",null);e.a=c.exports},function(t,e,n){var a=n(74);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(7)("5ad9f43c",a,!0,{})},function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";function a(t){var e={};return e[t.filename]={content:t.content},s.a.post("https://api.github.com/gists",{files:e,description:"",public:!0})}var r=n(9),s=n.n(r);e.a={name:"Home",data:function(){return{error:"",newFile:{url:"",show:!1},paste:{filename:"",content:""}}},methods:{checkFile:function(t){var e=t.target.files;this.file=e.length>0?e[0]:void 0},submitFile:function(){function t(t,n){e.newFile.show=!1,a({filename:t,content:n}).then(function(t){e.newFile.url=t.data.html_url,e.newFile.show=!0}).catch(function(){e.error="Failed to create the file"})}var e=this;if(!(e.file||e.paste.filename&&e.paste.content))return void(e.error="No file or invalid paste");if(e.error="",e.file){var n=new FileReader;n.readAsText(e.file),n.onload=function(n){t(e.file.name,n.target.result)}}else t(e.paste.filename,e.paste.content)}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"upload-page"}},[n("h2",[t._v("Upload File or Paste Text")]),t._v(" "),t.newFile.show?n("div",{staticClass:"bg-success"},[t._v("File Created!\n    "),n("a",{attrs:{target:"_blank",href:t.newFile.url}},[t._v(t._s(t.newFile.url))])]):t._e(),t._v(" "),t.error?n("div",{staticClass:"bg-danger"},[t._v(t._s(t.error))]):t._e(),t._v(" "),n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("input",{attrs:{id:"upload-file",type:"file",accept:"text"},on:{change:function(e){t.checkFile(e)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paste.filename,expression:"paste.filename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filename"},domProps:{value:t.paste.filename},on:{input:function(e){e.target.composing||t.$set(t.paste,"filename",e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.paste.content,expression:"paste.content"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.paste.content},on:{input:function(e){e.target.composing||t.$set(t.paste,"content",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[t._v("Reset")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.submitFile()}}},[t._v("Submit")])])])])},r=[],s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";function a(t){n(78)}var r=n(80),s=n(92),i=n(2),o=a,c=i(r.a,s.a,o,"data-v-3fb4bbd8",null);e.a=c.exports},function(t,e,n){var a=n(79);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(7)("3cd31200",a,!0,{})},function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var a=n(9),r=n.n(a),s=n(1),i=n(81);e.a={name:"Search",components:{"search-table":i.a},data:function(){return{table:Object(s.default)({data:[]},function(t){return t.tableState.slice.size=10,{refresh:function(e){t.data.splice(),e.forEach(function(t){this.push(t)},t.data),t.table.exec()}}})}},methods:{searchFiles:function(){var t=this;r.a.get("https://api.github.com/gists/public?per_page=100").then(function(e){var n=e.data,a=n.map(function(t){var e=t.files[Object.keys(t.files)[0]];return{id:t.id,filename:e.filename,url:e.raw_url}});t.table.refresh(a)}).catch(function(t){console.error(t)})}}}},function(t,e,n){"use strict";function a(t){n(82)}var r=n(84),s=n(91),i=n(2),o=a,c=i(r.a,s.a,o,"data-v-099c378e",null);e.a=c.exports},function(t,e,n){var a=n(83);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(7)("386c6ab5",a,!0,{})},function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var a=n(11),r=n(85),s=n(88);e.a={name:"SearchSmartTable",mixins:[a.default.table],components:{"st-col-filter":r.a,"st-paginate":s.a},data:function(){return{table:{props:["filename","url"],headers:{filename:"Filename",url:"Url"}}}},methods:{makeRowKey:function(t){return[t.value.id,t.value.filename,Date.now()].join("-")}}}},function(t,e,n){"use strict";var a=n(86),r=n(87),s=n(2),i=s(a.a,r.a,null,null,null);e.a=i.exports},function(t,e,n){"use strict";var a=n(11);e.a={mixins:[a.default.filter],data:function(){return{query:""}},watch:{query:function(t){this.filter(t)}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})},r=[],s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";var a=n(89),r=n(90),s=n(2),i=s(a.a,r.a,null,null,null);e.a=i.exports},function(t,e,n){"use strict";var a=n(11);e.a={mixins:[a.default.pagination],props:{numPages:{type:Number,default:5,validator:function(t){return"number"==typeof t&&t>0}}},data:function(){return{disabled:{first:!0,prev:!0,next:!0,last:!0},lastPage:1,pages:[1]}},methods:{makePageKey:function(t){return t+"-"+Date.now()}},watch:{stState:function(){var t=this.stState.filteredCount>0?Math.ceil(this.stState.filteredCount/this.stState.size):1,e=Math.floor(this.numPages/2),n=[];if(this.stState.page<=e)for(var a=1;a<=this.numPages&&a<=t;a++)n.push(a);else if(this.stState.page+e>=t)for(var r=t;r>=1&&t-r<this.numPages;r--)n.unshift(r);else for(var s=-1*e;s<=e;s++)n.push(this.stState.page+s);this.pages=n,this.lastPage=t,this.disabled.prev=!this.stDirective.isPreviousPageEnabled(),this.disabled.next=!this.stDirective.isNextPageEnabled()}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"btn-group"},[n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:function(e){t.selectPage(1)}}},[t._v("First")]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:t.selectPreviousPage}},[t._v("Prev")]),t._v(" "),t._l(t.pages,function(e){return n("button",{key:t.makePageKey(e),staticClass:"btn",class:{"btn-primary":e===t.stState.page},attrs:{type:"button"},on:{click:function(n){t.selectPage(e)}}},[t._v(t._s(e))])}),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:t.selectNextPage}},[t._v("Next")]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:function(e){t.selectPage(t.lastPage)}}},[t._v("Last")])],2)},r=[],s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-striped"},[n("col",{staticClass:"col-xs-4"}),t._v(" "),n("col",{staticClass:"col-xs-8"}),t._v(" "),n("thead",[n("tr",t._l(t.table.props,function(e,a){return n("th",{key:a,attrs:{"smart-table":t.smartTable}},[n("span",[t._v(t._s(t.table.headers[e]))])])})),t._v(" "),n("tr",[n("th",[n("st-col-filter",{attrs:{"smart-table":t.smartTable,"st-filter":"filename"}})],1)])]),t._v(" "),t.displayed.length>0?n("tbody",t._l(t.displayed,function(e){return n("tr",{key:t.makeRowKey(e)},t._l(t.table.props,function(a,r){return n("td",{key:r},["url"===a?n("a",{attrs:{target:"_blank",href:e.value[a]}},[t._v(t._s(e.value[a]))]):n("span",[t._v(t._s(e.value[a]))])])}))})):n("tbody",[n("tr",[n("td",{attrs:{colspan:t.table.props.length}},[t._v("No data")])])]),t._v(" "),n("tfoot",[n("tr",{staticClass:"text-center"},[n("td",{attrs:{colspan:t.table.props.length}},[n("st-paginate",{attrs:{"smart-table":t.smartTable}})],1)])])])},r=[],s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search-page"}},[n("h2",[t._v("File Search")]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.searchFiles()}}},[t._v("Search")])]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("search-table",{attrs:{"smart-table":t.table}})],1)])},r=[],s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";function a(t){n(94)}var r=n(96),s=n(97),i=n(2),o=a,c=i(r.a,s.a,o,"data-v-2fbccc4e",null);e.a=c.exports},function(t,e,n){var a=n(95);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(7)("2fcabbfc",a,!0,{})},function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";e.a={name:"Profile",data:function(){return{username:"Foo",groups:["Bar"],files:[{name:"package.json",url:"./index.html#/file"}]}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("Username "+t._s(t.username))]),t._v(" "),n("div",[t._v("Groups\n    "),t._l(t.groups,function(e,a){return n("span",{key:a},[t._v(t._s(e))])})],2),t._v(" "),n("div",[t._v("Files\n    "),t._l(t.files,function(e){return n("a",{key:e.url,attrs:{href:e.url}},[t._v(t._s(e.name))])})],2)])},r=[],s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";function a(t){n(99)}var r=n(101),s=n(102),i=n(2),o=a,c=i(r.a,s.a,o,"data-v-7d3c356c",null);e.a=c.exports},function(t,e,n){var a=n(100);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(7)("33ad2f3a",a,!0,{})},function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var a=n(9),r=n.n(a);e.a={name:"FileView",data:function(){var t={filename:"package.json",content:""};return r.a.get(t.filename,{responseType:"text"}).then(function(e){t.content=e.data}).catch(function(t){console.error(t)}),t}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(t._s(t.filename))]),t._v(" "),n("pre",[t._v(t._s(t.content))])])},r=[],s={render:a,staticRenderFns:r};e.a=s},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("h1",[t._v("File Host App")]),t._v(" "),n("ul",t._l(t.routes,function(e){return n("li",{key:e.path},[n("router-link",{attrs:{exact:"",to:e.path}},[t._v(t._s(e.name))])],1)})),t._v(" "),n("router-view")],1)},r=[],s={render:a,staticRenderFns:r};e.a=s}],[65]);
//# sourceMappingURL=app.js.map