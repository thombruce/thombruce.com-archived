(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{4709:function(e,t,n){"use strict";n.r(t);var r=n(3),c=(n(29),{data:function(){return{page:null}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content(e.$route.params.page).where({draft:{$ne:!0}}).fetch();case 2:e.page=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}),o=n(9),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$fetchState.pending?e._e():n("article",[n("header",[e.page.image?n("NuxtImg",{attrs:{src:e.page.image,width:"100vw"}}):e._e(),n("h1",[e._v(e._s(e.page.title))]),n("time",{attrs:{datetime:e.page.createdAt}},[e._v(e._s(e._f("toLocaleString")(e.page.createdAt)))])],1),n("div",{class:e.page.container},[n("NuxtContent",{attrs:{document:e.page}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);