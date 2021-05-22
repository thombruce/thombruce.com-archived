<template lang='pug'>
FountainScreenplay(:screenplay='document' title)
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
