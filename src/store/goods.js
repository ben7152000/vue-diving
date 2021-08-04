import axios from 'axios'

export default {
  namespaced: true,
  state: {
    goods: {} // 裝備資訊
  },
  getters: {},
  actions: {
    // 取得裝備資訊
    async getGoodInfo ({ commit }) {
      const { data } = await axios.get('/goods')
      if (data.code === 200) {
        const goods = data.data
        commit('RECEIVE_GOODS_INFO', { goods })
      }
    }
  },
  mutations: {
    RECEIVE_GOODS_INFO (state, { goods }) {
      state.goods = goods
    }
  }
}
