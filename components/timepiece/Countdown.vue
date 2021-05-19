<template lang='pug'>
span.timepiece.countdown(v-html='displayText')
</template>

<script>
export default {
  props: {
    // date='2050-03-14'
    date: {
      required: true
    },
    // expiredText='Expired'
    expiredText: {
      type: String
    },
    // :leadingZeroes='true'
    // :leadingZeroes='{ hours: true, minutes: true, seconds: true }'
    leadingZeroes: {
      type: [Boolean, Object],
      default: false
    },
    daysSeparator: {
      type: String,
      default: '&nbsp;days '
    },
    hoursSeparator: {
      type: String,
      default: '&nbsp;hours '
    },
    minutesSeparator: {
      type: String,
      default: '&nbsp;minutes '
    },
    secondsSeparator: {
      type: String,
      default: '&nbsp;seconds'
    }
  },

  data () {
    return {
      displayText: ''
    }
  },

  created () {
    var self = this
    // Set the date we're counting down to
    var countDownDate = new Date(self.date).getTime()
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Set displayText to hold the result
      self.displayText = days + self.daysSeparator +
        (((self.leadingZeroes === true || self.leadingZeroes['hours']) && hours < 10) ? '0' : '') + hours + self.hoursSeparator +
        (((self.leadingZeroes === true || self.leadingZeroes['minutes']) && minutes < 10) ? '0' : '') + minutes + self.minutesSeparator +
        (((self.leadingZeroes === true || self.leadingZeroes['seconds']) && seconds < 10) ? '0' : '') + seconds + self.secondsSeparator

      // Text to show if the countdown is finished
      if (distance < 0) {
        clearInterval(x)
        self.displayText = self.expiredText || ('0' + self.daysSeparator +
          ((self.leadingZeroes === true || self.leadingZeroes['hours']) ? '0' : '') + '0' + self.hoursSeparator +
          ((self.leadingZeroes === true || self.leadingZeroes['minutes']) ? '0' : '') + '0' + self.minutesSeparator +
          ((self.leadingZeroes === true || self.leadingZeroes['seconds']) ? '0' : '') + '0' + self.secondsSeparator)
      }
    }, 1000)
  }
}
</script>
