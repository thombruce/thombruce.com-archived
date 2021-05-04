<template lang='pug'>
VContainer
  article
    h1 {{ term.title }}
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
    const taxonomy = params.taxonomy

    const term = await store.dispatch('blog/taxonomies/find', { taxonomy, slug: params.term })

    const articles = await $content('blog')
      .where({ [taxonomy]: { $contains: term.title } })
      .sortBy('createdAt', 'desc')
      .fetch()

    return { taxonomy, term, articles }
  }
}
</script>
