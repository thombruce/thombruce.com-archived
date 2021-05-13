<template lang='pug'>
VContainer
  article
    h1 Guestbook
    article(v-for='guest in guestbook')
      VCard.mb-3
        VCardTitle
          h2.text-h6 {{ guest.name }}
        VCardSubtitle
          time.info--text(:datetime='guest.createdAt') {{ guest.createdAt }}
        VCardText
          p {{ guest.message }}
    GuestForm
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
