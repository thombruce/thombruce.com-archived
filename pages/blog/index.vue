<template lang='pug'>
div
  article(v-for='article in articles')
    h1
      NuxtLink(:to='article') {{ article.title }}
    p {{ article.description }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()

    return { articles }
  }
}
</script>
