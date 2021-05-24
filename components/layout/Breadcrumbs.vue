<template lang='pug'>
ol.mb-3
  li.inline
    NuxtLink(to='/')
      fa(:icon='[`fas`, `home`]')
  li.inline(v-for='crumb in crumbs')
    span.mx-2 /
    NuxtLink(:to='crumb.path') {{ crumb.title }}
</template>

<script>
// Based on https://dev.to/lukeocodes/breadcrumbs-in-nuxt-5f2m
export default {
  computed: {
    crumbs () {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: _.startCase(param),
            ...match,
          })
        }
      })
      return crumbs
    }
  }
}
</script>
