export const actions = {
  async all({ dispatch }) {
    const tags = await dispatch('blog/taxonomies/all', { taxonomy: 'tags' }, { root: true })

    return tags
  },

  async find({ dispatch }, slug) {
    const tag = await dispatch('blog/taxonomies/find', { taxonomy: 'tags', slug: slug }, { root: true })

    return tag
  }
}
