import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workout: 
      []
    
  },
  mutations: {
    add(state, payload) {
      state.workout.push(payload);
    }
  },
  actions: {

  },
  modules: {
  }
})
