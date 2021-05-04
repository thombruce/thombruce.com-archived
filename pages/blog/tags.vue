<template lang='pug'>
VContainer
  article
    h1 Tags
    div
      article(v-for='term in terms')
        h2
          NuxtLink(:to='{ name: `blog-taxonomy-term`, params: { taxonomy, term: term.slug } }') {{ term.title }}
</template>

<script>
export default {
  async asyncData({ store }) {
    const taxonomy = 'tags'

    const terms = await store.dispatch('blog/taxonomies/all', { taxonomy })

    return { taxonomy, terms }
  }
}
</script>
