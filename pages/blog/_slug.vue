<template lang='pug'>
article
  header
    h1 {{ article.title }}
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
