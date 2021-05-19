export const actions = {
  async find ({ dispatch }, slug) {
    const post = await this.$content('blog', slug)
      .fetch()

    if (post.data) await dispatch('content/where', post.data, { root: true })

    return post
  }
}
