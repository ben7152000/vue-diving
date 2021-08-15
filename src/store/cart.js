export default {
  namespaced: true,
  state: {
    cart: [], // 購物車
    cartItem: [],
    order: [], // 訂單
    orderItem: []
  },
  getters: {
    total (state) {
      let sum = 0
      for (const i in state.cartCourses) {
        sum += state.cartCourses[i].count * state.cartCourses[i].price
      }
      return sum
    }
  },
  mutations: {
    // 加入購物車
    addToCart (state, course) {
      const courseItem = { ...course }
      const index = state.cartCourses.findIndex(i => course.id === i.id)
      if (index === -1) {
        state.cartCourses.push(courseItem)
        window.localStorage.setItem('cart', JSON.stringify(state.cartCourses))
      } else {
        state.cartCourses[index].count++
        window.localStorage.setItem('cart', JSON.stringify(state.cartCourses))
      }
    },

    // 加一個
    addItem (state, index) {
      state.cartCourses[index].count++
      window.localStorage.setItem('cart', JSON.stringify(state.cartCourses))
    },

    // 減一個
    subItem (state, index) {
      state.cartCourses[index].count--
      window.localStorage.setItem('cart', JSON.stringify(state.cartCourses))
      if (state.cartCourses[index].count <= 0) {
        state.cartCourses[index].count = 1
        window.localStorage.setItem('cart', JSON.stringify(state.cartCourses))
      }
    },

    // 移除購物車
    removeItem (state, index) {
      state.cartCourses.splice(index, 1)
      window.localStorage.setItem('cart', JSON.stringify(state.cartCourses))
    }
  },
  actions: {}
}
