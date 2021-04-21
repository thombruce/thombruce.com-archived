export const actions = {
  async all({ dispatch }) {
    const series = await dispatch('blog/taxonomies/all', { taxonomy: 'series' }, { root: true })

    return series
  },

  async find({ dispatch }, slug) {
    const series = await dispatch('blog/taxonomies/find', { taxonomy: 'series', slug: slug }, { root: true })

    return series
  }
}
