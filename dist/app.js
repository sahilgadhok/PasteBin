webpackJsonp([0],[,,function(t,e){t.exports=function(t,e,a,n,s){var r,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,i=t.default);var l="function"==typeof i?i.options:i;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),n&&(l._scopeId=n);var c;if(s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):a&&(c=a),c){var u=l.functional,f=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),f(t,e)}:l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:i,options:l}}},,,,function(t,e){function a(t,e){var a=t[1]||"",s=t[3];if(!s)return a;if(e&&"function"==typeof btoa){var r=n(s);return[a].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([r]).join("\n")}return[a].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=a(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&n[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),e.push(i))}},e}},function(t,e,a){function n(t){for(var e=0;e<t.length;e++){var a=t[e],n=u[a.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](a.parts[s]);for(;s<a.parts.length;s++)n.parts.push(r(a.parts[s]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var i=[],s=0;s<a.parts.length;s++)i.push(r(a.parts[s]));u[a.id]={id:a.id,refs:1,parts:i}}}}function s(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function r(t){var e,a,n=document.querySelector("style["+b+'~="'+t.id+'"]');if(n){if(v)return m;n.parentNode.removeChild(n)}if(_){var r=p++;n=d||(d=s()),e=i.bind(null,n,r,!1),a=i.bind(null,n,r,!0)}else n=s(),e=o.bind(null,n),a=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}function i(t,e,a,n){var s=a?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var r=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function o(t,e){var a=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),h.ssrId&&t.setAttribute(b,e.id),s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=a(70),u={},f=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,m=function(){},h=null,b="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,a,s){v=a,h=s||{};var r=c(t,e);return n(r),function(e){for(var a=[],s=0;s<r.length;s++){var i=r[s],o=u[i.id];o.refs--,a.push(o)}e?(r=c(t,e),n(r)):r=[];for(var s=0;s<a.length;s++){var o=a[s];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete u[o.id]}}}};var g=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},,,,,,,,,,,,,,,,function(t,e,a){"use strict";var n=a(72),s=a(77),r=a(93),i=a(98);e.a=[{path:"/",name:"Home",component:n.a},{path:"/search",name:"Search",component:s.a},{path:"/profile",name:"Profile",component:r.a},{path:"/file",component:i.a,props:function(t){return{hash:t.query.hash}}}]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(66),s=(a.n(n),a(16)),r=a(17),i=a(67),o=a(23),l=new r.default({routes:o.a});s.default.use(r.default),new s.default({el:"#app",render:function(t){return t(i.a)},router:l})},function(t,e,a){"use strict";t.exports=a(15).polyfill()},function(t,e,a){"use strict";function n(t){a(68)}var s=a(71),r=a(103),i=a(2),o=n,l=i(s.a,r.a,o,"data-v-6aa301ed",null);e.a=l.exports},function(t,e,a){var n=a(69);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("8b9b8254",n,!0,{})},function(t,e,a){e=t.exports=a(6)(!1),e.push([t.i,"",""])},function(t,e){t.exports=function(t,e){for(var a=[],n={},s=0;s<e.length;s++){var r=e[s],i=r[0],o=r[1],l=r[2],c=r[3],u={id:t+":"+s,css:o,media:l,sourceMap:c};n[i]?n[i].parts.push(u):a.push(n[i]={id:i,parts:[u]})}return a}},function(t,e,a){"use strict";var n=a(23);e.a={name:"App",data:function(){return{routes:n.a.filter(function(t){return t.name&&"string"==typeof t.name})}}}},function(t,e,a){"use strict";function n(t){a(73)}var s=a(75),r=a(76),i=a(2),o=n,l=i(s.a,r.a,o,"data-v-ec71ee7a",null);e.a=l.exports},function(t,e,a){var n=a(74);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("3510db3a",n,!0,{})},function(t,e,a){e=t.exports=a(6)(!1),e.push([t.i,"",""])},function(t,e,a){"use strict";function n(t){var e={};return e[t.filename]={content:t.content},r.a.post("https://api.github.com/gists",{files:e,description:"",public:!0})}var s=a(9),r=a.n(s);e.a={name:"Home",data:function(){return{error:"",newFile:{url:"",show:!1},paste:{filename:"",content:""}}},methods:{checkFile:function(t){var e=t.target.files;this.file=e.length>0?e[0]:void 0},submitFile:function(){function t(t,a){e.newFile.show=!1,n({filename:t,content:a}).then(function(a){var n=a.data.files[t];e.newFile.url=n.raw_url.replace(/^https.*\.com\//,"#/file?hash="),e.newFile.show=!0}).catch(function(){e.error="Failed to create the file"})}var e=this;if(!(e.file||e.paste.filename&&e.paste.content))return void(e.error="No file or invalid paste");if(e.error="",e.file){var a=new FileReader;a.readAsText(e.file),a.onload=function(a){if(!a.target.result)return void(e.error="File is empty");t(e.file.name,a.target.result)}}else t(e.paste.filename,e.paste.content)}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"upload-page"}},[a("h2",[t._v("Upload File or Paste Text")]),t._v(" "),t.newFile.show?a("div",{staticClass:"bg-success"},[t._v("File Created!\n    "),a("a",{attrs:{target:"_blank",href:t.newFile.url}},[t._v(t._s(t.newFile.url))])]):t._e(),t._v(" "),t.error?a("div",{staticClass:"bg-danger"},[t._v(t._s(t.error))]):t._e(),t._v(" "),a("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[a("div",{staticClass:"form-group"},[a("input",{attrs:{id:"upload-file",type:"file",accept:"text"},on:{change:function(e){t.checkFile(e)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paste.filename,expression:"paste.filename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filename"},domProps:{value:t.paste.filename},on:{input:function(e){e.target.composing||t.$set(t.paste,"filename",e.target.value)}}}),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.paste.content,expression:"paste.content"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.paste.content},on:{input:function(e){e.target.composing||t.$set(t.paste,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[t._v("Reset")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.submitFile()}}},[t._v("Submit")])])])])},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(78)}var s=a(80),r=a(92),i=a(2),o=n,l=i(s.a,r.a,o,"data-v-0eb1affb",null);e.a=l.exports},function(t,e,a){var n=a(79);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("7de3c3a8",n,!0,{})},function(t,e,a){e=t.exports=a(6)(!1),e.push([t.i,"",""])},function(t,e,a){"use strict";var n=a(9),s=a.n(n),r=a(1),i=a(81),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"Search",components:{"search-table":i.a},data:function(){return{table:Object(r.default)({data:[]},function(t){return t.tableState.slice.size=10,{refresh:function(e){t.data.splice(),e.forEach(function(t){this.push(t)},t.data),t.table.exec()}}})}},methods:{searchFiles:function(){var t=this;s.a.get("https://api.github.com/gists/public?per_page=100").then(function(e){var a=e.data,n=a.map(function(t){var e=t.files[Object.keys(t.files)[0]];return{id:t.id,filename:e.filename,user:t.owner&&"object"===o(t.owner)&&"string"==typeof t.owner.login?t.owner.login:"",datetime:t.created_at,url:e.raw_url.replace(/^https.*\.com\//,"#/file?hash=")}});t.table.refresh(n)}).catch(function(t){console.error(t)})}}}},function(t,e,a){"use strict";function n(t){a(82)}var s=a(84),r=a(91),i=a(2),o=n,l=i(s.a,r.a,o,"data-v-622efd60",null);e.a=l.exports},function(t,e,a){var n=a(83);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("43c7e838",n,!0,{})},function(t,e,a){e=t.exports=a(6)(!1),e.push([t.i,"",""])},function(t,e,a){"use strict";var n=a(11),s=a(85),r=a(88);e.a={name:"SearchSmartTable",mixins:[n.default.table],components:{"st-col-filter":s.a,"st-paginate":r.a},data:function(){return{table:{props:["filename","user","datetime","url"],headers:{filename:"Filename",user:"User",datetime:"DateTime",url:"Url"}}}},methods:{makeRowKey:function(t){return[t.value.id,t.value.filename,Date.now()].join("-")}}}},function(t,e,a){"use strict";var n=a(86),s=a(87),r=a(2),i=r(n.a,s.a,null,null,null);e.a=i.exports},function(t,e,a){"use strict";var n=a(11);e.a={mixins:[n.default.filter],data:function(){return{query:""}},watch:{query:function(t){this.filter(t)}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=a(89),s=a(90),r=a(2),i=r(n.a,s.a,null,null,null);e.a=i.exports},function(t,e,a){"use strict";var n=a(11);e.a={mixins:[n.default.pagination],props:{numPages:{type:Number,default:5,validator:function(t){return"number"==typeof t&&t>0}}},data:function(){return{disabled:{first:!0,prev:!0,next:!0,last:!0},lastPage:1,pages:[1]}},methods:{makePageKey:function(t){return t+"-"+Date.now()}},watch:{stState:function(){var t=this.stState.filteredCount>0?Math.ceil(this.stState.filteredCount/this.stState.size):1,e=Math.floor(this.numPages/2),a=[];if(this.stState.page<=e)for(var n=1;n<=this.numPages&&n<=t;n++)a.push(n);else if(this.stState.page+e>=t)for(var s=t;s>=1&&t-s<this.numPages;s--)a.unshift(s);else for(var r=-1*e;r<=e;r++)a.push(this.stState.page+r);this.pages=a,this.lastPage=t,this.disabled.prev=!this.stDirective.isPreviousPageEnabled(),this.disabled.next=!this.stDirective.isNextPageEnabled()}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"btn-group"},[a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:function(e){t.selectPage(1)}}},[t._v("First")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:t.selectPreviousPage}},[t._v("Prev")]),t._v(" "),t._l(t.pages,function(e){return a("button",{key:t.makePageKey(e),staticClass:"btn",class:{"btn-primary":e===t.stState.page},attrs:{type:"button"},on:{click:function(a){t.selectPage(e)}}},[t._v(t._s(e))])}),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:t.selectNextPage}},[t._v("Next")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:function(e){t.selectPage(t.lastPage)}}},[t._v("Last")])],2)},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-striped"},[a("col",{staticClass:"col-xs-4"}),t._v(" "),a("col",{staticClass:"col-xs-3"}),t._v(" "),a("col",{staticClass:"col-xs-3"}),t._v(" "),a("col",{staticClass:"col-xs-2"}),t._v(" "),a("thead",[a("tr",t._l(t.table.props,function(e,n){return a("th",{key:n,attrs:{"smart-table":t.smartTable}},[a("span",[t._v(t._s(t.table.headers[e]))])])})),t._v(" "),a("tr",[a("th",[a("st-col-filter",{attrs:{"smart-table":t.smartTable,"st-filter":"filename"}})],1),t._v(" "),a("th",[a("st-col-filter",{attrs:{"smart-table":t.smartTable,"st-filter":"user"}})],1)])]),t._v(" "),t.displayed.length>0?a("tbody",t._l(t.displayed,function(e){return a("tr",{key:t.makeRowKey(e)},t._l(t.table.props,function(n,s){return a("td",{key:s},["url"===n?a("a",{attrs:{target:"_blank",href:e.value[n]}},[t._v("Link")]):a("span",[t._v(t._s(e.value[n]))])])}))})):a("tbody",[a("tr",[a("td",{attrs:{colspan:t.table.props.length}},[t._v("No data")])])]),t._v(" "),a("tfoot",[a("tr",{staticClass:"text-center"},[a("td",{attrs:{colspan:t.table.props.length}},[a("st-paginate",{attrs:{"smart-table":t.smartTable}})],1)])])])},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"search-page"}},[a("h2",[t._v("File Search")]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"10px"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.searchFiles()}}},[t._v("Search")])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("search-table",{attrs:{"smart-table":t.table}})],1)])},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(94)}var s=a(96),r=a(97),i=a(2),o=n,l=i(s.a,r.a,o,"data-v-f771d916",null);e.a=l.exports},function(t,e,a){var n=a(95);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("6c2f2864",n,!0,{})},function(t,e,a){e=t.exports=a(6)(!1),e.push([t.i,".panel[data-v-f771d916]{box-shadow:0 1px 1px rgba(0,0,0,.5);background:#fafafa}.subsection[data-v-f771d916]{outline:1px solid #000;padding:5px}.profile-header[data-v-f771d916]{text-align:center}#accountInfo[data-v-f771d916]{overflow-wrap:break-word}.form-group[data-v-f771d916]{border-bottom:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.25)}",""])},function(t,e,a){"use strict";var n={name:"Tim Struggles",email:"timstruggles@mail.com",userName:"TheStruggle",pastes:[{name:"gistfile1.txt",url:"#/file?hash=janlazo/a828a18c9ea19b9f84b2cc0c640a870d/raw/04682927b385ecc2eee74c5e40f2e2f022254023/gistfile1.txt"}],friends:[{userName:"Foo"}]},s={name:"Foo",email:"foo@mail.com",userName:"Foo",pastes:[],friends:[{userName:"TheStruggle"}]},r=n;e.a={name:"Profile",data:function(){return{timStruggles:n,foo:s,profileInfo:r,index:0}},methods:{switchInfo:function(){0==this.index?(this.index=1,this.profileInfo=this.foo):(this.index=0,this.profileInfo=this.timStruggles)}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row panel"},[a("div",{staticClass:"panel-heading"},["Tim Struggles"==t.profileInfo.name?a("h3",{staticClass:"profile-header"},[t._v("Your Profile")]):t._e(),t._v(" "),"Tim Struggles"!=t.profileInfo.name?a("h3",{staticClass:"profile-header"},[t._v(t._s(t.profileInfo.name)+"'s Profile")]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 col-xs"},[a("div",{staticClass:"panel panel-primary",attrs:{id:"accountInfo"}},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email Address")]),t._v(" "),a("h4",{attrs:{id:"email"}},[t._v(t._s(t.profileInfo.email))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userName"}},[t._v("User Name")]),t._v(" "),a("h4",{attrs:{id:"userName"}},[t._v(t._s(t.profileInfo.userName))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"friends"}},[t._v("Friends")]),t._v(" "),t._l(t.profileInfo.friends,function(e){return a("h4",{key:e.name,staticClass:"friendLink"},[a("a",{on:{click:function(e){t.switchInfo()}}},[t._v(t._s(e.userName))])])})],2)])])]),t._v(" "),a("div",{staticClass:"col-md-8 col-sm-8"},[a("div",{staticClass:"panel panel-primary"},[t._m(1),t._v(" "),a("div",{staticClass:"panel-body"},[t._l(t.profileInfo.pastes,function(e){return a("h4",{key:e.name},[a("a",{attrs:{href:e.url}},[t._v(t._s(e.name))])])}),t._v(" "),0==t.profileInfo.pastes.length?a("h4",[t._v("Your friend "+t._s(t.profileInfo.name)+" hasn't uploaded andthing yet :(")]):t._e()],2)])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading "},[a("h5",[a("span",{staticClass:"glyphicon glyphicon-user"}),t._v(" Account Info ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("h5",[a("span",{staticClass:"glyphicon glyphicon-list"}),t._v(" Uploads")])])}],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(99)}var s=a(101),r=a(102),i=a(2),o=n,l=i(s.a,r.a,o,"data-v-8c0a59b6",null);e.a=l.exports},function(t,e,a){var n=a(100);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("10fc1d56",n,!0,{})},function(t,e,a){e=t.exports=a(6)(!1),e.push([t.i,"li[data-v-8c0a59b6]{border:1px solid #000;border-radius:5px;list-style-type:none;margin:5px;padding:10px}pre[data-v-8c0a59b6]{width:100%}#container[data-v-8c0a59b6]{width:60%}.comments-box[data-v-8c0a59b6]{width:80%}.comment-user[data-v-8c0a59b6]{font-size:14pt}",""])},function(t,e,a){"use strict";var n=a(9),s=a.n(n);e.a={name:"FileView",props:["hash"],data:function(){var t=this.hash.split("/"),e={filename:t[t.length-1],content:"",comments:[{user:"Alice",content:"Test comment"},{user:"Bob",content:"Test comment 2"}]};return s.a.get("https://gist.githubusercontent.com/"+this.hash,{responseType:"text"}).then(function(t){e.content=t.data}).catch(function(t){console.error(t)}),e}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"container"}},[a("div",[t._v(t._s(t.filename))]),t._v(" "),a("pre",[t._v(t._s(t.content))]),t._v(" "),a("div",{staticClass:"comments-box"},[a("h3",[t._v("Comments")]),t._v(" "),a("ul",t._l(t.comments,function(e){return a("li",[a("p",{staticClass:"comment-user"},[t._v(t._s(e.user))]),t._v(" "),a("div",{staticClass:"comment"},[t._v(t._s(e.content))])])})),t._v(" "),a("h4",[t._v("Leave a Comment")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.addComment()}}},[t._v("Submit")])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("textarea",{staticClass:"form-control",attrs:{rows:"5"}})])}],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("h1",[t._v("FileHub")]),t._v(" "),a("ul",{staticClass:"nav nav-tabs"},t._l(t.routes,function(e){return a("li",{key:e.path},[a("router-link",{attrs:{exact:"",to:e.path}},[t._v(t._s(e.name))])],1)})),t._v(" "),a("router-view")],1)},s=[],r={render:n,staticRenderFns:s};e.a=r}],[65]);
//# sourceMappingURL=app.js.map