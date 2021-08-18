export default {
  namespaced: true,
  state: {
    order: JSON.parse(window.localStorage.getItem('order')) || [] // 訂單
  },
  getters: {},
  mutations: {
    // 成立訂單
    addOrder (state, data) {
      state.order.push(data)
      window.localStorage.setItem('order', JSON.stringify(state.order))
    },

    // 修改付款狀態
    paidOrder (state, index) {
      state.order[index].isPaid = true
      window.localStorage.setItem('order', JSON.stringify(state.order))
    }
  },
  actions: {}
}
