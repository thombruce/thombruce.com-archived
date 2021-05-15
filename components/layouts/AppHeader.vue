<template lang='pug'>
header.justify-center
  span
    NuxtLink(to='/') {{ title }}
  nav
    ul
      li(v-for='(item, i) in items' :key='i')
        NuxtLink(:to='item.to') {{ item.title }}
  VDarkmodeToggle
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

<style lang='postcss' scoped>
header {
  @apply flex py-5 px-4;
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
  & > button, & > a, & > span:not(:first-of-type) {
    @apply block px-4;
  }
}
</style>