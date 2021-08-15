import axios from 'axios'

export default {
  namespaced: true,
  state: {
    goods: [], // 商品
    courses: [], // 課程
    coursesList: [] // 課程列表
  },
  getters: {},
  mutations: {
    SET_GOODS (state, payload) {
      state.goods = payload
    },
    SET_COURSES (state, payload) {
      state.courses = payload
    },
    SET_COURSES_LIST (state, payload) {
      state.coursesList = payload
    }
  },
  actions: {
    // 商品清單
    async getGoods ({ commit }) {
      const { data: { data } } = await axios.get('/goods')
      commit('SET_GOODS', data)
    },
    // 課程清單
    async getCourses ({ commit }) {
      const { data: { data } } = await axios.get('/courses')
      commit('SET_COURSES', data)
    },
    // 課程列表
    async getCoursesList ({ commit }) {
      const { data: { data } } = await axios.get('/courses-list')
      commit('SET_COURSES_LIST', data)
    }
  }
}
