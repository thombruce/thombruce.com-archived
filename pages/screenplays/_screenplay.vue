<template lang='pug'>
VContainer
  NuxtScreenplay(v-if='document' :screenplay='document')

  VRow(v-else)
    VCol(v-for='episode in screenplay' :key='episode.slug' cols='12' sm='6' md='4')
      article
        VCard(:to='episode')
          VCardTitle {{ episode.title }}
          VCardText
            time.info--text(v-if='episode.date' :datetime='episode.date') {{ episode.date }}
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
