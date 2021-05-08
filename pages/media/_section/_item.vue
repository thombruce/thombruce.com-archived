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
      VCountdown(
        :date='item.releasedAt'
        :leadingZeroes='{ hours: true, minutes: true, seconds: true }'
        daysSeparator='&nbsp;days '
        hoursSeparator=':'
        minutesSeparator=':'
        secondsSeparator=''
      )
</template>

<script>
import VCountdown from 'timepiece.vue/src/components/Countdown/VCountdown.vue'

export default {
  components: {
    VCountdown
  },
  async asyncData({ $content, params }) {
    const item = await $content('media', params.section, params.item).fetch()

    return { item }
  }
}
</script>
