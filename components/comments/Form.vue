<template lang='pug'>
form(v-model='comment' @submit.prevent='submit()')
  h3 New Comment

  UiInput(id='commentFormName' label='Name' v-model='comment.name')

  UiTextarea(id='commentFormMessage' label='Comment' v-model='comment.message')

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
        'https://thombruce-staticman.herokuapp.com/v3/entry/github/thombruce/thombruce.com/main/comments',
        { fields: this.comment, options: this.options }
      ).then(() => {
        this.$store.commit('comments/push', { path: this.path, comments: [{ ...this.comment, ...{ createdAt: new Date().toISOString() } }] })
        this.comment = { name: '', message: '' }
      })
    }
  }
}
</script>
