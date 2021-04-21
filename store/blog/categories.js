export const actions = {
  async all({ dispatch }) {
    const categories = await dispatch('blog/taxonomies/all', { taxonomy: 'categories' }, { root: true })

    return categories
  },

  async find({ dispatch }, slug) {
    const category = await dispatch('blog/taxonomies/find', { taxonomy: 'categories', slug: slug }, { root: true })

    return category
  }
}
