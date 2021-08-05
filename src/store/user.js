import axios from 'axios'

export default {
  namespaced: true,
  state: {
    user: {} // 使用者資訊
  },
  getters: {},
  actions: {
    // 取得使用者
    async getUser ({ commit }, { data }) {
      const reslut = await axios.post('/users', { data })
      if (reslut.code === 200) {
        const userInfo = reslut.data.data
        commit('RECEIVE_USER_INFO', { userInfo })
      }
    }
  },
  mutations: {
    RECEIVE_USER_INFO (state, { userInfo }) {
      state.user = userInfo
    }
  }
}
