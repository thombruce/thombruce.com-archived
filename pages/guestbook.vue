<template lang='pug'>
VContainer
  article
    h1 Guestbook
    article(v-for='guest in guestbook')
      h2 {{ guest.name }}
      time.info--text(:datetime='guest.createdAt') {{ guest.createdAt }}
      p {{ guest.message }}
    GuestForm
</template>

<script>
export default {
  async asyncData({ $content }) {
    const guestbook = await $content('_date', 'guestbook')
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})

    return { guestbook }
  }
}
</script>
