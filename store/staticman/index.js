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
    const comments = await this.$content(path)
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {})

    commit('push', { path, comments })

    return getters.all(path)
  },

  async post({ commit, getters }, { fields, options, property }) {
    await this.$axios.$post(
      `https://thombruce-staticman.herokuapp.com/v3/entry/github/thombruce/thombruce.com/main/${property}`,
      { fields, options }
    ).then((response) => {
      commit('push', { path: options.path, comments: [response.fields] })
    })

    return getters.all(options.path)
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