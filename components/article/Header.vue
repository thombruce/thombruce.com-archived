<template lang='pug'>
header
  NuxtImg(v-if='article.image' :src='article.image' width='100vw')
  h1 {{ article.title }}
  time(:datetime='article.createdAt') {{ article.createdAt }}
</template>

<script>
export default {
  props: ['article']
}
</script>
