<template lang='pug'>
VContainer
  article(v-for='project in projects')
    h1
      NuxtLink(:to='project') {{ project.title }}
    p {{ project.description }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('code')
      .fetch()

    return { projects }
  }
}
</script>
