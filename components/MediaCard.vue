<template lang='pug'>
article.my-2.rounded.shadow(class='bg-gray-100 dark:bg-gray-900')
  header.flex
    NuxtImg(v-if='cardItem.image' :src='cardItem.image' sizes='sm:100px' style='width:100px;')
    div.px-4.py-3
      h2
        NuxtLink(:to='cardItem') {{ cardItem.title }}
      time.info--text(:datetime='cardItem.releasedAt') {{ cardItem.releasedAt }}
      UiStarRating(:score='cardItem.score / 2')
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
      this.cardItem = this.$store.state.content.list[this.item] || await this.$content(this.item).fetch()
    } else {
      this.cardItem = this.item
    }
  }
}
</script>
