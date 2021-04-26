<template lang='pug'>
div
  article(v-for='screenplay in screenplays')
    div(v-if='!screenplay.collection')
      h1
        NuxtLink(:to='screenplay') {{ screenplay.title }}
      time.info--text(v-if='screenplay.date' :datetime='screenplay.date') {{ screenplay.date }}
    div(v-else)
      h1
        NuxtLink(:to='`screenplays/${screenplay.slug}`') {{ screenplay.slug | titleize }}
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
