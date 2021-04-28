<template lang='pug'>
VRow
  VCol.col-3(v-for='item in collection')
    article
      VCard(:to='item' height='350')
        NuxtImg.v-responsive(
          v-if='item.image'
          :src='item.image'
          sizes='sm:100vw md:50vw lg:25vw'
          style='width:100%;height:200px;object-fit:cover;'
        )

        VCardTitle {{ item.title }}

        VCardText
          time.info--text(:datetime='item.releasedAt') {{ item.releasedAt }}
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const collection = await $content('collection', params.section, { deep: true })
      .sortBy('releasedAt', 'desc')
      .fetch()

    return { collection }
  }
}
</script>
