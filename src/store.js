import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedSource: null
  },
  getters: {
    getSelectedSource: state => {
      return state.selectedSource
    }
  },
  actions: {

  },
  mutations: {
    setSelectedSource (state, selectedSource) {
      state.selectedSource = selectedSource
    }
  }
})

export default store
