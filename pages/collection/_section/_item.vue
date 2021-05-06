<template lang='pug'>
article
  header
    VParallax(v-if='item.image' :src='$img(item.image, { width: `100vw` })')

    VContainer
      h1 {{ item.title }}

      time.info--text(:datetime='item.releasedAt') {{ item.releasedAt }}

  VContainer
    NuxtContent(:document='item')
    .text-h1.text-center
      TimepieceCountdown(
        :date='item.releasedAt'
        :leadingZeroes='{ hours: true, minutes: true, seconds: true }'
        daysSeparator='&nbsp;days '
        hoursSeparator=':'
        minutesSeparator=':'
        secondsSeparator=''
      )
</template>

<script>
import TimepieceCountdown from 'vue-timepiece/src/components/TimepieceCountdown/TimepieceCountdown.vue'

export default {
  components: {
    TimepieceCountdown
  },
  async asyncData({ $content, params }) {
    const item = await $content('collection', params.section, params.item).fetch()

    return { item }
  }
}
</script>
