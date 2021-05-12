<template lang='pug'>
VForm(:model='comment.fields' @submit.prevent='submit()')
  VTextField(v-model='comment.fields.name' label='Name' required)
  VTextarea(v-model='comment.fields.message' label='Comment' required)
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
        fields: {
          name: '',
          message: ''
        },
        options: {
          path: this.path
        }
      }
    }
  },

  methods: {
    async submit () {
      await this.$axios.$post(
        'https://thombruce-staticman.herokuapp.com/v3/entry/gitlab/thombruce/thombruce.com/master/comments',
        comment
      )
    }
  }
}
</script>
