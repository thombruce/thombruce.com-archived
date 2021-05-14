<template lang='pug'>
article
  header
    h1 {{ project.title }}

  div
    NuxtContent(:document='project')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('code', params.project).fetch()

    return { project }
  }
}
</script>
