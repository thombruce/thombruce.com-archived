<template lang='pug'>
form(v-model='guest' @submit.prevent='submit()')
  h3 Say Hello

  UiInput(id='guestbookFormName' label='Name' v-model='guest.name')

  UiTextarea(id='guestbookFormMessage' label='Message' v-model='guest.message')

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
        'https://thombruce-staticman.herokuapp.com/v3/entry/github/thombruce/thombruce.com/main/guestbook',
        { fields: this.guest, options: { path: 'guestbook' } }
      ).then((response) => {
        this.$store.commit('guestbook/push', { guests: [response.fields] })
        this.guest = { name: '', message: '' }
      })
    }
  }
}
</script>
