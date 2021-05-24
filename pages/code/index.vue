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
  async asyncData({ $content }) {
    const projects = await $content('code', { deep: true })
      .fetch()

    // We ensure that links to sections exist somewhere on the page, even if hidden,
    // so that section pages are output by Nuxt Generate.
    // TODO: Consider similar logic for taxonomies - a bit more complex.
    //       Perhaps they would be linked to backwards from the posts that
    //       list them.
    const sections = [...new Set(projects.map(project => project.dir))]

    return { projects, sections }
  }
}
</script>
