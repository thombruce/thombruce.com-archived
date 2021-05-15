<template lang='pug'>
article
  div
    article(v-for='article in articles')
      header
        h1
          NuxtLink(:to='article') {{ article.title }}
        time(:datetime='article.createdAt') {{ article.createdAt }}
      div
        p {{ article.description }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()

    return { articles }
  }
}
</script>
