<template lang='pug'>
article
  div
    MediaCard(v-for='item in media' :key='item.slug' :item='item')
</template>

<script>
export default {
  async asyncData({ $content }) {
    const media = await $content('media', { deep: true })
      .sortBy('releasedAt', 'desc')
      .fetch()

    const sections = [...new Set(media.map(item => item.dir))]

    return { media, sections }
  }
}
</script>
