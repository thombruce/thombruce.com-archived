<template lang='pug'>
div
  template(v-for='item in stars')
    fa(v-if='item' :icon='[`fas`, item]')
</template>

<script>
export default {
  props: ['score'],
  computed: {
    stars () {
      // Round to nearest half
      let rating = Math.round(this.score * 2) / 2;
      let output = [];

      // Append all the filled whole stars
      for (var i = rating; i >= 1; i--)
        output.push('star')

      // If there is a half a star, append it
      if (i == .5) output.push('star-half')

      // Fill the empty stars
      for (let i = (5 - rating); i >= 1; i--)
        output.push(null)

      return output
    }
  }
}
</script>
