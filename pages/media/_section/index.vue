<template lang='pug'>
article
  div
    MediaCard(v-for='item in media' :key='item.slug' :item='item')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const media = await $content('media', params.section, { deep: true })
      .sortBy('releasedAt', 'desc')
      .fetch()

    return { media }
  }
}
</script>
