<template lang='pug'>
VContainer
  article(v-for='article in articles')
    h1
      NuxtLink(:to='article') {{ article.title }}
    time.info--text(:datetime='article.createdAt') {{ article.createdAt }}
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
