import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn:false
  },
  getters: {
    isLoggedIn(state){
      return state.loggedIn
    }
  },
  mutations: {
    SET_LOGGED_IN(state,payload){
      state.loggedIn=payload
    }
  },
  actions: {
  },
  modules: {
  }
})