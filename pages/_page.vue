<template lang='pug'>
article
  header
    VParallax(v-if='page.image' :src='$img(page.image, { width: `100vw` })')

    VContainer
      h1 {{ page.title }}

      time.info--text(:datetime='page.createdAt') {{ page.createdAt }}

  VContainer
    NuxtContent(:document='page')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.page).fetch()

    return { page }
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
