<template lang='pug'>
section
  header
    h2 Comments
  div
    article(v-for='comment in comments')
      header
        h3 {{ comment.name }}
        time(:datetime='comment.createdAt') {{ comment.createdAt }}
      div
        p(style='white-space: pre-wrap;') {{ comment.message }}
  footer
    CommentsForm(:path='path')
</template>

<script>
export default {
  props: [
    'path'
  ],
  computed: {
    comments () {
      return this.$store.getters['comments/all'](this.path)
    }
  },
  async fetch () {
    await this.$store.dispatch('comments/all', { path: this.path })
  }
}
</script>
