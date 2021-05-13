<template lang='pug'>
VApp
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
    VSpacer
    VDarkmodeToggle

  VMain
    Nuxt
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
        },
        {
          icon: 'mdi-code-tags',
          title: 'Code',
          to: '/code'
        },
        {
          icon: 'mdi-movie',
          title: 'Screenplays',
          to: '/screenplays'
        },
        {
          icon: 'mdi-book-open-variant',
          title: 'Guestbook',
          to: '/guestbook'
        },
        {
          icon: 'mdi-information',
          title: 'About',
          to: '/about'
        }
      ],
      title: 'Thom Bruce'
    }
  }
}
</script>
