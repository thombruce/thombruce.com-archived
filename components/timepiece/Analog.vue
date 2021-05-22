<template lang='pug'>
.timepiece.analog(:style='`width:${size};padding-bottom:${size};`')
  .hours-container(:style="'-ms-transform:rotateZ(' + hoursAngle + 'deg);-webkit-transform:rotateZ(' + hoursAngle + 'deg);transform:rotateZ(' + hoursAngle + 'deg);'")
    .hours
  .minutes-container(:style="'-ms-transform:rotateZ(' + minutesAngle + 'deg);-webkit-transform:rotateZ(' + minutesAngle + 'deg);transform:rotateZ(' + minutesAngle + 'deg);'")
    .minutes
  .seconds-container(:style="'-ms-transform:rotateZ(' + secondsAngle + 'deg);-webkit-transform:rotateZ(' + secondsAngle + 'deg);transform:rotateZ(' + secondsAngle + 'deg);'")
    .seconds
  .period
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '10em'
    }
  },

  data () {
    return {
      hoursAngle: '',
      minutesAngle: '',
      secondsAngle: ''
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
      self.hoursAngle = (hours * 30) + (minutes / 2)
      self.minutesAngle = minutes * 6
      self.secondsAngle = seconds * 6
    }, 1000)
  }
}
</script>

<style lang='postcss'>
.timepiece.analog {
  /*border:solid 1em;*/
  /*border-color:#222;*/
  border-radius: 50%;
  background-color: #eee;
  background-size: 88%;
  position: relative;
  height:0;
  -ms-box-sizing:content-box;
  -webkit-box-sizing:content-box;
  box-sizing:content-box;
}

.timepiece.analog:after {
  background: #d00;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
  z-index: 10;
}

.timepiece.analog {
  & .minutes-container, & .hours-container, & .seconds-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index:5;
  }
}

.timepiece.analog .hours {
  background: #333;
  height: 25%; /**/
  left: 48.75%;
  position: absolute;
  top: 25%; /**/
  -ms-transform-origin: 50% 100%;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  width: 2.5%;
}

.timepiece.analog .minutes {
  background: #333;
  height: 40%; /**/
  left: 49%;
  position: absolute;
  top: 10%; /**/
  -ms-transform-origin: 50% 100%;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  width: 2%;
}

.timepiece.analog .seconds {
  background: #d00;
  height: 45%; /**/
  left: 49.5%;
  position: absolute;
  top: 14%; /**/
  -ms-transform-origin: 50% 80%;
  -webkit-transform-origin: 50% 80%;
  transform-origin: 50% 80%;
  width: 1%;
  z-index: 8;
}

.timepiece.analog {
  /* border-color:#222; */
  background-color:#eee;
}
.timepiece.analog:after, .timepiece.analog .seconds {
  background: #d00;
}
.timepiece.analog .hours, .timepiece.analog .minutes {
  background: #333;
}
</style>