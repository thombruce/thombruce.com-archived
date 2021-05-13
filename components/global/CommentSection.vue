<template lang='pug'>
VCard
  VCardTitle
    h2.text-h5 Comments
  VCardText
    article(v-for='comment in comments')
      h3.text-h6 {{ comment.name }}
      time.info--text(:datetime='comment.createdAt') {{ comment.createdAt }}
      p(style='white-space: pre-wrap;') {{ comment.message }}
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
    this.comments = await this.$content('_data', 'comments', this.path).fetch()
  }
}
</script>
