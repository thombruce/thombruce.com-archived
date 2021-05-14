<template lang='pug'>
div
  header.flex.bg-red-50
    span.block.font-bold.bg-red-200
      NuxtLink(to='/broken') {{ title }}
    nav.bg-red-100
      ul.flex
        li(v-for='(item, i) in items' :key='i')
          NuxtLink.block.px-4(:to='item.to') {{ item.title }}
    VDarkmodeToggle

  main.bg-yellow-50(class='dark:bg-gray-800 dark:text-white')
    Nuxt

  footer.bg-blue-50
    span &copy; 1989 - {{ new Date().getFullYear() }}
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          // icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          // icon: 'mdi-post',
          title: 'Blog',
          to: '/blog'
        },
        {
          // icon: 'mdi-code-tags',
          title: 'Code',
          to: '/code'
        },
        {
          // icon: 'mdi-movie',
          title: 'Screenplays',
          to: '/screenplays'
        },
        {
          // icon: 'mdi-book-open-variant',
          title: 'Guestbook',
          to: '/guestbook'
        },
        {
          // icon: 'mdi-information',
          title: 'About',
          to: '/about'
        }
      ],
      title: 'Thom Bruce'
    }
  }
}
</script>
