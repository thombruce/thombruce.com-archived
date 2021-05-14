<template lang='pug'>
article
  header
    NuxtImg(v-if='item.image' :src='item.image' width='100vw')
    h1 {{ item.title }}
    time(:datetime='item.releasedAt') {{ item.releasedAt }}

  div
    NuxtContent(:document='item')
    div
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
