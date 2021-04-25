<template lang='pug'>
article
  header
    h1 {{ article.title }}

    NuxtImg.v-responsive(
      v-if='article.image'
      :src='article.image'
      sizes='sm:100vw md:100vw lg:100vw'
    )

    time.info--text(:datetime='article.createdAt') {{ article.createdAt }}

  NuxtContent(:document='article')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

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
