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
  async asyncData({ $content }) {
    const guestbook = await $content('_data', 'guestbook')
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})

    return { guestbook }
  }
}
</script>
