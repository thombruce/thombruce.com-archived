<template lang='pug'>
header
  NuxtImg(v-if='article.image' :src='article.image' width='100vw')

  dl.inline-block.mr-3
    dt.hidden Categories
    dd(v-for='category in article.categories')
      NuxtLink(:to='`/blog/categories/${parameterize(category)}`') {{ category }}

  dl.inline-block.mr-3
    dt.hidden Series
    dd(v-for='series in article.series')
      NuxtLink(:to='`/blog/series/${parameterize(series)}`') {{ series }}

  h1 {{ article.title }}

  dl.inline-block.mr-3
    dt.hidden Tags
    dd.inline-block.mr-2(v-for='tag in article.tags')
      NuxtLink(:to='`/blog/tags/${parameterize(tag)}`') {{ tag }}

  time.block(:datetime='article.createdAt') {{ article.createdAt }}
</template>

<script>
export default {
  props: ['article'],

  methods: {
    parameterize (term) {
      return _.kebabCase(term)
    }
  }
}
</script>
