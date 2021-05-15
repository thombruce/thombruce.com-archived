<template lang='pug'>
article
  div
    article(v-for='project in projects')
      header
        h1
          NuxtLink(:to='project') {{ project.title }}
      div
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
