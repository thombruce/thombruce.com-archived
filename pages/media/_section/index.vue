<template lang='pug'>
VContainer
  VRow
    VCol(v-for='item in media' :key='item.slug' cols='12' sm='6' md='4')
      article
        VCard(:to='item')
          VImg.white--text.align-end(
            v-if='item.image'
            :src='$img(item.image, { width: `600px` })'
            gradient='to bottom left, rgba(33,33,33,.2), rgba(11,11,11,.6)'
          )
            VCardTitle
              span {{ item.title }}

            VCardText
              time.info--text(:datetime='item.releasedAt') {{ item.releasedAt }}
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

<style lang='scss'>
.v-card {
  .v-image {
    width:100%;
    height:200px;
    object-fit:cover;

    .v-card__title {
      span {
        white-space:nowrap;
        overflow:hidden;
      }
    }
  }
}
</style>
