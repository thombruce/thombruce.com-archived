<template lang='pug'>
article
  header
    VParallax(v-if='page.image' :src='$img(page.image, { width: `100vw` })')

    VContainer
      h1 {{ page.title }}

      time.info--text(:datetime='page.createdAt') {{ page.createdAt }}

  VContainer
    NuxtContent(:document='page')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.page).fetch()

    return { page }
  }
}
</script>
