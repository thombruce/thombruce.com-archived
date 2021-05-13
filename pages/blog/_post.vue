<template lang='pug'>
article
  header
    VParallax(v-if='article.image' :src='$img(article.image, { width: `100vw` })')

    VContainer
      h1 {{ article.title }}

      time.info--text(:datetime='article.createdAt') {{ article.createdAt }}

  VContainer
    NuxtContent(:document='article')
    CommentSection(:path='article.path')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.post).fetch()

    return { article }
  }
}
</script>
