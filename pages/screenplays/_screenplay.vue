<template lang='pug'>
div
  NuxtScreenplay(v-if='document' :screenplay='document')

  div(v-else v-for='episode in screenplay' :key='episode.slug')
    article
      header
        h2
          NuxtLink(:to='episode') {{ episode.title }}
        time(v-if='episode.date' :datetime='episode.date') {{ episode.date }}
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const screenplay = await $content('screenplays', params.screenplay)
      .sortBy('date', 'asc')
      .fetch()

    let document = null
    if (!Array.isArray(screenplay)) document = await $content(screenplay.document).fetch()

    return { screenplay, document }
  }
}
</script>
