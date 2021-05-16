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
    CommentForm(:path='path')
</template>

<script>
export default {
  props: [
    'path'
  ],
  data () {
    return {
      comments: null
    }
  },
  async fetch () {
    this.comments = await this.$content('_data', 'comments', this.path)
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {})
  }
}
</script>
