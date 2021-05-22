<template lang='pug'>
article
  div
    article(v-for='project in projects')
      header
        h2
          NuxtLink(:to='project') {{ project.title }}
      div
        p {{ project.description }}
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('code', params.section)
      .fetch()

    return { projects }
  }
}
</script>
