<template lang='pug'>
article
  header
    VParallax(v-if='article.image' :src='$img(article.image, { width: `100vw` })')

    VContainer
      h1 {{ article.title }}

      time.info--text(:datetime='article.createdAt') {{ article.createdAt }}

  VContainer
    NuxtContent(:document='article')

  VContainer
    CommentForm(:path='article.path')
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
  ul.contains-task-list {
    padding-left: 5px;
    li.task-list-item {
      list-style-type: none;
    }
  }
  pre code {
    all: unset; // Vuetify reset
    color: #eee; // Vuetify reset
    .blockquote {
      padding: 0; // Vuetify reset
    }
  }
}
</style>
