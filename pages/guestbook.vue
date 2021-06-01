<template lang='pug'>
article
  header
    h1 Guestbook
  div
    article(v-for='guest in guestbook')
      header
        h2 {{ guest.name }}
        time(:datetime='guest.createdAt') {{ guest.createdAt }}
      div
        p {{ guest.message }}
  footer
    GuestbookForm
</template>

<script>
export default {
  computed: {
    guestbook () {
      return this.$store.getters['guestbook/all']
    }
  },
  async fetch () {
    await this.$store.dispatch('guestbook/all')
  }
}
</script>
