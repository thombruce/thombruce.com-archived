<template lang='pug'>
header
  div
    NuxtLink(to='/')
      NuxtImg(src='/thombruce_dark.png' width='350px')
      // NuxtImg(v-else src='/thombruce.png' width='350px')
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
      ],
      title: 'Thom Bruce'
    }
  }
}
</script>

<style lang='postcss' scoped>
header {
  @apply flex flex-col justify-center py-5 px-4;
  & > div:first-of-type {
    @apply m-auto;
  }
  & > div {
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
}
</style>