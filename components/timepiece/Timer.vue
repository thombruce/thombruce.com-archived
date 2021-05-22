<template lang='pug'>
span.timepiece.timer
  span.days {{ displayDays }}
  span.daysSeparator(v-if='daysSeparator' v-html='daysSeparator')
  span.hours {{ displayHours }}
  span.hoursSeparator(v-if='hoursSeparator' v-html='hoursSeparator')
  span.minutes {{ displayMinutes }}
  span.minutesSeparator(v-if='minutesSeparator' v-html='minutesSeparator')
  span.seconds {{ displaySeconds }}
  span.secondsSeparator(v-if='secondsSeparator' v-html='secondsSeparator')
</template>

<script>
export default {
  props: {
    // date='1989-03-14'
    date: {
      default: () => new Date()
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
      distance: null,
      displayDays: '',
      displayHours: '',
      displayMinutes: '',
      displaySeconds: ''
    }
  },

  created () {
    var self = this
    // Set the date we're counting down to
    var timerDate = new Date(self.date).getTime()
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      self.distance = now - timerDate

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(self.distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor((self.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = Math.floor((self.distance % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((self.distance % (1000 * 60)) / 1000)

      // Set displayText to hold the result
      self.displayDays = days
      self.displayHours = (((self.leadingZeroes === true || self.leadingZeroes['hours']) && hours < 10) ? '0' : '') + hours
      self.displayMinutes = (((self.leadingZeroes === true || self.leadingZeroes['minutes']) && minutes < 10) ? '0' : '') + minutes
      self.displaySeconds = (((self.leadingZeroes === true || self.leadingZeroes['seconds']) && seconds < 10) ? '0' : '') + seconds
    }, 1000)
  }
}
</script>
