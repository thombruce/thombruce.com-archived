<template lang='pug'>
div
  article(v-for='(val, key) in collection')
    h1(v-if='!Array.isArray(val)')
      NuxtLink(:to='val') {{ val.title }}
    h1(v-else)
      NuxtLink(:to='`screenplays/${key}`') {{ key | titleize }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const screenplays = await $content('screenplays', { deep: true })
      .fetch()

    const collection = screenplays.reduce((obj, screenplay) => {
      if (screenplay.dir === '/screenplays') {
        obj[screenplay.slug] = screenplay
      } else {
        let slug = screenplay.dir.split('/').pop()
        obj[slug] = obj[slug] || []
        obj[slug].push(screenplay)
      }
      return obj
    }, {})

    return { collection, screenplays }
  }
}
</script>
