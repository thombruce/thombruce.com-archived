<template lang='pug'>
div
  template(v-if='articles')
    article.card.card-side.bordered.mb-4(v-for='article in articles')
      figure
        NuxtImg(v-if='article.image' :src='article.image' width='200' height='200' style='width:200px;height:200px;object-fit:cover;')

      .card-body
        header
          h2.card-title
            a(:href='article.url' target='_blank') {{ article.title }}
            |
            |
            span.badge {{ site(article.url) }}
          time(:datetime='article.date_modified') {{ article.date_modified | toLocaleString }}
        div(v-if='article.summary')
          p {{ article.summary }}
  div.text-center(v-else)
    span.text-2xl.text-secondary There's nothing to see yet.
</template>

<script>
import { startCase } from 'lodash'

export default {
  props: [
    'articles'
  ],
  methods: {
    site (url) {
      const host = new URL(url).hostname
      switch (host) {
        case 'beer.thombruce.com':
          return 'Free as in Beer'
        case 'code.thombruce.com':
          return 'Undefined'
        case 'ordahhh.thombruce.com':
          return 'Ordahhh!'
        case 'ink.thombruce.com':
        case 'happy.thombruce.com':
        case 'popcorn.thombruce.com':
          return startCase(host.split('.')[0])
        default:
          return startCase(host.split('.')[0])
      }
    }
  }
}
</script>