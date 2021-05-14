<template lang='pug'>
div
  div(v-for='screenplay in screenplays' :key='screenplay.slug')
    article(v-if='!screenplay.collection')
      header
        h2
          NuxtLink(:to='screenplay') {{ screenplay.title }}
        time(v-if='screenplay.date' :datetime='screenplay.date') {{ screenplay.date }}
    article(v-else)
      header
        h2
          NuxtLink(:to='`screenplays/${screenplay.slug}`') {{ screenplay.slug | titleize }}
        time(v-if='screenplay.date' :datetime='screenplay.date') {{ screenplay.date }}
</template>

<script>
export default {
  async asyncData({ store }) {
    const screenplays = await store.dispatch('screenplays/all')

    return { screenplays }
  }
}
</script>
