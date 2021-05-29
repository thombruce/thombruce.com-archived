---
title: Playfair
description: 'A charts library for Vue.js'
---

<div class='w-min mx-auto my-5'>
  <playfair-bar-chart :labels='[`One`, `Two`, `Three`]' :datasets='[{ label: `Data`, backgroundColor: [`#EF4444`, `#3B82F6`, `#10B981`], data: [40, 20, 12] }]'></playfair-bar-chart>
</div>

<div class='w-max mx-auto'>
  <nuxt-img src='/uploads/code/vue.png' sizes='sm:20vw md:10vw lg:10vw' class='inline-block mx-5'></nuxt-img>
  <nuxt-img src='/uploads/code/nuxt.png' sizes='sm:20vw md:10vw lg:10vw' class='inline-block mx-5'></nuxt-img>
</div>

Playfair is a chart library for Vue.js and Nuxt. Currently it's just a very simple wrapper around vue-chartjs which I would recommend using instead for the time being. Soon, though, I want to remove that dependency and the dependency on Chart.js; I want to reproduce the charts already supported and extend this library even further with D3.js.