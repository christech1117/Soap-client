import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations.js'
// import actions from './actions.js'
// import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    decrement (context) {
      context.commit('decrement')
    }
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
})
  // state,
  // getters,
  // actions,
  // mutations,
