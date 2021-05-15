<template lang='pug'>
article.screenplay
  header.title-page(v-html="document.html.title_page")
  .script(v-html="document.html.script")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const screenplay = await $content('screenplays', params.series, params.screenplay).fetch()

    const document = await $content(screenplay.document).fetch()

    return { screenplay, document }
  }
}
</script>

<style lang='postcss'>
@import '~/assets/css/screenplay';
</style>
