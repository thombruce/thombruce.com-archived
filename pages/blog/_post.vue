<template lang='pug'>
article
  header
    NuxtImg(v-if='article.image' :src='article.image' width='100vw')
    h1 {{ article.title }}
    time(:datetime='article.createdAt') {{ article.createdAt }}

  ArticleContent(:article='article')

  footer
    CommentsSection(:path='article.path')
</template>

<script>
export default {
  async asyncData({ params, store }) {
    const article = await store.dispatch('blog/find', params.post)

    return { article }
  }
}
</script>
