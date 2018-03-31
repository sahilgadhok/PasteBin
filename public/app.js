webpackJsonp([0],[,function(t,e){t.exports=function(t,e,n,a,s){var o,r=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(o=t,r=t.default);var l="function"==typeof r?r.options:r;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),a&&(l._scopeId=a);var c;if(s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=n),c){var u=l.functional,f=u?l.render:l.beforeCreate;u?l.render=function(t,e){return c.call(e),f(t,e)}:l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:r,options:l}}},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var a=n(78),s=n(83),o=n(99),r=n(104);e.a=[{path:"/",name:"Home",component:a.a},{path:"/search",name:"Search",component:s.a},{path:"/profile/:username",component:o.a,props:!0},{path:"/file/:hash",component:r.a,props:!0}]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(){y||(y=_.$loading.show())}function s(){y&&(y.hide(),y=null)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),r=n.n(o),i=n(73),l=(n.n(i),n(10)),c=n(14),u=n.n(c),f=n(18),p=n.n(f),d=n(20),m=n(21),v=n.n(m),b=n(74),g=n(27);l.default.use(u.a),l.default.use(p.a),l.default.use(d.default),l.default.use(v.a);var h=new d.default({routes:g.a}),_=new l.default({el:"#app",data:{store:{sessionToken:null}},render:function(t){return t(b.a)},router:h}),y=void 0;r.a.interceptors.request.use(function(t){return a(),t},function(t){return s(),Promise.reject(t)}),r.a.interceptors.response.use(function(t){return s(),t},function(t){return s(),Promise.reject(t)})},function(t,e,n){"use strict";t.exports=n(17).polyfill()},function(t,e,n){"use strict";function a(t){n(75)}var s=n(77),o=n(114),r=n(1),i=a,l=r(s.a,o.a,i,"data-v-b0f7d472",null);e.a=l.exports},function(t,e,n){var a=n(76);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("1e1ed614",a,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".app-header[data-v-b0f7d472]{margin-top:20px}.app-header>h1[data-v-b0f7d472]{display:inline-block;margin-top:0}",""])},function(t,e,n){"use strict";var a=n(14),s=n.n(a),o=n(27),r=n(109);e.a={name:"App",data:function(){return{routes:o.a.filter(function(t){return t.name&&"string"==typeof t.name})}},components:{access:r.a,"loading-overlay":s.a}}},function(t,e,n){"use strict";function a(t){n(79)}var s=n(81),o=n(82),r=n(1),i=a,l=r(s.a,o.a,i,"data-v-2def1fae",null);e.a=l.exports},function(t,e,n){var a=n(80);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("07ed6ecc",a,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var a=n(8),s=(n.n(a),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}),o="object"===("undefined"==typeof window?"undefined":s(window))&&"object"===s(window.firebase)?window.firebase:null;e.a={name:"Home",data:function(){return{inputDisabled:!1,error:"",newFile:{url:"",show:!1},paste:{filename:"",content:""}}},methods:{checkFile:function(t){var e=t.target.files;this.file=e.length>0?e[0]:void 0},submitFile:function(){function t(t,n){if(!o)return e.error="Failed to create the file",void(e.inputDisabled=!1);e.newFile.show=!1;var a=o.database(),s=a.ref("/file").push();s.set({name:t,content:n,created:(new Date).toISOString()}),a.ref("/public_files/"+s.key).set(1),e.newFile.url="#/file/"+s.key,e.newFile.show=!0,e.inputDisabled=!1}var e=this;if(!(e.file||e.paste.filename&&e.paste.content))return void(e.error="No file or invalid paste");if(e.inputDisabled=!0,e.error="",e.file){var n=new FileReader;n.readAsText(e.file),n.onload=function(n){if(!n.target.result)return e.error="File is empty",void(e.inputDisabled=!0);t(e.file.name,n.target.result)}}else t(e.paste.filename,e.paste.content)}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"upload-page"}},[n("h2",[t._v("Upload File or Paste Text")]),t._v(" "),t.newFile.show?n("div",{staticClass:"bg-success"},[t._v("File Created!\n    "),n("a",{attrs:{target:"_blank",href:t.newFile.url}},[t._v(t._s(t.newFile.url))])]):t._e(),t._v(" "),t.error?n("div",{staticClass:"bg-danger"},[t._v(t._s(t.error))]):t._e(),t._v(" "),n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("input",{attrs:{id:"upload-file",type:"file",accept:"text"},on:{change:function(e){t.checkFile(e)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paste.filename,expression:"paste.filename"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Filename"},domProps:{value:t.paste.filename},on:{input:function(e){e.target.composing||t.$set(t.paste,"filename",e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.paste.content,expression:"paste.content"}],staticClass:"form-control",attrs:{rows:"10"},domProps:{value:t.paste.content},on:{input:function(e){e.target.composing||t.$set(t.paste,"content",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[t._v("Reset")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.inputDisabled},on:{click:function(e){t.submitFile()}}},[t._v("Submit")])])])])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";function a(t){n(84)}var s=n(86),o=n(98),r=n(1),i=a,l=r(s.a,o.a,i,"data-v-2a573b55",null);e.a=l.exports},function(t,e,n){var a=n(85);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("f10d1172",a,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var a=n(8),s=(n.n(a),n(2)),o=n(87),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="object"===("undefined"==typeof window?"undefined":r(window))&&"object"===r(window.firebase)?window.firebase:null;e.a={name:"Search",components:{"search-table":o.a},data:function(){return{table:Object(s.default)({data:[]},function(t){return t.tableState.slice.size=10,{refresh:function(e){t.data.length=0,e.forEach(function(t){this.push(t)},t.data),t.table.exec()}}})}},methods:{searchFiles:function(){if(i){var t=this,e=i.database();e.ref("/public_files").once("value").then(function(n){var a=Object.keys(n.val());return Promise.all(a.map(function(t){return e.ref("/file/"+t).once("value").then(function(e){var n=e.val();return{id:t,filename:n.name,datetime:n.created,url:"#/file/"+t}})})).then(function(e){console.log(e),t.table.refresh(e)})}).catch(function(t){console.error(t)})}}}}},function(t,e,n){"use strict";function a(t){n(88)}var s=n(90),o=n(97),r=n(1),i=a,l=r(s.a,o.a,i,"data-v-7909a03a",null);e.a=l.exports},function(t,e,n){var a=n(89);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("4feb8439",a,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var a=n(12),s=n(91),o=n(94);e.a={name:"SearchSmartTable",mixins:[a.default.table],components:{"st-col-filter":s.a,"st-paginate":o.a},data:function(){return{table:{props:["filename","datetime","url"],headers:{filename:"Filename",datetime:"DateTime",url:"Url"}}}},methods:{makeRowKey:function(t){return[t.value.id,t.value.filename,Date.now()].join("-")}}}},function(t,e,n){"use strict";var a=n(92),s=n(93),o=n(1),r=o(a.a,s.a,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var a=n(12);e.a={mixins:[a.default.filter],data:function(){return{query:""}},watch:{query:function(t){this.filter(t)}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=n(95),s=n(96),o=n(1),r=o(a.a,s.a,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var a=n(12);e.a={mixins:[a.default.pagination],props:{numPages:{type:Number,default:5,validator:function(t){return"number"==typeof t&&t>0}}},data:function(){return{disabled:{first:!0,prev:!0,next:!0,last:!0},lastPage:1,pages:[1]}},methods:{makePageKey:function(t){return t+"-"+Date.now()}},watch:{stState:function(){var t=this.stState.filteredCount>0?Math.ceil(this.stState.filteredCount/this.stState.size):1,e=Math.floor(this.numPages/2),n=[];if(this.stState.page<=e)for(var a=1;a<=this.numPages&&a<=t;a++)n.push(a);else if(this.stState.page+e>=t)for(var s=t;s>=1&&t-s<this.numPages;s--)n.unshift(s);else for(var o=-1*e;o<=e;o++)n.push(this.stState.page+o);this.pages=n,this.lastPage=t,this.disabled.prev=!this.stDirective.isPreviousPageEnabled(),this.disabled.next=!this.stDirective.isNextPageEnabled()}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"btn-group"},[n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:function(e){t.selectPage(1)}}},[t._v("First")]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.prev},on:{click:t.selectPreviousPage}},[t._v("Prev")]),t._v(" "),t._l(t.pages,function(e){return n("button",{key:t.makePageKey(e),staticClass:"btn",class:{"btn-primary":e===t.stState.page},attrs:{type:"button"},on:{click:function(n){t.selectPage(e)}}},[t._v(t._s(e))])}),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:t.selectNextPage}},[t._v("Next")]),t._v(" "),n("button",{staticClass:"btn",attrs:{type:"button",disabled:t.disabled.next},on:{click:function(e){t.selectPage(t.lastPage)}}},[t._v("Last")])],2)},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-striped"},[n("col",{staticClass:"col-xs-4"}),t._v(" "),n("col",{staticClass:"col-xs-4"}),t._v(" "),n("col",{staticClass:"col-xs-4"}),t._v(" "),n("thead",[n("tr",t._l(t.table.props,function(e,a){return n("th",{key:a,attrs:{"smart-table":t.smartTable}},[n("span",[t._v(t._s(t.table.headers[e]))])])})),t._v(" "),n("tr",[n("th",[n("st-col-filter",{attrs:{"smart-table":t.smartTable,"st-filter":"filename"}})],1)])]),t._v(" "),t.displayed.length>0?n("tbody",t._l(t.displayed,function(e){return n("tr",{key:t.makeRowKey(e)},t._l(t.table.props,function(a,s){return n("td",{key:s},["url"===a?n("a",{attrs:{target:"_blank",href:e.value[a]}},[t._v("Link")]):n("span",[t._v(t._s(e.value[a]))])])}))})):n("tbody",[n("tr",[n("td",{attrs:{colspan:t.table.props.length}},[t._v("No data")])])]),t._v(" "),n("tfoot",[n("tr",{staticClass:"text-center"},[n("td",{attrs:{colspan:t.table.props.length}},[n("st-paginate",{attrs:{"smart-table":t.smartTable}})],1)])])])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search-page"}},[n("h2",[t._v("File Search")]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.searchFiles()}}},[t._v("Search")])]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("search-table",{attrs:{"smart-table":t.table}})],1)])},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";function a(t){n(100)}var s=n(102),o=n(103),r=n(1),i=a,l=r(s.a,o.a,i,"data-v-ff32ab62",null);e.a=l.exports},function(t,e,n){var a=n(101);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("04fefc10",a,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".panel[data-v-ff32ab62]{box-shadow:0 1px 1px rgba(0,0,0,.5);background:#fafafa}.profile-header[data-v-ff32ab62]{text-align:center}#accountInfo[data-v-ff32ab62]{overflow-wrap:break-word}.form-group[data-v-ff32ab62]{border-bottom:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.25)}",""])},function(t,e,n){"use strict";function a(t){if(!t)return null;var e=s.filter(function(t){return t.username===this.toString()},t);return e.length>0?e[0]:null}var s=[{name:"Tim Struggles",email:"timstruggles@mail.com",username:"TheStruggle",pastes:[{name:"gistfile1.txt",url:"/file/a828a18c9ea19b9f84b2cc0c640a870d"}],friends:[{username:"Foo"}]},{name:"Foo",email:"foo@mail.com",username:"Foo",friends:[{username:"TheStruggle"}]}];e.a={name:"Profile",props:{username:{type:String,required:!0}},store:["sessionToken"],computed:{profileInfo:function(){return a(this.username)},me:function(){return"TheStruggle"===this.username}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.profileInfo?n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row panel"},[n("div",{staticClass:"panel-heading"},[t.me?n("h3",{staticClass:"profile-header"},[t._v("Your Profile")]):n("h3",{staticClass:"profile-header"},[t._v(t._s(t.profileInfo.name)+"'s Profile")])]),t._v(" "),n("div",{staticClass:"col-md-4 col-sm-4 col-xs"},[n("div",{staticClass:"panel panel-primary",attrs:{id:"accountInfo"}},[t._m(0),t._v(" "),n("div",{staticClass:"panel-body"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"profile-email"}},[t._v("Email Address")]),t._v(" "),n("h4",{attrs:{id:"profile-email"}},[t._v(t._s(t.profileInfo.email))])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"profile-username"}},[t._v("User Name")]),t._v(" "),n("h4",{attrs:{id:"profile-username"}},[t._v(t._s(t.profileInfo.username))])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"friends"}},[t._v("Friends")]),t._v(" "),t._l(t.profileInfo.friends,function(e){return n("h4",{key:e.name},[n("router-link",{attrs:{exact:"",to:"/profile/"+e.username}},[t._v(t._s(e.username))])],1)})],2)])])]),t._v(" "),n("div",{staticClass:"col-md-8 col-sm-8"},[n("div",{staticClass:"panel panel-primary"},[t._m(1),t._v(" "),t.sessionToken&&t.profileInfo.pastes?n("div",{staticClass:"panel-body"},t._l(t.profileInfo.pastes,function(e){return n("h4",{key:e.name},[n("router-link",{attrs:{exact:"",to:e.url}},[t._v(t._s(e.name))])],1)})):n("div",{staticClass:"panel-body"},[n("h4",[t._v("No Uploads available")])])])])])]):t._e()},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading "},[n("h5",[t._v("Account Info ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-heading"},[n("h5",[t._v("Uploads")])])}],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";function a(t){n(105)}var s=n(107),o=n(108),r=n(1),i=a,l=r(s.a,o.a,i,"data-v-41ce178b",null);e.a=l.exports},function(t,e,n){var a=n(106);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("9a372886",a,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,".comments[data-v-41ce178b]{list-style-type:none;padding-left:0}.comments>li[data-v-41ce178b]{border:1px solid #000;border-radius:5px;margin:10px 0;padding:10px}",""])},function(t,e,n){"use strict";var a=n(8),s=(n.n(a),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}),o="object"===("undefined"==typeof window?"undefined":s(window))&&"object"===s(window.firebase)?window.firebase:null;e.a={name:"FileView",props:{hash:{type:String,required:!0}},data:function(){return{comment:"",file:{name:"",content:"",comments:[]}}},store:["sessionToken"],methods:{submitComment:function(){this.comment&&(this.file.comments.push({id:[Date.now(),Date.now()].join("-"),user:"timStruggle",content:this.comment}),this.comment="")},updateFile:function(t){if(t&&o){var e=this;o.database().ref("/file/"+t).once("value").then(function(t){var n=t.val();n&&(e.file.name=n.name,e.file.content=n.content)}).catch(function(t){console.error(t)})}},makeRowKey:function(t){return[t.id,Date.now()].join("-")}},created:function(){this.updateFile(this.hash)},watch:{hash:function(t){this.updateFile(t)}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.file.name?n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.file.name))]),t._v(" "),n("pre",[t._v(t._s(t.file.content))]),t._v(" "),n("h3",[t._v("Comments")]),t._v(" "),n("ul",{staticClass:"comments"},t._l(t.file.comments,function(e){return n("li",{key:t.makeRowKey(e)},[n("strong",[t._v(t._s(e.user))]),t._v(" "),n("p",[t._v(t._s(e.content))])])})),t._v(" "),t.sessionToken?n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"comment-self"}},[t._v("Leave a Comment")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{id:"comment-self",rows:"5"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.submitComment()}}},[t._v("Submit")])]):t._e()]):t._e()},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";function a(t){n(110)}var s=n(112),o=n(113),r=n(1),i=a,l=r(s.a,o.a,i,"data-v-e3c3bca4",null);e.a=l.exports},function(t,e,n){var a=n(111);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("c0403b80",a,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";e.a={name:"Account",data:function(){return{sessionUsername:"TheStruggle",signInForm:{username:"",password:""},signUpForm:{username:"",password:""}}},store:["sessionToken"],methods:{openSignInModal:function(){this.$modal.show("signIn")},closeSignInModal:function(){this.$modal.hide("signIn"),this.signInForm.username="",this.signInForm.password=""},signIn:function(){this.closeSignInModal(),this.sessionToken="foobar"},signOut:function(){this.sessionToken=null},openSignUpModal:function(){this.$modal.show("signUp")},closeSignUpModal:function(){this.$modal.hide("signUp"),this.signUpForm.username="",this.signUpForm.password=""},signUp:function(){this.closeSignUpModal()}}}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.sessionToken?n("div",[n("router-link",{staticClass:"btn btn-default",attrs:{exact:"",to:"/profile/"+t.sessionUsername}},[t._v("Profile")]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.signOut()}}},[t._v("Sign Out")])],1):n("div",[n("modal",{attrs:{name:"signIn",width:"300","click-to-close":!1,adaptive:!0,scrollable:!0}},[n("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"20px"}},[n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"acct-username"}},[t._v("Username")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signInForm.username,expression:"signInForm.username"}],staticClass:"form-control",attrs:{id:"acct-username",type:"text"},domProps:{value:t.signInForm.username},on:{input:function(e){e.target.composing||t.$set(t.signInForm,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"acct-password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signInForm.password,expression:"signInForm.password"}],staticClass:"form-control",attrs:{id:"acct-password",type:"password"},domProps:{value:t.signInForm.password},on:{input:function(e){e.target.composing||t.$set(t.signInForm,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"pull-right"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.closeSignInModal()}}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.signIn()}}},[t._v("Sign In")])])])])]),t._v(" "),n("modal",{attrs:{name:"signUp",width:"300","click-to-close":!1,adaptive:!0,scrollable:!0}},[n("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"20px"}},[n("form",{attrs:{"v:on-submit.prevent":"onSubmit"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"acct-username"}},[t._v("Username")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signUpForm.username,expression:"signUpForm.username"}],staticClass:"form-control",attrs:{id:"acct-username",type:"text"},domProps:{value:t.signUpForm.username},on:{input:function(e){e.target.composing||t.$set(t.signUpForm,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"acct-password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.signUpForm.password,expression:"signUpForm.password"}],staticClass:"form-control",attrs:{id:"acct-password",type:"password"},domProps:{value:t.signUpForm.password},on:{input:function(e){e.target.composing||t.$set(t.signUpForm,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"pull-right"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.closeSignUpModal()}}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.signUp()}}},[t._v("Sign Up")])])])])]),t._v(" "),n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.openSignInModal()}}},[t._v("Sign In")]),t._v(" "),n("button",{staticClass:"btn btn-default",attrs:{type:"button",disabled:""},on:{click:function(e){t.openSignUpModal()}}},[t._v("Sign Up")])],1)},s=[],o={render:a,staticRenderFns:s};e.a=o},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("header",{staticClass:"app-header"},[n("h1",[t._v("FileHub")]),t._v(" "),n("access",{staticClass:"pull-right"})],1),t._v(" "),n("loading-overlay"),t._v(" "),n("ul",{staticClass:"nav nav-pills"},t._l(t.routes,function(e){return n("router-link",{key:e.path,attrs:{tag:"li","active-class":"active",exact:"",to:e.path}},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(e.name))])])})),t._v(" "),n("router-view")],1)},s=[],o={render:a,staticRenderFns:s};e.a=o}],[72]);
//# sourceMappingURL=app.js.map