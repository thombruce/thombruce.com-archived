<template lang='pug'>
article
  header
    NuxtImg(v-if='cardItem.image' :src='cardItem.image' sizes='sm:100px' style='width:100px;')
    h2
      NuxtLink(:to='cardItem') {{ cardItem.title }}
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
  async fetch () {
    if (typeof this.item === 'string') {
      this.cardItem = await this.$content('media', this.item).fetch()
    } else {
      this.cardItem = this.item
    }
  }
}
</script>
