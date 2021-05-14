<template lang='pug'>
div
  div(v-for='item in media' :key='item.slug')
    MediaCard(:item='item')
</template>

<script>
export default {
  async asyncData({ $content }) {
    const media = await $content('media', { deep: true })
      .sortBy('releasedAt', 'desc')
      .fetch()

    return { media }
  }
}
</script>
