import { createStore } from 'vuex'
import {firebase} from '../firebase'

export default createStore({
  state: {
    loggedIn:false,
    employees: []
  },
  getters: {
    isLoggedIn(state){
      return state.loggedIn
    },
    loadedEmployees(state){
      return state.employees
    }
  },
  mutations: {
    SET_LOGGED_IN(state,payload){
      state.loggedIn=payload
    },
    SET_EMPLOYEES(state,payload){
      state.employees=payload
    }
  },
  actions: {
    getEmployees({commit}){
      firebase.database().ref('employee').on('value', (snapshot) => {
        let employees=[]
        let data=snapshot.val()
        for(let i in data){
          employees.push({
            iid: i,
            // id: data[i].id,
            // name:data[i].name,
            // phone:data[i].phone,
            // designation:data[i].designation,
            ...data[i]
          })
        }
        commit('SET_EMPLOYEES',employees)
      })
    }
  },
  modules: {
  }
})