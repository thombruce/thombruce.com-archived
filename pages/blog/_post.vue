<template lang='pug'>
article
  header
    VParallax(v-if='article.image' :src='$img(article.image, { width: `100vw` })')

    h1 {{ article.title }}

    time.info--text(:datetime='article.createdAt') {{ article.createdAt }}

  NuxtContent(:document='article')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.post).fetch()

    return { article }
  }
}
</script>

<style lang='scss'>
@import 'vuetify/src/components/VResponsive/VResponsive';

// NuxtContent
.nuxt-content {
  img {
    @extend .v-responsive;
    margin: 0 auto;
  }
  hr {
    margin-top: 25px;
    margin-bottom: 25px;
  }
}
</style>
