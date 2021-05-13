<template lang='pug'>
VForm(:model='guest' @submit.prevent='submit()')
  h3.text-h6 Say Hello
  VTextField(v-model='guest.name' label='Name' required)
  VTextarea(v-model='guest.message' label='Message' required)
  VBtn(color="primary" type="submit") Submit
</template>

<script>
export default {
  props: [
    'path'
  ],
  data () {
    return {
      guest: {
        name: '',
        message: ''
      }
    }
  },

  methods: {
    async submit () {
      await this.$axios.$post(
        'https://thombruce-staticman.herokuapp.com/v3/entry/gitlab/thombruce/thombruce.com/main/guestbook',
        { fields: this.guest }
      )
    }
  }
}
</script>
