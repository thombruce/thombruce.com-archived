<template lang='pug'>
header.justify-center
  span
    NuxtLink(to='/') {{ title }}
  nav
    ul
      li(v-for='(item, i) in items' :key='i')
        NuxtLink(:to='item.to')
          fa(:icon='[`fas`, item.icon]')
          span.hidden(class='md:inline md:pl-1') {{ item.title }}
  TntUIDarkmodeToggle
</template>

<script>
export default {
  data () {
    return {
      items: [
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
    @apply block font-bold pr-3 md:pr-4;
  }
  & > nav {
    & ul {
      @apply flex;
      & li a {
        @apply block px-3 md:px-4;
      }
    }
  }
  & > button, & > a, & > span:not(:first-of-type) {
    @apply block px-4;
  }
}
</style>