<template lang='pug'>
article
  h1 {{ category.title }}
  div
    article(v-for='article in articles')
      h2
        NuxtLink(:to='article') {{ article.title }}
      time.info--text(:datetime='article.createdAt') {{ article.createdAt }}
      p {{ article.description }}
</template>

<script>
export default {
  async asyncData({ $content, store, params }) {
    const category = await store.dispatch('blog/categories/find', params.slug)

    const articles = await $content('blog')
      .where({ categories: { $contains: category.title } })
      .sortBy('createdAt', 'desc')
      .fetch()

    return { category, articles }
  }
}
</script>
