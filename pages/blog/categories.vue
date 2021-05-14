<template lang='pug'>
div
  article
    header
      h1 Categories
    div
      article(v-for='term in terms')
        header
          h2
            NuxtLink(:to='{ name: `blog-taxonomy-term`, params: { taxonomy, term: term.slug } }') {{ term.title }}
</template>

<script>
export default {
  async asyncData({ store }) {
    const taxonomy = 'categories'

    const terms = await store.dispatch('blog/taxonomies/all', { taxonomy })

    return { taxonomy, terms }
  }
}
</script>
