<template lang='pug'>
VContainer
  VRow
    VCol(v-for='screenplay in screenplays' :key='screenplay.slug' cols='12' sm='6' md='4')
      article(v-if='!screenplay.collection')
        VCard(:to='screenplay')
          VCardTitle {{ screenplay.title }}
          VCardText
            time.info--text(v-if='screenplay.date' :datetime='screenplay.date') {{ screenplay.date }}
      article(v-else)
        VCard(:to='`screenplays/${screenplay.slug}`')
          VCardTitle {{ screenplay.slug | titleize }}
          VCardText
            time.info--text(v-if='screenplay.date' :datetime='screenplay.date') {{ screenplay.date }}
</template>

<script>
export default {
  async asyncData({ store }) {
    const screenplays = await store.dispatch('screenplays/all')

    return { screenplays }
  }
}
</script>
