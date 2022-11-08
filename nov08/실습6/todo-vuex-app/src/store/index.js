import Vue from 'vue'
import Vuex from 'vuex'
// import 모듈
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo
  },
  // 모듈에 있으니까 밑에있는거 다 안써도됨
  // 위에 import 모듈 꼭 쓰고,,,
    // state: {
  //   // 하나의 모듈
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
})
