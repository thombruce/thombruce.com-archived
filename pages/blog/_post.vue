<template lang='pug'>
ArticlePage(:article='article')
</template>

<script>
export default {
  async asyncData({ params, store }) {
    const article = await store.dispatch('blog/find', params.post)

    return { article }
  }
}
</script>
