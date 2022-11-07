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
        selected: true, // 초기값
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
        selected: true, //초기값
      },
      {
        name: 'medium',    
        price: 500,    
        selected: false, //초기값
      },
      {
        name: 'large',    
        price: 1000,    
        selected: false, //초기값
      }
    ],
  },
  getters: {
  },
  mutations: {
    UPDATE_MENU_STATUS(state, menuItem) {
      state.menuList.map((menu) => {
        if (menu === menuItem) {
          menu.selected = !menu.selected
        } else {
          menu.selected = false
        }
        return menu
      })
    }
    // addOrder: function () {},
    // updateMenuList: function () {},
    // updateSizeList: function () {},
  },
  actions: {
    updateMenuStatus(context, menuItem) {
      context.commit('UPDATE_MENU_STATUS', menuItem)
    }
  },
  modules: {
  }
})