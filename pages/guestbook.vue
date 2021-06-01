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
      return this.$store.getters['staticman/all'](`/_data/guestbook`) // This new value is the same as comment.dir
    }
  },
  async fetch () {
    await this.$store.dispatch('staticman/all', { path: `/_data/guestbook` }) // This new value is the same as comment.dir
  }
}
</script>
