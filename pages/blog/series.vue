<template lang='pug'>
article
  header
    h1 Series
  div
    article(v-for='term in terms')
      header
        h2
          NuxtLink(:to='{ name: `blog-taxonomy-term`, params: { taxonomy, term: term.slug } }') {{ term.title }}
</template>

<script>
export default {
  async asyncData({ store }) {
    const taxonomy = 'series'

    const terms = await store.dispatch('blog/taxonomies/all', { taxonomy })

    return { taxonomy, terms }
  }
}
</script>
