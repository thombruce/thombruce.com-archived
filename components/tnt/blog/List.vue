<template lang='pug'>
div
  template(v-if='articles')
    article(v-for='article in articles')
      header
        h2
          a(:href='article.url' target='_blank') {{ article.title }}
          |
          |
          span.badge {{ site(article.url) | titleize }}
        time(:datetime='article.date_modified') {{ article.date_modified | toLocaleString }}
      div(v-if='article.summary')
        p {{ article.summary }}
  div.text-center(v-else)
    span.text-2xl.text-secondary There's nothing to see yet.
</template>

<script>
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
        case 'ink.thombruce.com':
        case 'happy.thombruce.com':
        case 'popcorn.thombruce.com':
          return host.split('.')[0]
        default:
          return host.split('.')[0]
      }
    }
  }
}
</script>