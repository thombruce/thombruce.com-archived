<template lang='pug'>
article
  header
    VContainer
      h1 {{ project.title }}

  VContainer
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
