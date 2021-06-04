<template lang='pug'>
form(v-model='comment' @submit.prevent='submit()')
  h3 New Comment

  TntInput(id='commentFormName' label='Name' v-model='comment.name')

  TntTextarea(id='commentFormMessage' label='Comment' v-model='comment.message')

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
        path: `/_data/comments${this.path}`
      }
    }
  },

  methods: {
    async submit () {
      await this.$store.dispatch('staticman/post', { fields: this.comment, options: this.options, property: 'comments' })
        .then(() => {
          this.comment = { name: '', message: '' }
        })
    }
  }
}
</script>
