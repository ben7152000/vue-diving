export default {
  namespaced: true,
  state: {
    items: JSON.parse(window.localStorage.getItem('cart')) || []
  },
  getters: {
    total (state) {
      let sum = 0
      for (const i in state.items) {
        sum += state.items[i].count * state.items[i].price
      }
      return sum
    }
  },
  mutations: {
    // 加入購物車
    addToCart (state, course) {
      state.items.push(course)
      window.localStorage.setItem('cart', JSON.stringify(state.items))
    },

    // 加一個
    addItem (state, index) {
      state.items[index].count++
      window.localStorage.setItem('cart', JSON.stringify(state.items))
    },

    // 減一個
    subItem (state, index) {
      state.items[index].count--
      window.localStorage.setItem('cart', JSON.stringify(state.items))
      if (state.items[index].count <= 0) {
        state.items[index].count = 1
        window.localStorage.setItem('cart', JSON.stringify(state.items))
      }
    },

    // 移除購物車
    removeItem (state, index) {
      state.items.splice(index, 1)
      window.localStorage.setItem('cart', JSON.stringify(state.items))
    },

    // 清空購物車
    clearItem (state) {
      state.items = []
      window.localStorage.removeItem('cart')
    }
  },
  actions: {}
}
