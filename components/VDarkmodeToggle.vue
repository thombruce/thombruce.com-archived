<template lang="pug">
button(@click="toggleDarkMode()")
  span(v-if="$colorMode.preference === 'system'") System
  span(v-else-if="$colorMode.preference === 'dark'") Dark
  span(v-else) Light
</template>

<script>
export default {
  methods: {
    toggleDarkMode () {
      if (this.$colorMode.preference === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    }
  }
}
</script>
