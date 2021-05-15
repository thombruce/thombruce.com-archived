<template lang='pug'>
footer
  .copyright &copy; Thom Bruce 1989 - {{ new Date().getFullYear() }}
</template>

<script>
export default {}
</script>

<style lang='postcss' scoped>
footer {
  & .copyright {
    @apply py-3 text-center text-sm text-gray-400 dark:text-gray-500;
  }
}
</style>
