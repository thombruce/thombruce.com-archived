<template lang='pug'>
.navbar
  nav
    NuxtLink.btn.btn-ghost(v-for='(item, i) in items' :key='i' :to='item.to')
      span {{ item.title }}
  TntUIThemeToggle
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
          icon: 'info',
          title: 'About',
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style lang='postcss' scoped>
.navbar {
  @apply flex justify-center;
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
