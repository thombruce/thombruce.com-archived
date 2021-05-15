<template lang='pug'>
form(v-model='comment' @submit.prevent='submit()')
  h3 New Comment

  FormInput(id='commentFormName' label='Name' v-model='comment.name')

  FormTextarea(id='commentFormMessage' label='Comment' v-model='comment.message')

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
