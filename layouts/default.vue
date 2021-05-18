<template lang='pug'>
#appContainer
  LayoutHeader

  main.container.mx-auto.px-5
    Nuxt

  LayoutFooter
</template>

<script>
import LayoutHeader from '~/components/site/layout/LayoutHeader'
import LayoutFooter from '~/components/site/layout/LayoutFooter'

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>
