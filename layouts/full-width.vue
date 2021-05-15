<template lang='pug'>
#appContainer
  AppHeader

  main
    Nuxt

  AppFooter
</template>

<script>
import AppHeader from '~/components/layouts/AppHeader'
import AppFooter from '~/components/layouts/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
