import { createStore } from 'vuex'
import {firebase} from '../firebase'

export default createStore({
  state: {
    loggedIn:false,
    employees: [],
    lists:[]
  },
  getters: {
    isLoggedIn(state){
      return state.loggedIn
    },
    loadedEmployees(state){
      return state.employees
    },
    getLists(state){
      return state.lists
    }
   
  },
  mutations: {
    SET_LOGGED_IN(state,payload){
      state.loggedIn=payload
    },
    SET_EMPLOYEES(state,payload){
      state.employees=payload
    },
    GET_LISTS(state,payload){
      state.lists=payload
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
    },
    getLists({commit}){
      firebase.database().ref.once('TodoList').on('value',(snapshot) =>{
        let lists=[]
        let data=snapshot.val()
        for(let i in data){
          lists.push({
            iid:i,
            ...data[i]
          })
        }
        commit('GET_LISTS',lists)
      })
    }
  },
  modules: {
  }
})