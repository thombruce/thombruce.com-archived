<template lang='pug'>
NuxtScreenplay(:screenplay='screenplay')
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const screenplay = await $content('screenplays', params.series, params.slug).fetch()

    return { screenplay }
  }
}
</script>
