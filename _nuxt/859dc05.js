(window.webpackJsonp=window.webpackJsonp||[]).push([[36,22],{4651:function(t,e,n){"use strict";n.r(e);n(10),n(17),n(23),n(2299),n(42),n(66);var r={props:["articles"],methods:{site:function(t){var e=new URL(t).hostname;switch(e){case"beer.thombruce.com":return"Free as in Beer";case"code.thombruce.com":return"Undefined";case"ink.thombruce.com":case"happy.thombruce.com":case"popcorn.thombruce.com":default:return e.split(".")[0]}}}},c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.articles?t._l(t.articles,(function(article){return n("article",[n("header",[n("h2",[n("a",{attrs:{href:article.url,target:"_blank"}},[t._v(t._s(article.title))]),t._v(" "),n("small",{staticClass:"inline-block rounded-full px-2 bg-gray-500 text-light"},[t._v(t._s(t._f("titleize")(t.site(article.url))))])]),n("time",{attrs:{datetime:article.date_modified}},[t._v(t._s(t._f("toLocaleString")(article.date_modified)))])]),article.summary?n("div",[n("p",[t._v(t._s(article.summary))])]):t._e()])})):n("div",{staticClass:"text-center"},[n("span",{staticClass:"text-2xl text-secondary"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},4708:function(t,e,n){"use strict";n.r(e);var r=n(3),c=(n(29),{data:function(){return{pages:null,articles:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content().fetch().catch((function(){}));case 2:return t.pages=e.sent,e.next=5,t.$content("blog").where({draft:{$ne:!0}}).sortBy("createdAt","desc").fetch().catch((function(){}));case 5:t.articles=e.sent;case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{titleTemplate:null}}}),l=n(9),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$fetchState.pending?t._e():n("article",[t.articles?n("TntBlogList",{attrs:{articles:t.articles}}):t._e(),t.pages?n("footer",{staticClass:"hidden"},t._l(t.pages,(function(e){return n("NuxtLink",{key:e.slug,attrs:{to:e}},[t._v(t._s(e.title))])})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntBlogList:n(4651).default})}}]);