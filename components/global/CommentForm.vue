<template lang='pug'>
VForm(:model='comment' @submit.prevent='submit()')
  VTextField(v-model='comment.name' label='Name' required)
  VTextarea(v-model='comment.message' label='Comment' required)
  VBtn(color="primary" type="submit") Submit
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
