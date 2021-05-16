<template lang='pug'>
#appContainer
  AppHeader

  main.container.mx-auto.px-5
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
