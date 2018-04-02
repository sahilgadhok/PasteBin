webpackJsonp([0],{151:function(t,e,n){"use strict";var s=n(203),a=n(208),o=n(224),i=n(229);e.a=[{path:"/",name:"Home",component:s.a},{path:"/search",name:"Search",component:a.a},{path:"/profile/:username",component:o.a,props:!0},{path:"/file/:hash",component:i.a,props:!0}]},197:function(t,e,n){"use strict";function s(){y||(y=_.$loading.show())}function a(){y&&(y.hide(),y=null)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),i=n.n(o),r=n(198),l=(n.n(r),n(11)),c=n(16),u=n.n(c),f=n(20),p=n.n(f),d=n(21),m=n(22),v=n.n(m),b=n(199),h=n(151);l.default.use(u.a),l.default.use(p.a),l.default.use(d.default),l.default.use(v.a);var g=new d.default({routes:h.a}),_=new l.default({el:"#app",data:{store:{sessionToken:null}},render:function(t){return t(b.a)},router:g}),y=void 0;i.a.interceptors.request.use(function(t){return s(),t},function(t){return a(),Promise.reject(t)}),i.a.interceptors.response.use(function(t){return a(),t},function(t){return a(),Promise.reject(t)})},198:function(t,e,n){"use strict";t.exports=n(19).polyfill()},199:function(t,e,n){"use strict";function s(t){n(200)}var a=n(202),o=n(239),i=n(2),r=s,l=i(a.a,o.a,r,"data-v-b0f7d472",null);e.a=l.exports},2:function(t,e){t.exports=function(t,e,n,s,a){var o,i=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(o=t,i=t.default);var l="function"==typeof i?i.options:i;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),s&&(l._scopeId=s);var c;if(a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,f=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),f(t,e)}:l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:i,options:l}}},200:function(t,e,n){var s=n(201);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(7)("1e1ed614",s,!0,{})},201:function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,".app-header[data-v-b0f7d472]{margin-top:20px}.app-header>h1[data-v-b0f7d472]{display:inline-block;margin-top:0}",""])},202:function(t,e,n){"use strict";var s=n(16),a=n.n(s),o=n(151),i=n(234);e.a={name:"App",data:function(){return{routes:o.a.filter(function(t){return t.name&&"string"==typeof t.name})}},components:{access:i.a,"loading-overlay":a.a}}},203:function(t,e,n){"use strict";function s(t){n(204)}var a=n(206),o=n(207),i=n(2),r=s,l=i(a.a,o.a,r,"data-v-2def1fae",null);e.a=l.exports},204:function(t,e,n){var s=n(205);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(7)("07ed6ecc",s,!0,{})},205:function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},206:function(t,e,n){"use strict";var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a="object"===("undefined"==typeof window?"undefined":s(window))&&"object"===s(window.firebase)?window.firebase:null;e.a={name:"Home",data:function(){return{inputDisabled:!1,error:"",newFile:{url:"",show:!1},paste:{filename:"",content:""}}},methods:{checkFile:function(t){var e=t.target.files;this.file=e.length>0?e[0]:void 0},submitFile:function(){function t(t,n){if(!a)return e.error="Failed to create the file",void(e.inputDisabled=!1);e.newFile.show=!1;var s=a.database(),o=s.ref("/file").push();o.set({name:t,content:n,created:(new Date).toISOString()}).then(function(){return s.ref("/public_files/"+o.key).set(1)}).then(function(){e.newFile.url="/file/"+o.key,e.newFile.show=!0,e.inputDisabled=!1})}var e=this;if(!(e.file||e.paste.filename&&e.paste.content))return void(e.error="No file or invalid paste");if(e.inputDisabled=!0,e.error="",e.file){var n=new FileReader;n.readAsText(e.file),n.onload=function(n){if(!n.target.result)return e.error="File is empty",void(e.inputDisabled=!1);t(e.file.name,n.target.result)}}else t(e.paste.filename,e.paste.content)}}}},207:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"upload-page"}},[n("h2",[t._v("Upload File or Paste Text")]),t._v(" "),t.newFile.show?n("div",{staticClass:"bg-success"},[t._v("File Created!\n    "),n("router-link",{attrs:{to:t.newFile.url}},[t._v(t._s("/#"+t.newFile.url))])],1):t._e(),t._v(" "),t.error?n("div",{staticClass:"bg-danger"},[t._v(t._s(t.error))]):t._e(),t._v(" "),n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("input",{attrs:{id:"upload-file",type:"file",accept:"text"},on:{change:function(e){t.checkFile(e)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paste.filename,expression:"paste.filename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filename"},domProps:{value:t.paste.filename},on:{input:function(e){e.target.composing||t.$set(t.paste,"filename",e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.paste.content,expression:"paste.content"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.paste.content},on:{input:function(e){e.target.composing||t.$set(t.paste,"content",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[t._v("Reset")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.inputDisabled},on:{click:function(e){t.submitFile()}}},[t._v("Submit")])])])])},a=[],o={render:s,staticRenderFns:a};e.a=o},208:function(t,e,n){"use strict";function s(t){n(209)}var a=n(211),o=n(223),i=n(2),r=s,l=i(a.a,o.a,r,"data-v-2a573b55",null);e.a=l.exports},209:function(t,e,n){var s=n(210);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(7)("f10d1172",s,!0,{})},210:function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},211:function(t,e,n){"use strict";var s=n(3),a=n(212),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="object"===("undefined"==typeof window?"undefined":o(window))&&"object"===o(window.firebase)?window.firebase:null;e.a={name:"Search",components:{"search-table":a.a},data:function(){return{table:Object(s.default)({data:[]},function(t){return t.tableState.slice.size=10,{refresh:function(e){t.data.length=0,e.forEach(function(t){this.push(t)},t.data),t.table.exec()}}})}},methods:{searchFiles:function(){if(i){var t=this,e=i.database();e.ref("/public_files").once("value").then(function(n){var s=Object.keys(n.val());return Promise.all(s.map(function(t){return e.ref("/file/"+t).once("value").then(function(e){var n=e.val();return{id:t,filename:n.name,datetime:n.created,url:"/file/"+t}})})).then(function(e){t.table.refresh(e)})}).catch(function(t){console.error(t)})}}}}},212:function(t,e,n){"use strict";function s(t){n(213)}var a=n(215),o=n(222),i=n(2),r=s,l=i(a.a,o.a,r,"data-v-7909a03a",null);e.a=l.exports},213:function(t,e,n){var s=n(214);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(7)("4feb8439",s,!0,{})},214:function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},215:function(t,e,n){"use strict";var s=n(13),a=n(216),o=n(219),i=n(0),r=n.n(i);e.a={name:"SearchSmartTable",mixins:[s.default.table],components:{"st-col-filter":a.a,"st-paginate":o.a},data:function(){return{table:{props:["filename","datetime","url"],headers:{filename:"Filename",datetime:"Datetime (UTC)",url:"Url"}}}},methods:{makeRowKey:function(t){return[t.value.id,t.value.filename,Date.now()].join("-")},prettifyDate:function(t){if(!t)return"";var e=r.a.utc(t);return e&&e?e.format("MM-DD-YYYY HH:mm:ss"):""}}}},216:function(t,e,n){"use strict";var s=n(217),a=n(218),o=n(2),i=o(s.a,a.a,null,null,null);e.a=i.exports},217:function(t,e,n){"use strict";var s=n(13);e.a={mixins:[s.default.filter],data:function(){return{query:""}},watch:{query:function(t){this.filter(t)}}}},218:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})},a=[],o={render:s,staticRenderFns:a};e.a=o},219:function(t,e,n){"use strict";var s=n(220),a=n(221),o=n(2),i=o(s.a,a.a,null,null,null);e.a=i.exports},220:function(t,e,n){"use strict";var s=n(13);e.a={mixins:[s.default.pagination],props:{numPages:{type:Number,default:5,validator:function(t){return"number"==typeof t&&t>0}}},data:function(){return{disabled:{first:!0,prev:!0,next:!0,last:!0},lastPage:1,pages:[1]}},methods:{makePageKey:function(t){return t+"-"+Date.now()}},watch:{stState:function(){var t=this.stState.filteredCount>0?Math.ceil(this.stState.filteredCount/this.stState.size):1,e=Math.floor(this.numPages/2),n=[];if(this.stState.page<=e)for(var s=1;s<=this.numPages&&s<=t;s++)n.push(s);else if(this.stState.page+e>=t)for(var a=t;a>=1&&t-a<this.numPages;a--)n.unshift(a);else for(var o=-1*e;o<=e;o++)n.push(this.stState.page+o);this.pages=n,this.lastPage=t,this.disabled.prev=!this.stDirective.isPreviousPageEnabled(),this.disabled.next=!this.stDirective.isNextPageEnabled()}}}},221:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"btn-group"},[n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:function(e){t.selectPage(1)}}},[t._v("First")]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:t.selectPreviousPage}},[t._v("Prev")]),t._v(" "),t._l(t.pages,function(e){return n("button",{key:t.makePageKey(e),staticClass:"btn",class:{"btn-primary":e===t.stState.page},attrs:{type:"button"},on:{click:function(n){t.selectPage(e)}}},[t._v(t._s(e))])}),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:t.selectNextPage}},[t._v("Next")]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:function(e){t.selectPage(t.lastPage)}}},[t._v("Last")])],2)},a=[],o={render:s,staticRenderFns:a};e.a=o},222:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-striped"},[n("col",{staticClass:"col-xs-4"}),t._v(" "),n("col",{staticClass:"col-xs-4"}),t._v(" "),n("col",{staticClass:"col-xs-4"}),t._v(" "),n("thead",[n("tr",t._l(t.table.props,function(e,s){return n("th",{key:s},[n("span",[t._v(t._s(t.table.headers[e]))])])})),t._v(" "),n("tr",[n("th",[n("st-col-filter",{attrs:{"smart-table":t.smartTable,"st-filter":"filename"}})],1)])]),t._v(" "),t.displayed.length>0?n("tbody",t._l(t.displayed,function(e){return n("tr",{key:t.makeRowKey(e)},t._l(t.table.props,function(s,a){return n("td",{key:a},["url"===s?n("router-link",{attrs:{to:e.value[s]}},[t._v("Link")]):"datetime"===s?n("span",[t._v(t._s(t.prettifyDate(e.value[s])))]):n("span",[t._v(t._s(e.value[s]))])],1)}))})):n("tbody",[n("tr",[n("td",{attrs:{colspan:t.table.props.length}},[t._v("No data")])])]),t._v(" "),n("tfoot",[n("tr",{staticClass:"text-center"},[n("td",{attrs:{colspan:t.table.props.length}},[n("st-paginate",{attrs:{"smart-table":t.smartTable}})],1)])])])},a=[],o={render:s,staticRenderFns:a};e.a=o},223:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search-page"}},[n("h2",[t._v("File Search")]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.searchFiles()}}},[t._v("Search")])]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("search-table",{attrs:{"smart-table":t.table}})],1)])},a=[],o={render:s,staticRenderFns:a};e.a=o},224:function(t,e,n){"use strict";function s(t){n(225)}var a=n(227),o=n(228),i=n(2),r=s,l=i(a.a,o.a,r,"data-v-ff32ab62",null);e.a=l.exports},225:function(t,e,n){var s=n(226);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(7)("04fefc10",s,!0,{})},226:function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,".panel[data-v-ff32ab62]{box-shadow:0 1px 1px rgba(0,0,0,.5);background:#fafafa}.profile-header[data-v-ff32ab62]{text-align:center}#accountInfo[data-v-ff32ab62]{overflow-wrap:break-word}.form-group[data-v-ff32ab62]{border-bottom:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.25)}",""])},227:function(t,e,n){"use strict";var s=n(9),a=n.n(s);e.a={name:"Profile",props:{username:{type:String,required:!0}},data:function(){return{profileInfo:null}},store:["sessionToken"],computed:{me:function(){return!0}},methods:{updateProfile:function(t){if(!this.sessionToken)return void(this.profileInfo=null);var e=this;a.a.post(["https://us-central1-filehub-f9a91.cloudfunctions.net/api","profile",t].join("/"),{token:this.sessionToken}).then(function(t){e.profileInfo=t.data}).catch(function(t){console.error(t)})}},created:function(){this.updateProfile(this.username)},watch:{username:function(t){this.updateProfile(t)},sessionToken:function(){this.updateProfile(this.username)}}}},228:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.profileInfo?n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row panel"},[n("div",{staticClass:"panel-heading"},[t.me?n("h3",{staticClass:"profile-header"},[t._v("Your Profile")]):n("h3",{staticClass:"profile-header"},[t._v(t._s(t.profileInfo.name)+"'s Profile")])]),t._v(" "),n("div",{staticClass:"col-md-4 col-sm-4 col-xs"},[n("div",{staticClass:"panel panel-primary",attrs:{id:"accountInfo"}},[t._m(0),t._v(" "),n("div",{staticClass:"panel-body"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"profile-email"}},[t._v("Email Address")]),t._v(" "),n("h4",{attrs:{id:"profile-email"}},[t._v(t._s(t.profileInfo.email))])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"profile-username"}},[t._v("User Name")]),t._v(" "),n("h4",{attrs:{id:"profile-username"}},[t._v(t._s(t.profileInfo.username))])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"friends"}},[t._v("Friends")]),t._v(" "),t.profileInfo.friends?n("div",t._l(t.profileInfo.friends,function(e){return n("h4",{key:e.name},[n("router-link",{attrs:{exact:"",to:"/profile/"+e.username}},[t._v(t._s(e.username))])],1)})):t._e()])])])]),t._v(" "),n("div",{staticClass:"col-md-8 col-sm-8"},[n("div",{staticClass:"panel panel-primary"},[t._m(1),t._v(" "),t.sessionToken&&t.profileInfo.files?n("div",{staticClass:"panel-body"},t._l(t.profileInfo.files,function(e){return n("h4",{key:e.name},[n("router-link",{attrs:{exact:"",to:e.url}},[t._v(t._s(e.name))])],1)})):n("div",{staticClass:"panel-body"},[n("h4",[t._v("No Uploads available")])])])])])]):t._e()},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading "},[n("h5",[t._v("Account Info ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading"},[n("h5",[t._v("Uploads")])])}],o={render:s,staticRenderFns:a};e.a=o},229:function(t,e,n){"use strict";function s(t){n(230)}var a=n(232),o=n(233),i=n(2),r=s,l=i(a.a,o.a,r,"data-v-41ce178b",null);e.a=l.exports},230:function(t,e,n){var s=n(231);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(7)("9a372886",s,!0,{})},231:function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,".comments[data-v-41ce178b]{list-style-type:none;padding-left:0}.comments>li[data-v-41ce178b]{border:1px solid #000;border-radius:5px;margin:10px 0;padding:10px}",""])},232:function(t,e,n){"use strict";var s=n(9),a=n.n(s),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="object"===("undefined"==typeof window?"undefined":o(window))&&"object"===o(window.firebase)?window.firebase:null;e.a={name:"FileView",props:{hash:{type:String,required:!0}},data:function(){return{inputEnabled:!!i,comment:"",file:{name:"",content:"",comments:[]}}},store:["sessionToken"],methods:{updateComments:function(t){if(t&&i){var e=this;i.database().ref("/comment/"+t).orderByChild("created").once("value").then(function(t){var n=t.val();n&&(e.file.comments=Object.keys(n).map(function(t){return{id:t,user:n[t].user,content:n[t].content,created:n[t].created}}))}).catch(function(t){console.error(t)})}},updateFile:function(t){if(t&&i){var e=this;i.database().ref("/file/"+t).once("value").then(function(n){var s=n.val();s&&(e.file.name=s.name,e.file.content=s.content,e.updateComments(t))}).catch(function(t){console.error(t)})}},submitComment:function(){if(this.comment&&i){var t=this;a.a.post(["https://us-central1-filehub-f9a91.cloudfunctions.net/api","comment",this.hash].join("/"),{comment:this.comment,token:this.sessionToken}).then(function(){t.updateComments(t.hash),t.comment=""}).catch(function(t){console.error(t)})}},makeRowKey:function(t){return[t.id,Date.now()].join("-")}},created:function(){this.updateFile(this.hash)},watch:{hash:function(t){this.updateFile(t)}}}},233:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.file.name?n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.file.name))]),t._v(" "),n("pre",[t._v(t._s(t.file.content))]),t._v(" "),n("h3",[t._v("Comments")]),t._v(" "),n("ul",{staticClass:"comments"},t._l(t.file.comments,function(e){return n("li",{key:t.makeRowKey(e)},[n("strong",[t._v(t._s(e.user))]),t._v(" "),n("p",[t._v(t._s(e.content))])])})),t._v(" "),t.inputEnabled&&t.sessionToken?n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"comment-self"}},[t._v("Leave a Comment")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{id:"comment-self",rows:"5"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.submitComment()}}},[t._v("Submit")])]):t._e()]):t._e()},a=[],o={render:s,staticRenderFns:a};e.a=o},234:function(t,e,n){"use strict";function s(t){n(235)}var a=n(237),o=n(238),i=n(2),r=s,l=i(a.a,o.a,r,"data-v-e3c3bca4",null);e.a=l.exports},235:function(t,e,n){var s=n(236);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(7)("c0403b80",s,!0,{})},236:function(t,e,n){e=t.exports=n(6)(!1),e.push([t.i,"",""])},237:function(t,e,n){"use strict";var s=n(9),a=n.n(s),o="https://us-central1-filehub-f9a91.cloudfunctions.net/api";e.a={name:"Account",data:function(){return{sessionUsername:"",signInForm:{username:"",password:""},signUpForm:{username:"",password:""}}},store:["sessionToken"],methods:{openSignInModal:function(){this.$modal.show("signIn")},closeSignInModal:function(){this.$modal.hide("signIn"),this.signInForm.username="",this.signInForm.password=""},signIn:function(){if(this.signInForm.username&&this.signInForm.password){var t=this;a.a.post(o+"/signin",{username:this.signInForm.username,password:this.signInForm.password}).then(function(e){t.sessionUsername=t.signInForm.username,t.sessionToken=e.data.token,t.closeSignInModal()}).catch(function(t){console.error(t),t.message&&console.error(t.message)})}},signOut:function(){var t=this;a.a.post(o+"/signout",{username:this.sessionUsername,token:this.sessionToken}).then(function(){t.sessionUsername="",t.sessionToken=null})},openSignUpModal:function(){this.$modal.show("signUp")},closeSignUpModal:function(){this.$modal.hide("signUp"),this.signUpForm.username="",this.signUpForm.password=""},signUp:function(){var t=this;a.a.post(o+"/signup",{username:this.signUpForm.username,password:this.signUpForm.password}).then(function(){t.closeSignUpModal(),t.$modal.show("signupSuccess")}).catch(function(t){console.error(t),t.message&&console.error(t.message)})}}}},238:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.sessionToken?n("div",[n("router-link",{staticClass:"btn btn-default",attrs:{exact:"",to:"/profile/"+t.sessionUsername}},[t._v("Profile")]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.signOut()}}},[t._v("Sign Out")])],1):n("div",[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.openSignInModal()}}},[t._v("Sign In")]),t._v(" "),n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.openSignUpModal()}}},[t._v("Sign Up")])]),t._v(" "),n("modal",{attrs:{name:"signIn",width:"300","click-to-close":!1,adaptive:!0}},[n("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"20px"}},[n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"acct-username"}},[t._v("Username")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signInForm.username,expression:"signInForm.username"}],staticClass:"form-control",attrs:{id:"acct-username",type:"text"},domProps:{value:t.signInForm.username},on:{input:function(e){e.target.composing||t.$set(t.signInForm,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"acct-password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signInForm.password,expression:"signInForm.password"}],staticClass:"form-control",attrs:{id:"acct-password",type:"password"},domProps:{value:t.signInForm.password},on:{input:function(e){e.target.composing||t.$set(t.signInForm,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"pull-right"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.closeSignInModal()}}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.signIn()}}},[t._v("Sign In")])])])])]),t._v(" "),n("modal",{attrs:{name:"signUp",width:"300","click-to-close":!1,adaptive:!0}},[n("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"20px"}},[n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"acct-username"}},[t._v("Username")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signUpForm.username,expression:"signUpForm.username"}],staticClass:"form-control",attrs:{id:"acct-username",type:"text"},domProps:{value:t.signUpForm.username},on:{input:function(e){e.target.composing||t.$set(t.signUpForm,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"acct-password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signUpForm.password,expression:"signUpForm.password"}],staticClass:"form-control",attrs:{id:"acct-password",type:"password"},domProps:{value:t.signUpForm.password},on:{input:function(e){e.target.composing||t.$set(t.signUpForm,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"pull-right"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.closeSignUpModal()}}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.signUp()}}},[t._v("Sign Up")])])])])]),t._v(" "),n("modal",{attrs:{name:"signupSuccess",width:"300",height:"auto",adaptive:!0}},[n("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"20px"}},[n("div",{staticClass:"panel panel-success"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("Signup Successful")])]),t._v(" "),n("div",{staticClass:"panel-body"},[n("p",[t._v("You can sign in with your username and password via the Sign In button")])])])])])],1)},a=[],o={render:s,staticRenderFns:a};e.a=o},239:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("header",{staticClass:"app-header"},[n("h1",[t._v("FileHub")]),t._v(" "),n("access",{staticClass:"pull-right"})],1),t._v(" "),n("loading-overlay"),t._v(" "),n("ul",{staticClass:"nav nav-pills"},t._l(t.routes,function(e){return n("router-link",{key:e.path,attrs:{tag:"li","active-class":"active",exact:"",to:e.path}},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.name))])])})),t._v(" "),n("router-view")],1)},a=[],o={render:s,staticRenderFns:a};e.a=o}},[197]);
//# sourceMappingURL=app.js.map