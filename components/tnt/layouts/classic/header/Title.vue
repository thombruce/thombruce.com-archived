<template lang='pug'>
div
  NuxtLink(to='/')
    NuxtImg(src='/thombruce_dark.png' width='350px')
    // NuxtImg(v-else src='/thombruce.png' width='350px')
</template>

<style lang='postcss' scoped>
div {
  @apply m-auto flex justify-center;
}
</style>
