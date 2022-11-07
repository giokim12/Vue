import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'message in store',
  },
  getters: {
    messageLeng th(state) {
      console.log('**************************')
      return state.message.length
      
    },
  },
  mutations: {
    CHANGE_MESSAGE(state, newMessage) {
      // console.log(state)
      // console.log(newMessage)
      state.message = newMessage
    }
  },
  actions: {
    changeMessage(context, newMessage) {
      // console.log(context)
      // console.log(newMessage)
      // context.commit('mutation 메서드 이름', 추가 데이터)
      context.commit('CHANGE_MESSAGE', newMessage)
    }
  },
  modules: {
  }
})
