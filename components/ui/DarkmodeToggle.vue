<template lang="pug">
button(@click="toggleDarkMode()")
  template(v-if='$colorMode.value === `dark`')
    fa(:icon='[`fas`, `moon`]')
    span.hidden.pl-1(class='md:inline') Dark
  template(v-else-if='$colorMode.preference === `light`')
    fa(:icon='[`fas`, `sun`]')
    span.hidden.pl-1(class='md:inline') Light
</template>

<script>
export default {
  methods: {
    toggleDarkMode () {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    }
  }
}
</script>
