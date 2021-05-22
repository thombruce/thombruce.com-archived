<template lang='pug'>
span.timepiece.digital
  span.hours {{ displayHours }}
  span.hoursSeparator :
  span.minutes {{ displayMinutes }}
  span.minutesSeparator :
  span.seconds {{ displaySeconds }}
  span.period
</template>

<script>
export default {
  props: {
    // 12 vs 24 hour
    // leading zero/space for 12 hours clock
    // AM/PM separator (i.e. full-stop: A.M.) - Maybe this would be better as two options for amText and pmText, so that
    //    one could do things like "1:00:00 in the morning" instead of 1:00:00am
    //    That's a big maybe. In any case, I should surely separate out the resultant text into more than just
    //    displayText. They should be different values, different elements, so that they can be styled differently.
  },

  data () {
    return {
      displayHours: '',
      displayMinutes: '',
      displaySeconds: ''
    }
  },

  created () {
    var self = this
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date()

      // Time calculations for hours, minutes and seconds
      var hours = now.getHours()
      var minutes = now.getMinutes()
      var seconds = now.getSeconds()

      // Set displayText to hold the result
      self.displayHours = (hours < 10 ? '0' : '') + hours
      self.displayMinutes = (minutes < 10 ? '0' : '') + minutes
      self.displaySeconds = (seconds < 10 ? '0' : '') + seconds
    }, 1000)
  }
}
</script>
