<template lang='pug'>
VContainer
  VRow
    VCol(v-for='item in media' :key='item.slug' cols='12' sm='6' md='4')
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
