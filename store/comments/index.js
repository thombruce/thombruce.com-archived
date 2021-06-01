import Vue from 'vue'

export const state = () => ({
  list: {}
})

export const getters = {
  all: (state, _getters, _rootState, _rootGetters) => (path) => {
    const comments = Object.values(state.list[path])

    return comments.sort((a, b) => {
      return a.createdAt - b.createdAt // Ascending sort
    })
  }
}

export const actions = {
  async all({ commit, getters }, { path }) {
    const comments = await this.$content('_data', 'comments', path)
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {})

    commit('push', { path, comments })

    return getters.all(path)
  }
}

export const mutations = {
  push (state, { path, comments }) {
    comments = comments.reduce((obj, item) => {
      obj[item.createdAt] = item
      return obj
    }, {})

    Vue.set(state.list, path, { ...state.list[path], ...comments })
  }
}
