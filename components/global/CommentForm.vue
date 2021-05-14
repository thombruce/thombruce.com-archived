<template lang='pug'>
form(v-model='comment' @submit.prevent='submit()')
  h3 New Comment

  label(for='name') Name
  input(id='name' v-model='comment.name')

  label(for='message') Comment
  textarea(id='message' v-model='comment.message')

  button(type="submit") Submit
</template>

<script>
export default {
  props: [
    'path'
  ],
  data () {
    return {
      comment: {
        name: '',
        message: ''
      },
      options: {
        path: this.path
      }
    }
  },

  methods: {
    async submit () {
      await this.$axios.$post(
        'https://thombruce-staticman.herokuapp.com/v3/entry/gitlab/thombruce/thombruce.com/main/comments',
        { fields: this.comment, options: this.options }
      )
    }
  }
}
</script>
