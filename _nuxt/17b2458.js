(window.webpackJsonp=window.webpackJsonp||[]).push([[9,26,27],{4534:function(t,e,n){"use strict";n.r(e);var r={props:{id:String,value:{type:String,required:!0},label:String,type:{type:String,default:"text"}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.label?n("label",{staticClass:"block",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),n("input",{staticClass:"block",attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},4535:function(t,e,n){"use strict";n.r(e);var r={props:{id:String,value:{type:String,required:!0},label:String}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.label?n("label",{staticClass:"block",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),n("textarea",{staticClass:"block",attrs:{id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},4556:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(30),{props:["path"],data:function(){return{guest:{name:"",message:""},options:{path:"/_data/guestbook"}}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("staticman/post",{fields:t.guest,options:t.options,property:"guestbook"}).then((function(){t.guest={name:"",message:""}}));case 2:case"end":return e.stop()}}),e)})))()}}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}},model:{value:t.guest,callback:function(e){t.guest=e},expression:"guest"}},[n("h3",[t._v("Say Hello")]),n("TntFormInput",{attrs:{id:"guestbookFormName",label:"Name"},model:{value:t.guest.name,callback:function(e){t.$set(t.guest,"name",e)},expression:"guest.name"}}),n("TntFormTextarea",{attrs:{id:"guestbookFormMessage",label:"Message"},model:{value:t.guest.message,callback:function(e){t.$set(t.guest,"message",e)},expression:"guest.message"}}),n("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntFormInput:n(4534).default,TntFormTextarea:n(4535).default})}}]);