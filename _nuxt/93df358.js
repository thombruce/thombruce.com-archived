(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4,6,7,26,27],{4534:function(t,e,n){"use strict";n.r(e);var r={props:{id:String,value:{type:String,required:!0},label:String,type:{type:String,default:"text"}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.label?n("label",{staticClass:"block",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),n("input",{staticClass:"block",attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},4535:function(t,e,n){"use strict";n.r(e);var r={props:{id:String,value:{type:String,required:!0},label:String}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.label?n("label",{staticClass:"block",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),n("textarea",{staticClass:"block",attrs:{id:t.id},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},4537:function(t,e,n){"use strict";(function(t){e.a={props:["article"],methods:{parameterize:function(e){return t.kebabCase(e)}}}}).call(this,n(92))},4538:function(t,e,n){"use strict";n.r(e);var r={props:["article"]},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtContent",{attrs:{document:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports},4543:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(30),{props:["path"],data:function(){return{comment:{name:"",message:""},options:{path:"/_data/comments".concat(this.path)}}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("staticman/post",{fields:t.comment,options:t.options,property:"comments"}).then((function(){t.comment={name:"",message:""}}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=n(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}},[n("h3",[t._v("New Comment")]),n("TntFormInput",{attrs:{id:"commentFormName",label:"Name"},model:{value:t.comment.name,callback:function(e){t.$set(t.comment,"name",e)},expression:"comment.name"}}),n("TntFormTextarea",{attrs:{id:"commentFormMessage",label:"Comment"},model:{value:t.comment.message,callback:function(e){t.$set(t.comment,"message",e)},expression:"comment.message"}}),n("button",{attrs:{type:"submit"}},[t._v("Submit")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntFormInput:n(4534).default,TntFormTextarea:n(4535).default})},4548:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(30),{props:["path"],computed:{comments:function(){return this.$store.getters["staticman/asc"]("/_data/comments".concat(this.path))}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("staticman/all",{path:"/_data/comments".concat(t.path)});case 2:case"end":return e.stop()}}),e)})))()}}),c=n(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._m(0),n("div",t._l(t.comments,(function(e){return n("article",[n("header",[n("h3",[t._v(t._s(e.name))]),n("time",{attrs:{datetime:e.createdAt}},[t._v(t._s(e.createdAt))])]),n("div",[n("p",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.message))])])])})),0),n("footer",[n("CommentsForm",{attrs:{path:t.path}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h2",[t._v("Comments")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CommentsForm:n(4543).default})},4550:function(t,e,n){"use strict";n.r(e);var r=n(4537).a,l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[t.article.image?n("NuxtImg",{attrs:{src:t.article.image,width:"100vw"}}):t._e(),n("dl",{staticClass:"inline-block mr-3"},[n("dt",{staticClass:"hidden"},[t._v("Categories")]),t._l(t.article.categories,(function(e){return n("dd",[n("NuxtLink",{attrs:{to:"/blog/categories/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2),n("dl",{staticClass:"inline-block mr-3"},[n("dt",{staticClass:"hidden"},[t._v("Series")]),t._l(t.article.series,(function(e){return n("dd",[n("NuxtLink",{attrs:{to:"/blog/series/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2),n("h1",[t._v(t._s(t.article.title))]),n("dl",{staticClass:"inline-block mr-3"},[n("dt",{staticClass:"hidden"},[t._v("Tags")]),t._l(t.article.tags,(function(e){return n("dd",{staticClass:"inline-block mr-2"},[n("NuxtLink",{attrs:{to:"/blog/tags/"+t.parameterize(e)}},[t._v(t._s(e))])],1)}))],2),n("time",{staticClass:"block",attrs:{datetime:t.article.createdAt}},[t._v(t._s(t.article.createdAt))])],1)}),[],!1,null,null,null);e.default=component.exports},4557:function(t,e,n){"use strict";n.r(e);var r={props:["article"]},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("ArticleHeader",{attrs:{article:t.article}}),n("ArticleContent",{attrs:{article:t.article}}),n("footer",[n("CommentsSection",{attrs:{path:t.article.path}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleHeader:n(4550).default,ArticleContent:n(4538).default,CommentsSection:n(4548).default})}}]);