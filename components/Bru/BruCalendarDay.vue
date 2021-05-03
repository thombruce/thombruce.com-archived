<template lang='pug'>
VCard.text-center.fill-height
  VCardTitle.justify-center.red
    span.text-h3 {{ days[dateVal.getDay()] }}
  VCardText
    span.d-block.text-h1 {{ dateVal.getDate() }}
    span.d-block.text-h3 {{ months[dateVal.getMonth()] }}
</template>

<script>
export default {
  props: [
    'date'
  ],
  data () {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dateVal = this.date ? new Date(this.date) : new Date()

    return {
      days,
      months,
      dateVal
    }
  }
}
</script>
