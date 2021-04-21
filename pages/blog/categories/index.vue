<template lang='pug'>
div
  article(v-for='category in categories')
    h1
      NuxtLink(:to='{ name: `blog-categories-slug`, params: { slug: category.slug } }') {{ category.title }}
</template>

<script>
export default {
  async asyncData({ store }) {
    const categories = await store.dispatch('blog/categories/all')

    return { categories }
  }
}
</script>
