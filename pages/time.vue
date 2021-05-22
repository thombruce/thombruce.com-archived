<template lang='pug'>
article
  div
    TimepieceCountdown(:date='oneYear')
  div
    TimepieceDigital
  div
    TimepieceTimer(date='1989-03-14')
  div
    TimepieceAnalog
</template>

<script>
export default {
  computed: {
    oneYear () {
      const today = new Date()
      return today.setFullYear(today.getFullYear() + 1)
    }
  }
}
</script>
