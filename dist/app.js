webpackJsonp([0],[,function(t,e){t.exports=function(t,e,a,n,s){var r,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,i=t.default);var l="function"==typeof i?i.options:i;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),n&&(l._scopeId=n);var c;if(s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):a&&(c=a),c){var u=l.functional,f=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),f(t,e)}:l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:i,options:l}}},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var n=a(78),s=a(83),r=a(99),i=a(104);e.a=[{path:"/",name:"Home",component:n.a},{path:"/search",name:"Search",component:s.a},{path:"/profile/:username",component:r.a,props:!0},{path:"/file/:hash",component:i.a,props:!0}]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function n(){y||(y=g.$loading.show())}function s(){y&&(y.hide(),y=null)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(8),i=a.n(r),o=a(73),l=(a.n(o),a(10)),c=a(14),u=a.n(c),f=a(18),d=a.n(f),p=a(20),v=a(21),m=a.n(v),b=a(74),h=a(27);l.default.use(u.a),l.default.use(d.a),l.default.use(p.default),l.default.use(m.a);var _=new p.default({routes:h.a}),g=new l.default({el:"#app",data:{store:{sessionToken:null}},render:function(t){return t(b.a)},router:_}),y=void 0;i.a.interceptors.request.use(function(t){return n(),t},function(t){return s(),Promise.reject(t)}),i.a.interceptors.response.use(function(t){return s(),t},function(t){return s(),Promise.reject(t)})},function(t,e,a){"use strict";t.exports=a(17).polyfill()},function(t,e,a){"use strict";function n(t){a(75)}var s=a(77),r=a(114),i=a(1),o=n,l=i(s.a,r.a,o,"data-v-b0f7d472",null);e.a=l.exports},function(t,e,a){var n=a(76);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(6)("1e1ed614",n,!0,{})},function(t,e,a){e=t.exports=a(5)(!1),e.push([t.i,".app-header[data-v-b0f7d472]{margin-top:20px}.app-header>h1[data-v-b0f7d472]{display:inline-block;margin-top:0}",""])},function(t,e,a){"use strict";var n=a(14),s=a.n(n),r=a(27),i=a(109);e.a={name:"App",data:function(){return{routes:r.a.filter(function(t){return t.name&&"string"==typeof t.name})}},components:{login:i.a,"loading-overlay":s.a}}},function(t,e,a){"use strict";function n(t){a(79)}var s=a(81),r=a(82),i=a(1),o=n,l=i(s.a,r.a,o,"data-v-2def1fae",null);e.a=l.exports},function(t,e,a){var n=a(80);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(6)("07ed6ecc",n,!0,{})},function(t,e,a){e=t.exports=a(5)(!1),e.push([t.i,"",""])},function(t,e,a){"use strict";function n(t){var e={};return e[t.filename]={content:t.content},r.a.post("https://api.github.com/gists",{files:e,description:"",public:!0})}var s=a(8),r=a.n(s);e.a={name:"Home",data:function(){return{error:"",newFile:{url:"",show:!1},paste:{filename:"",content:""}}},methods:{checkFile:function(t){var e=t.target.files;this.file=e.length>0?e[0]:void 0},submitFile:function(){function t(t,a){e.newFile.show=!1,n({filename:t,content:a}).then(function(t){e.newFile.url="#/file/"+t.data.id,e.newFile.show=!0}).catch(function(){e.error="Failed to create the file"})}var e=this;if(!(e.file||e.paste.filename&&e.paste.content))return void(e.error="No file or invalid paste");if(e.error="",e.file){var a=new FileReader;a.readAsText(e.file),a.onload=function(a){if(!a.target.result)return void(e.error="File is empty");t(e.file.name,a.target.result)}}else t(e.paste.filename,e.paste.content)}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"upload-page"}},[a("h2",[t._v("Upload File or Paste Text")]),t._v(" "),t.newFile.show?a("div",{staticClass:"bg-success"},[t._v("File Created!\n    "),a("a",{attrs:{target:"_blank",href:t.newFile.url}},[t._v(t._s(t.newFile.url))])]):t._e(),t._v(" "),t.error?a("div",{staticClass:"bg-danger"},[t._v(t._s(t.error))]):t._e(),t._v(" "),a("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[a("div",{staticClass:"form-group"},[a("input",{attrs:{id:"upload-file",type:"file",accept:"text"},on:{change:function(e){t.checkFile(e)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paste.filename,expression:"paste.filename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filename"},domProps:{value:t.paste.filename},on:{input:function(e){e.target.composing||t.$set(t.paste,"filename",e.target.value)}}}),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.paste.content,expression:"paste.content"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.paste.content},on:{input:function(e){e.target.composing||t.$set(t.paste,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[t._v("Reset")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.submitFile()}}},[t._v("Submit")])])])])},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(84)}var s=a(86),r=a(98),i=a(1),o=n,l=i(s.a,r.a,o,"data-v-2a573b55",null);e.a=l.exports},function(t,e,a){var n=a(85);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(6)("f10d1172",n,!0,{})},function(t,e,a){e=t.exports=a(5)(!1),e.push([t.i,"",""])},function(t,e,a){"use strict";var n=a(8),s=a.n(n),r=a(2),i=a(87),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"Search",components:{"search-table":i.a},data:function(){return{table:Object(r.default)({data:[]},function(t){return t.tableState.slice.size=10,{refresh:function(e){t.data.splice(),e.forEach(function(t){this.push(t)},t.data),t.table.exec()}}})}},methods:{searchFiles:function(){var t=this;s.a.get("https://api.github.com/gists/public?per_page=100").then(function(e){var a=e.data,n=a.map(function(t){var e=t.files[Object.keys(t.files)[0]];return{id:t.id,filename:e.filename,user:t.owner&&"object"===o(t.owner)&&"string"==typeof t.owner.login?t.owner.login:"",datetime:t.created_at,url:"#/file/"+t.id}});t.table.refresh(n)}).catch(function(t){console.error(t)})}}}},function(t,e,a){"use strict";function n(t){a(88)}var s=a(90),r=a(97),i=a(1),o=n,l=i(s.a,r.a,o,"data-v-7909a03a",null);e.a=l.exports},function(t,e,a){var n=a(89);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(6)("4feb8439",n,!0,{})},function(t,e,a){e=t.exports=a(5)(!1),e.push([t.i,"",""])},function(t,e,a){"use strict";var n=a(12),s=a(91),r=a(94);e.a={name:"SearchSmartTable",mixins:[n.default.table],components:{"st-col-filter":s.a,"st-paginate":r.a},data:function(){return{table:{props:["filename","user","datetime","url"],headers:{filename:"Filename",user:"User",datetime:"DateTime",url:"Url"}}}},methods:{makeRowKey:function(t){return[t.value.id,t.value.filename,Date.now()].join("-")}}}},function(t,e,a){"use strict";var n=a(92),s=a(93),r=a(1),i=r(n.a,s.a,null,null,null);e.a=i.exports},function(t,e,a){"use strict";var n=a(12);e.a={mixins:[n.default.filter],data:function(){return{query:""}},watch:{query:function(t){this.filter(t)}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=a(95),s=a(96),r=a(1),i=r(n.a,s.a,null,null,null);e.a=i.exports},function(t,e,a){"use strict";var n=a(12);e.a={mixins:[n.default.pagination],props:{numPages:{type:Number,default:5,validator:function(t){return"number"==typeof t&&t>0}}},data:function(){return{disabled:{first:!0,prev:!0,next:!0,last:!0},lastPage:1,pages:[1]}},methods:{makePageKey:function(t){return t+"-"+Date.now()}},watch:{stState:function(){var t=this.stState.filteredCount>0?Math.ceil(this.stState.filteredCount/this.stState.size):1,e=Math.floor(this.numPages/2),a=[];if(this.stState.page<=e)for(var n=1;n<=this.numPages&&n<=t;n++)a.push(n);else if(this.stState.page+e>=t)for(var s=t;s>=1&&t-s<this.numPages;s--)a.unshift(s);else for(var r=-1*e;r<=e;r++)a.push(this.stState.page+r);this.pages=a,this.lastPage=t,this.disabled.prev=!this.stDirective.isPreviousPageEnabled(),this.disabled.next=!this.stDirective.isNextPageEnabled()}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"btn-group"},[a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:function(e){t.selectPage(1)}}},[t._v("First")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:t.selectPreviousPage}},[t._v("Prev")]),t._v(" "),t._l(t.pages,function(e){return a("button",{key:t.makePageKey(e),staticClass:"btn",class:{"btn-primary":e===t.stState.page},attrs:{type:"button"},on:{click:function(a){t.selectPage(e)}}},[t._v(t._s(e))])}),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:t.selectNextPage}},[t._v("Next")]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:function(e){t.selectPage(t.lastPage)}}},[t._v("Last")])],2)},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-striped"},[a("col",{staticClass:"col-xs-4"}),t._v(" "),a("col",{staticClass:"col-xs-3"}),t._v(" "),a("col",{staticClass:"col-xs-3"}),t._v(" "),a("col",{staticClass:"col-xs-2"}),t._v(" "),a("thead",[a("tr",t._l(t.table.props,function(e,n){return a("th",{key:n,attrs:{"smart-table":t.smartTable}},[a("span",[t._v(t._s(t.table.headers[e]))])])})),t._v(" "),a("tr",[a("th",[a("st-col-filter",{attrs:{"smart-table":t.smartTable,"st-filter":"filename"}})],1),t._v(" "),a("th",[a("st-col-filter",{attrs:{"smart-table":t.smartTable,"st-filter":"user"}})],1)])]),t._v(" "),t.displayed.length>0?a("tbody",t._l(t.displayed,function(e){return a("tr",{key:t.makeRowKey(e)},t._l(t.table.props,function(n,s){return a("td",{key:s},["url"===n?a("a",{attrs:{target:"_blank",href:e.value[n]}},[t._v("Link")]):a("span",[t._v(t._s(e.value[n]))])])}))})):a("tbody",[a("tr",[a("td",{attrs:{colspan:t.table.props.length}},[t._v("No data")])])]),t._v(" "),a("tfoot",[a("tr",{staticClass:"text-center"},[a("td",{attrs:{colspan:t.table.props.length}},[a("st-paginate",{attrs:{"smart-table":t.smartTable}})],1)])])])},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"search-page"}},[a("h2",[t._v("File Search")]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"10px"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.searchFiles()}}},[t._v("Search")])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("search-table",{attrs:{"smart-table":t.table}})],1)])},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(100)}var s=a(102),r=a(103),i=a(1),o=n,l=i(s.a,r.a,o,"data-v-ff32ab62",null);e.a=l.exports},function(t,e,a){var n=a(101);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(6)("04fefc10",n,!0,{})},function(t,e,a){e=t.exports=a(5)(!1),e.push([t.i,".panel[data-v-ff32ab62]{box-shadow:0 1px 1px rgba(0,0,0,.5);background:#fafafa}.profile-header[data-v-ff32ab62]{text-align:center}#accountInfo[data-v-ff32ab62]{overflow-wrap:break-word}.form-group[data-v-ff32ab62]{border-bottom:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.25)}",""])},function(t,e,a){"use strict";function n(t){if(!t)return null;var e=s.filter(function(t){return t.username===this.toString()},t);return e.length>0?e[0]:null}var s=[{name:"Tim Struggles",email:"timstruggles@mail.com",username:"TheStruggle",pastes:[{name:"gistfile1.txt",url:"/file/a828a18c9ea19b9f84b2cc0c640a870d"}],friends:[{username:"Foo"}]},{name:"Foo",email:"foo@mail.com",username:"Foo",friends:[{username:"TheStruggle"}]}];e.a={name:"Profile",props:{username:{type:String,required:!0}},store:["sessionToken"],computed:{profileInfo:function(){return n(this.username)},me:function(){return"TheStruggle"===this.username}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.profileInfo?a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row panel"},[a("div",{staticClass:"panel-heading"},[t.me?a("h3",{staticClass:"profile-header"},[t._v("Your Profile")]):a("h3",{staticClass:"profile-header"},[t._v(t._s(t.profileInfo.name)+"'s Profile")])]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 col-xs"},[a("div",{staticClass:"panel panel-primary",attrs:{id:"accountInfo"}},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"profile-email"}},[t._v("Email Address")]),t._v(" "),a("h4",{attrs:{id:"profile-email"}},[t._v(t._s(t.profileInfo.email))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"profile-username"}},[t._v("User Name")]),t._v(" "),a("h4",{attrs:{id:"profile-username"}},[t._v(t._s(t.profileInfo.username))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"friends"}},[t._v("Friends")]),t._v(" "),t._l(t.profileInfo.friends,function(e){return a("h4",{key:e.name},[a("router-link",{attrs:{exact:"",to:"/profile/"+e.username}},[t._v(t._s(e.username))])],1)})],2)])])]),t._v(" "),a("div",{staticClass:"col-md-8 col-sm-8"},[a("div",{staticClass:"panel panel-primary"},[t._m(1),t._v(" "),t.sessionToken&&t.profileInfo.pastes?a("div",{staticClass:"panel-body"},t._l(t.profileInfo.pastes,function(e){return a("h4",{key:e.name},[a("router-link",{attrs:{exact:"",to:e.url}},[t._v(t._s(e.name))])],1)})):a("div",{staticClass:"panel-body"},[a("h4",[t._v("No Uploads available")])])])])])]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading "},[a("h5",[t._v("Account Info ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("h5",[t._v("Uploads")])])}],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(105)}var s=a(107),r=a(108),i=a(1),o=n,l=i(s.a,r.a,o,"data-v-41ce178b",null);e.a=l.exports},function(t,e,a){var n=a(106);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(6)("9a372886",n,!0,{})},function(t,e,a){e=t.exports=a(5)(!1),e.push([t.i,".comments[data-v-41ce178b]{list-style-type:none;padding-left:0}.comments>li[data-v-41ce178b]{border:1px solid #000;border-radius:5px;margin:10px 0;padding:10px}",""])},function(t,e,a){"use strict";var n=a(8),s=a.n(n);e.a={name:"FileView",props:{hash:{type:String,required:!0}},data:function(){return{file:{name:"",content:"",comments:[]}}},store:["sessionToken"],methods:{updateFile:function(t){var e=this;s.a.get("https://api.github.com/gists/"+t).then(function(t){var a=t.data.files;return e.file.name=Object.keys(a)[0],e.file.content=a[e.file.name].content,s.a.get(t.data.comments_url)}).then(function(t){e.file.comments=t.data.map(function(t){return{id:t.id,user:t.user.login,content:t.body}})}).catch(function(t){console.error(t)})},makeRowKey:function(t){return[t.id,Date.now()].join("-")}},created:function(){this.updateFile(this.hash)},watch:{hash:function(t){this.updateFile(t)}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",[t._v(t._s(t.file.name))]),t._v(" "),a("pre",[t._v(t._s(t.file.content))]),t._v(" "),a("h3",[t._v("Comments")]),t._v(" "),a("ul",{staticClass:"comments"},t._l(t.file.comments,function(e){return a("li",{key:t.makeRowKey(e)},[a("strong",[t._v(t._s(e.user))]),t._v(" "),a("p",[t._v(t._s(e.content))])])})),t._v(" "),t.sessionToken?a("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[t._m(0),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:""}},[t._v("Submit")])]):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment-self"}},[t._v("Leave a Comment")]),t._v(" "),a("textarea",{staticClass:"form-control",attrs:{id:"comment-self",rows:"5"}})])}],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";function n(t){a(110)}var s=a(112),r=a(113),i=a(1),o=n,l=i(s.a,r.a,o,"data-v-55ea7b8f",null);e.a=l.exports},function(t,e,a){var n=a(111);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(6)("930c4f9e",n,!0,{})},function(t,e,a){e=t.exports=a(5)(!1),e.push([t.i,"",""])},function(t,e,a){"use strict";e.a={name:"Account",data:function(){return{form:{username:"",password:""},sessionUsername:"TheStruggle"}},store:["sessionToken"],methods:{openModal:function(){this.$modal.show("login")},closeModal:function(){this.$modal.hide("login")},login:function(){this.closeModal(),this.sessionToken="foobar"},logout:function(){this.sessionToken=null}}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.sessionToken?a("div",[a("router-link",{staticClass:"btn btn-default",attrs:{exact:"",to:"/profile/"+t.sessionUsername}},[t._v("Profile")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.logout()}}},[t._v("Logout")])],1):a("div",[a("modal",{attrs:{name:"login",width:"400",adaptive:!0,"click-to-close":!1}},[a("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"20px"}},[a("form",{staticClass:"form-horizontal",attrs:{"v:on-submit.prevent":"onSubmit"}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-3",attrs:{for:"acct-username"}},[t._v("Username")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{id:"acct-username",type:"text"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-sm-3",attrs:{for:"acct-password"}},[t._v("Password")]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"acct-password",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"pull-right"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.closeModal()}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.login()}}},[t._v("Login")])])])])]),t._v(" "),a("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.openModal()}}},[t._v("Login")])],1)},s=[],r={render:n,staticRenderFns:s};e.a=r},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("header",{staticClass:"app-header"},[a("h1",[t._v("FileHub")]),t._v(" "),a("login",{staticClass:"pull-right"})],1),t._v(" "),a("loading-overlay"),t._v(" "),a("ul",{staticClass:"nav nav-pills"},t._l(t.routes,function(e){return a("router-link",{key:e.path,attrs:{tag:"li","active-class":"active",exact:"",to:e.path}},[a("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.name))])])})),t._v(" "),a("router-view")],1)},s=[],r={render:n,staticRenderFns:s};e.a=r}],[72]);
//# sourceMappingURL=app.js.map