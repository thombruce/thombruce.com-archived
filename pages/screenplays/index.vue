<template lang='pug'>
article
  div
    article(v-for='screenplay in screenplays' :key='screenplay.slug')
      template(v-if='!screenplay.collection')
        header
          h2
            NuxtLink(:to='screenplay') {{ screenplay.title }}
          time(v-if='screenplay.date' :datetime='screenplay.date') {{ screenplay.date }}
      template(v-else)
        header
          h2
            NuxtLink(:to='`screenplays/${screenplay.slug}`') {{ screenplay.slug | titleize }}
          time(v-if='screenplay.date' :datetime='screenplay.date') {{ screenplay.date }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const _collection = await $content('screenplays', { deep: true })
      .sortBy('date', 'asc')
      .fetch()

    const screenplays = _.orderBy(_collection.reduce((obj, screenplay) => {
      if (screenplay.dir === '/screenplays') {
        obj[screenplay.slug] = screenplay
      } else {
        let slug = screenplay.dir.split('/').pop()
        obj[slug] = obj[slug] || { slug, collection: [], date: null }
        obj[slug].collection.push(screenplay)
        if (screenplay.date) obj[slug].date = screenplay.date
      }
      return obj
    }, {}), 'date', 'desc')

    return { screenplays }
  }
}
</script>
