(window.webpackJsonp=window.webpackJsonp||[]).push([[36,9,26,28],{4287:function(t,e,n){"use strict";n.r(e);var r={props:{id:String,value:{type:String,required:!0},label:String,type:{type:String,default:"text"}}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.label?n("label",{staticClass:"block",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),n("input",{staticClass:"block",attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},4288:function(t,e,n){"use strict";n.r(e);var r={props:{id:String,value:{type:String,required:!0},label:String}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.label?n("label",{staticClass:"block",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),n("textarea",{staticClass:"block",attrs:{id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},4308:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(25),{props:["path"],data:function(){return{guest:{name:"",message:""}}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("https://thombruce-staticman.herokuapp.com/v3/entry/gitlab/thombruce/thombruce.com/main/guestbook",{fields:t.guest});case 2:case"end":return e.stop()}}),e)})))()}}}),o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}},model:{value:t.guest,callback:function(e){t.guest=e},expression:"guest"}},[n("h3",[t._v("Say Hello")]),n("UiInput",{attrs:{id:"guestbookFormName",label:"Name"},model:{value:t.guest.name,callback:function(e){t.$set(t.guest,"name",e)},expression:"guest.name"}}),n("UiTextarea",{attrs:{id:"guestbookFormMessage",label:"Message"},model:{value:t.guest.message,callback:function(e){t.$set(t.guest,"message",e)},expression:"guest.message"}}),n("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiInput:n(4287).default,UiTextarea:n(4288).default})},4332:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(25),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("_data","guestbook").sortBy("createdAt","desc").fetch().catch((function(){}));case 3:return r=e.sent,e.abrupt("return",{guestbook:r});case 5:case"end":return e.stop()}}),e)})))()}}),o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[t._m(0),n("div",t._l(t.guestbook,(function(e){return n("article",[n("header",[n("h2",[t._v(t._s(e.name))]),n("time",{attrs:{datetime:e.createdAt}},[t._v(t._s(e.createdAt))])]),n("div",[n("p",[t._v(t._s(e.message))])])])})),0),n("footer",[n("GuestbookForm")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Guestbook")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{GuestbookForm:n(4308).default})}}]);