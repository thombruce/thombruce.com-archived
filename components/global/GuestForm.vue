<template lang='pug'>
form(:model='guest' @submit.prevent='submit()')
  h3 Say Hello

  label(for='name') Name
  input(id='name' v-model='guest.name')

  label(for='message') Message
  textarea(id='message' v-model='guest.message')

  button(type="submit") Submit
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
