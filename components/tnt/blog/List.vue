<template lang='pug'>
div
  template(v-if='articles')
    article(v-for='article in articles')
      header
        h2
          a(:href='article.url' target='_blank') {{ article.title }}
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
  ]
}
</script>