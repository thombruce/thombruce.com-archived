<template lang='pug'>
VApp(dark)
  VNavigationDrawer(v-model='drawer' clipped fixed app)
    VList
      VListItem(v-for='(item, i) in items' :key='i' :to='item.to' router)
        VListItemAction
          VIcon {{ item.icon }}
        VListItemContent
          VListItemTitle(v-text='item.title')

  VAppBar(clipped-left fixed app)
    VAppBarNavIcon(@click.stop='drawer = !drawer')
    VToolbarTitle(v-text='title')

  VMain
    VContainer
      nuxt
    VFooter
      VContainer.text-center
        span &copy; 1989 - {{ new Date().getFullYear() }}
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-post',
          title: 'Blog',
          to: '/blog'
        }
      ],
      title: 'Thom Bruce'
    }
  }
}
</script>
