export const actions = {
  async all({}) {
    const collection = await this.$content('screenplays', { deep: true })
      .sortBy('date', 'asc')
      .fetch()

    const screenplays = _.orderBy(collection.reduce((obj, screenplay) => {
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

    return screenplays
  }
}
