<template lang='pug'>
article
  div
    article.mb-5(v-for='project in projects')
      header
        h2
          NuxtLink(:to='project') {{ project.title }}
        dl.inline-block.mr-3(v-if='project.simpleIcons')
          dt.hidden Tech
          dd.inline-block.mr-2(v-for='icon in project.simpleIcons')
            SimpleIcon(:icon='icon.slug' :style='`color:${icon.color};`')
      div
        p {{ project.description }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('code', { deep: true })
      .fetch()

    return { projects }
  }
}
</script>
