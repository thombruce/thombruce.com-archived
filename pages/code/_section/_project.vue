<template lang='pug'>
article
  header.text-center
    h1 {{ project.title }}
    span.text-blue-400(v-if='project.startedAt')
      time(:datetime='project.startedAt') {{ project.startedAt }}
      template(v-if='project.endedAt')
        |
        | -
        |
        time(:datetime='project.endedAt') {{ project.endedAt }}

  ArticleContent(:article='project')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('code', params.section, params.project).fetch()

    return { project }
  }
}
</script>
