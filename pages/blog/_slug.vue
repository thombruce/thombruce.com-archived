<template lang='pug'>
article
  h1 {{ article.title }}
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
