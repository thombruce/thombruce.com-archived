import Vue from 'vue'

export const state = () => ({
  list: {}
})

export const getters = {
  all: (state, _getters, _rootState, _rootGetters) => {
    const list = state.list
    if (list) {
      return Object.values(list)
    }
  },

  asc: (_state, getters, _rootState, _rootGetters) => {
    const all = getters.all
    if (all) {
      return all.sort((a, b) => {
        return new Date(a.date_modified) - new Date(b.date_modified) // Ascending sort
      })
    }
  },

  desc: (_state, getters, _rootState, _rootGetters) => {
    const all = getters.all
    if (all) {
      return all.sort((a, b) => {
        return new Date(b.date_modified) - new Date(a.date_modified) // Descending sort
      })
    }
  }
}

export const actions = {
  async fetchAll ({ commit, getters }) {
    const popcorn = await this.$axios.$get('https://popcorn.thombruce.com/feed.json')
    const ink = await this.$axios.$get('https://ink.thombruce.com/feed.json')
    const happy = await this.$axios.$get('https://happy.thombruce.com/feed.json')
    const code = await this.$axios.$get('https://code.thombruce.com/feed.json')
    const ordahhh = await this.$axios.$get('https://ordahhh.thombruce.com/feed.json')
    const articles = [
      ...popcorn.items,
      ...ink.items,
      ...happy.items,
      ...code.items,
      ...ordahhh.items
    ]

    commit('push', { articles })

    return getters.desc
  }
}

export const mutations = {
  push (state, { articles }) {
    articles = articles.reduce((obj, item) => {
      obj[item.id] = item
      return obj
    }, {})

    Vue.set(state, 'list', { ...state.list, ...articles })
  }
}
