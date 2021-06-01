import Vue from 'vue'

export const state = () => ({
  list: {}
})

export const getters = {
  all: (state, _getters, _rootState, _rootGetters) => {
    const guestbook = Object.values(state.list)

    return guestbook.sort((a, b) => {
      return b.createdAt - a.createdAt // Descending sort
    })
  }
}

export const actions = {
  async all({ commit, getters }) {
    const guests = await this.$content('_data', 'guestbook')
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})

    commit('push', { guests })

    return getters.all
  }
}

export const mutations = {
  push (state, { guests }) {
    guests = guests.reduce((obj, item) => {
      obj[item.createdAt] = item
      return obj
    }, {})

    Vue.set(state, 'list', { ...state.list, ...guests })
  }
}
