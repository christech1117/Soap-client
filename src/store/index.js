import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations.js'
// import actions from './actions.js'
// import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    add_cart (state, shopProduct) {
      state.todos.push(shopProduct)
    }
  },
  actions: {
    increment (store) {
      store.commit('increment')
    },
    decrement (store) {
      store.commit('decrement')
    },
    add_cart (store, shopProduct) {
      store.commit('add_cart', shopProduct)
    }
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
})
