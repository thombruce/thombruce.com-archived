export const state = () => ({
  list: {}
})

export const getters = {}

export const actions = {
  async where ({ commit }, paths) {
    const content = await this.$content('', { deep: true })
      .where({ path: { $in: paths } })
      .fetch()

    // Convert Array to Object
    const items = content.reduce((obj, item) => {
      obj[item.path] = item
      return obj
    }, {})

    commit('push', items)
  }
}

export const mutations = {
  push (state, items) {
    state.list = { ...state.list, ...items }
  },

  insert (state, payload) {
    Vue.set(state.list, payload.id, payload)
  }
}
