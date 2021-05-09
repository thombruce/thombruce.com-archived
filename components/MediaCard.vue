<template lang='pug'>
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
    .no-image(v-else)
      VCardTitle
        span {{ item.title }}

      VCardText
        time.info--text(:datetime='item.releasedAt') {{ item.releasedAt }}
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang='scss'>
.v-card {
  > .no-image {
    height:200px;
  }

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
