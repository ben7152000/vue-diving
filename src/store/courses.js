import axios from 'axios'

export default {
  namespaced: true,
  state: {
    courses: [], // 課程資訊
    coursesList: [] // 課程列表資訊
  },
  getters: {},
  actions: {
    // 取得課程列表
    async getCourseListInfo ({ commit }) {
      const { data } = await axios.get('/courses-list')
      if (data.code === 200) {
        const coursesList = data.data
        commit('RECEIVE_COURSES_LIST_INFO', { coursesList })
      }
    },
    // 取得課程資訊
    async getCourseInfo ({ commit }) {
      const { data } = await axios.get('/courses')
      if (data.code === 200) {
        const courses = data.data
        commit('RECEIVE_COURSES_INFO', { courses })
      }
    }
  },
  mutations: {
    RECEIVE_COURSES_INFO (state, { courses }) {
      state.courses = courses
    },
    RECEIVE_COURSES_LIST_INFO (state, { coursesList }) {
      state.coursesList = coursesList
    }
  }
}
