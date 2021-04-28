<template lang='pug'>
div
  NuxtScreenplay(v-if='!Array.isArray(screenplay)' :screenplay='screenplay')

  article(v-else v-for='screenplay in screenplay')
    h1
      NuxtLink(:to='screenplay') {{ screenplay.title }}
    time.info--text(v-if='screenplay.date' :datetime='screenplay.date') {{ screenplay.date }}
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const screenplay = await $content('screenplays', params.screenplay)
      .sortBy('date', 'asc')
      .fetch()

    return { screenplay }
  }
}
</script>
