import Vue from 'vue'

export const state = () => ({
  list: {}
})

export const getters = {
  all: (state, _getters, _rootState, _rootGetters) => (path) => {
    const list = state.list[path]
    if (list) {
      return Object.values(list)
    }
  },

  asc: (_state, getters, _rootState, _rootGetters) => (path) => {
    const all = getters.all(path)
    if (all) {
      return all.sort((a, b) => {
        return a.createdAt - b.createdAt // Ascending sort
      })
    }
  },

  desc: (_state, getters, _rootState, _rootGetters) => (path) => {
    const all = getters.all(path)
    if (all) {
      return all.sort((a, b) => {
        return b.createdAt - a.createdAt // Descending sort
      })
    }
  }
}

export const actions = {
  async all({ commit, getters }, { path }) {
    const comments = await this.$content(path)
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {
        return []
      })

    commit('push', { path, comments })

    return getters.all(path)
  },

  async post({ commit, getters }, { fields, options, property }) {
    await this.$staticman.$post(property, { fields, options })
      .then((response) => {
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
