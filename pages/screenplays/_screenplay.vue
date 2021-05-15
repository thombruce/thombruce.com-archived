<template lang='pug'>
article(:class='document ? `screenplay` : ``')
  template(v-if='document')
    header.title-page(v-html="document.html.title_page")
    .script(v-html="document.html.script")

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

<style lang='postcss'>
@import '~/assets/css/screenplay';
</style>
