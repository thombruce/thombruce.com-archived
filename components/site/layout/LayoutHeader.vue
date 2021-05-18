<template lang='pug'>
header.justify-center
  span
    NuxtLink(to='/') {{ title }}
  nav
    ul
      li(v-for='(item, i) in items' :key='i')
        NuxtLink(:to='item.to')
          fa.inline(:icon='[`fas`, item.icon]' class='md:hidden')
          span.hidden(class='md:inline') {{ item.title }}
  UIDarkmodeToggle
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'pen-alt',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'code',
          title: 'Code',
          to: '/code'
        },
        {
          icon: 'film',
          title: 'Screenplays',
          to: '/screenplays'
        },
        {
          icon: 'book',
          title: 'Guestbook',
          to: '/guestbook'
        },
        {
          icon: 'info',
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