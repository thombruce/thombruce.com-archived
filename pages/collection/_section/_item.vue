<template lang='pug'>
article
  header
    VParallax(:src='$img(item.image, { width: `100vw` })')

    h1 {{ item.title }}

    time.info--text(:datetime='item.releasedAt') {{ item.releasedAt }}

  NuxtContent(:document='item')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const item = await $content('collection', params.section, params.item).fetch()

    return { item }
  }
}
</script>
