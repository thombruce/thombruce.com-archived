<template lang='pug'>
#appContainer
  header
    span
      NuxtLink(to='/') {{ title }}
    nav
      ul
        li(v-for='(item, i) in items' :key='i')
          NuxtLink(:to='item.to') {{ item.title }}
    VDarkmodeToggle

  main
    Nuxt

  footer
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

<style lang='postcss'>
#appContainer {
  & > header {
    @apply flex;
    & > span:first-of-type {
      @apply block font-bold;
    }
    & > nav {
      & ul {
        @apply flex;
        & li a {
          @apply block px-4;
        }
      }
    }
  }
}
</style>