import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedSource: ''
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
