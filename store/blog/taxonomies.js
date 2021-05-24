export const actions = {
  async all({}, { taxonomy }) {
    const articles = await this.$content('blog').fetch()

    let terms = articles.map(article => article[taxonomy])

    terms = _(terms).flatten()
                    .compact()
                    .uniq()
                    .value()

    terms = terms.map(function(term) {
      return { slug: _.kebabCase(term), title: term }
    })

    return terms
  },

  async find({ dispatch }, { taxonomy, slug }) {
    const terms = await dispatch('all', { taxonomy })

    const term = terms.find(term => term.slug === slug)

    return term
  }
}
