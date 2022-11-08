import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false, // 초기값
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '라떼',
        price: 4000,
        selected: false, // 초기값
        image: 'https://source.unsplash.com/featured/?latte'
      },
      {
        title: '카푸치노',
        price: 4500,
        selected: false, // 초기값
        image: 'https://source.unsplash.com/featured/?capuccino'
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: false,
        },
        {
        name: 'medium',
        price: 500,
        selected: false,
        },
        {
        name: 'large',
        price: 1000,
        selected: false,
        }
    ],
    optionList: [
      {   
        type: '샷추가',   
        price: 500,   
        count: 0, 
      },
      {   
        type: '카라멜 시럽',   
        price: 500,
        count: 0, 
      },
      {   
        type: '휘핑',   
        price: 500,   
        count: 0, 
      },
    ]
  },
  getters: {
  },
  mutations: {
    addOrder: function () {},
    updateMenuList: function () {},
    updateSizeList: function () {},
  },
  actions: {
  },
  modules: {
  }
})