<template lang='pug'>
VContainer
  VRow
    VCol(cols='12' sm='6' md='4' lg='3')
      BruCalendarDay
    VCol
      VCalendar(:weekdays='[1, 2, 3, 4, 5, 6, 0]' color='red')
</template>

<script>
export default {
  async asyncData({}) {}
}
</script>
