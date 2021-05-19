<template lang='pug'>
article
  header
    NuxtImg(v-if='article.image' :src='article.image' width='100vw')
    h1 {{ article.title }}
    time(:datetime='article.createdAt') {{ article.createdAt }}

  div
    NuxtContent(:document='article')

  footer
    CommentsSection(:path='article.path')
</template>

<script>
export default {
  async asyncData({ $content, params, store }) {
    const article = await $content('blog', params.post).fetch()

    // Load additional data into Store
    await store.dispatch('content/where', article.data)

    return { article }
  }
}
</script>
