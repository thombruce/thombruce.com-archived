(window.webpackJsonp=window.webpackJsonp||[]).push([[46,23],{4579:function(t,e,r){"use strict";r.r(e);var n={props:["articles"]},c=r(9),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?t._l(t.articles,(function(article){return r("article",[r("header",[r("h2",[r("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),r("time",{attrs:{datetime:article.createdAt}},[t._v(t._s(article.createdAt))])]),article.description?r("div",[r("p",[t._v(t._s(article.description))])]):t._e()])})):r("div",{staticClass:"text-center"},[r("span",{staticClass:"text-2xl text-secondary"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},4629:function(t,e,r){"use strict";r.r(e);var n=r(3),c=(r(30),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("blog").where({draft:{$ne:!0}}).sortBy("createdAt","desc").fetch().catch((function(){}));case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()}}),l=r(9),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("TntBlogList",{attrs:{articles:t.articles}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntBlogList:r(4579).default})}}]);