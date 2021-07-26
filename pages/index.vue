<template lang='pug'>
article
  TntBlogList(v-if='articles' :articles='articles')
  footer.hidden(v-if='pages')
    NuxtLink(v-for='page in pages' :key='page.slug' :to='page') {{ page.title }}
</template>

<script>
export default {
  async asyncData ({ $content, $axios }) {
    const pages = await $content()
      .fetch()
      .catch(() => {})

    const popcorn = await $axios.$get('https://popcorn.thombruce.com/feed.json')
    const ink = await $axios.$get('https://ink.thombruce.com/feed.json')
    const happy = await $axios.$get('https://happy.thombruce.com/feed.json')
    const undefined = await $axios.$get('https://code.thombruce.com/feed.json')
    const articles = [
      ...popcorn.items,
      ...ink.items,
      ...happy.items,
      ...undefined.items
    ].sort((a,b) => new Date(b.date_modified) - new Date(a.date_modified))
    
    return { pages, articles }
  },

  head () {
    return {
      titleTemplate: null
    }
  }
}
</script>
