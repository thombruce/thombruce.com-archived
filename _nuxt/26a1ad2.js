(window.webpackJsonp=window.webpackJsonp||[]).push([[34,22],{4652:function(t,e,r){"use strict";r.r(e);r(10),r(17),r(23),r(2300),r(42),r(66);var n={props:["articles"],methods:{site:function(t){var e=new URL(t).hostname;switch(e){case"beer.thombruce.com":return"Free as in Beer";case"code.thombruce.com":return"Undefined";case"ink.thombruce.com":case"happy.thombruce.com":case"popcorn.thombruce.com":default:return e.split(".")[0]}}}},c=r(9),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.articles?t._l(t.articles,(function(article){return r("article",{staticClass:"card card-side bordered mb-4"},[r("figure",[article.image?r("NuxtImg",{staticStyle:{width:"200px",height:"200px","object-fit":"cover"},attrs:{src:article.image,width:"200",height:"200"}}):t._e()],1),r("div",{staticClass:"card-body"},[r("header",[r("h2",{staticClass:"card-title"},[r("a",{attrs:{href:article.url,target:"_blank"}},[t._v(t._s(article.title))]),t._v(" "),r("span",{staticClass:"badge"},[t._v(t._s(t._f("titleize")(t.site(article.url))))])]),r("time",{attrs:{datetime:article.date}},[t._v(t._s(t._f("toLocaleString")(article.date)))])]),article.summary?r("div",[r("p",[t._v(t._s(article.summary))])]):t._e()])])})):r("div",{staticClass:"text-center"},[r("span",{staticClass:"text-2xl text-secondary"},[t._v("There's nothing to see yet.")])])],2)}),[],!1,null,null,null);e.default=component.exports},4703:function(t,e,r){"use strict";r.r(e);var n=r(3),c=(r(26),{data:function(){return{pages:null,articles:null}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content().fetch().catch((function(){}));case 2:return t.pages=e.sent,e.next=5,t.$content("blog").where({draft:{$ne:!0}}).sortBy("date","desc").fetch().catch((function(){}));case 5:t.articles=e.sent;case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{titleTemplate:null}}}),l=r(9),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$fetchState.pending?t._e():r("article",[t.articles?r("TntBlogList",{attrs:{articles:t.articles}}):t._e(),t.pages?r("footer",{staticClass:"hidden"},t._l(t.pages,(function(e){return r("NuxtLink",{key:e.slug,attrs:{to:e}},[t._v(t._s(e.title))])})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntBlogList:r(4652).default})}}]);