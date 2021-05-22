<template lang='pug'>
article(:class='document ? `screenplay` : ``')
  FountainScreenplay(v-if='document' :screenplay='document' title)

  div(v-else)
    article(v-for='episode in screenplay' :key='episode.slug')
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
