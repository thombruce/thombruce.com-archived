<template lang='pug'>
form(v-model='guest' @submit.prevent='submit()')
  h3 Say Hello

  TntFormInput(id='guestbookFormName' label='Name' v-model='guest.name')

  TntFormTextarea(id='guestbookFormMessage' label='Message' v-model='guest.message')

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
      },
      options: {
        path: `/_data/guestbook`
      }
    }
  },

  methods: {
    async submit () {
      await this.$store.dispatch('staticman/post', { fields: this.guest, options: this.options, property: 'guestbook' })
        .then(() => {
          this.guest = { name: '', message: '' }
        })
    }
  }
}
</script>
