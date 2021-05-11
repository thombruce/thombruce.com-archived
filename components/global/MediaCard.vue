<template lang='pug'>
article
  VCard(nuxt :to='cardItem' :style='cardBackground')
    .d-flex.flex-no-wrap
      .ma-3(v-if='cardItem.image')
        NuxtImg(:src='cardItem.image' sizes='sm:100px' style='width:100px;')

      div
        VCardTitle
          span {{ cardItem.title }}

        VCardText
          time.info--text(:datetime='cardItem.releasedAt') {{ cardItem.releasedAt }}
</template>

<script>
export default {
  props: [
    'item'
  ],
  data () {
    return {
      cardItem: {}
    }
  },
  computed: {
    cardBackground () {
      if (this.cardItem.image) {
        return `background: linear-gradient(to bottom, rgba(${this.$vuetify.theme.dark ? '0,0,0' : '255,255,255'},.8), rgba(${this.$vuetify.theme.dark ? '0,0,0' : '255,255,255'},.5)), url(${this.$img(this.cardItem.image, { width: `100vw` })}) center center / cover no-repeat`
      }
    }
  },
  async fetch () {
    if (typeof this.item === 'string') {
      this.cardItem = await this.$content('media', this.item).fetch()
    } else {
      this.cardItem = this.item
    }
  }
}
</script>

<style lang='scss'></style>
