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
    ],
  },
  getters: {
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      const initialValue = 0;
      const totalPrice = state.orderList.reduce((previous, current) => 
        previous.menu.price + previous.size.price + current.menu.price + current.size.price, initialValue
      )
      console.log(totalPrice)
      return totalPrice
      // return initialValue
    }

  },
  mutations: {
    addOrder (state) {
      const order = new Object()
      for(let i = 0; i < state.menuList.length; i++) {
        if (state.menuList[i].selected === true) {

          order.menu = state.menuList[i]
          state.menuList[i].selected = false
        }

      }
      for (let i = 0; i < state.sizeList.length; i++) {
        if (state.sizeList[i].selected === true) {

          order.size = state.sizeList[i]
          state.sizeList[i].selected = false
        }
      }
      order.option =  state.optionList

      state.orderList.push(order)

      for (let i = 0; i < state.optionList.length; i++) {
        state.optionList[i].count = 0
      }

      return order 
    },
    updateMenuList (state, selectedMenu) {
      state.menuList = state.menuList.map((menu) => {
        if (menu.title === selectedMenu.title) {
          menu.selected = !menu.selected
        } else {
          menu.selected = false
        }
        return menu
      })
    },
    updateSizeList (state, selectedSize) {
      state.sizeList = state.sizeList.map((size) => {
        if (size.name === selectedSize.name) {
          size.selected = !size.selected
        } else {
          size.selected = false
        }
      return size
      })
    },
    increaseOptionList (state, increaseOption) {
      // const option = new Object()
      for(let i = 0; i < state.optionList.length; i++) {
        if (state.optionList[i].type === increaseOption.type) {
          state.optionList[i].count += 1
        }
      }
    },
    decreaseOptionList (state, decreaseOption) {
      for(let i = 0; i < state.optionList.length; i++) {
        if (state.optionList[i].type === decreaseOption.type) {
          if (state.optionList[i].count === 0) {
            state.optionList[i].count = 0
          } else {
            state.optionList[i].count -= 1
          }
        }
      }
    }

  },

  actions: {
    updateMenuStatus(context, selectedMenu) {
      context.commit('updateMenuList', selectedMenu)
    },
    updateSizeStatus(context, selectedSize) {
      context.commit('updateSizeList', selectedSize)
    },
    orderMenu(context) {
      context.commit('addOrder')
    },
    increaseOption(context, increaseOption) {
      context.commit('increaseOptionList', increaseOption)
    },
    decreaseOption(context, decreaseOption) {
      context.commit('decreaseOptionList', decreaseOption)
    }

  },
  modules: {
  }
})