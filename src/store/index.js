import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [], // 商品
    courses: [], // 課程
    coursesList: [], // 課程列表
    cartCourses: [], // 購物車
    user: {
      phone: '0915768987',
      password: '123456'
    }
  },
  mutations: {
    SET_GOODS (state, payload) {
      state.goods = payload
    },
    SET_COURSES (state, payload) {
      state.courses = payload
    },
    SET_COURSES_LIST (state, payload) {
      state.coursesList = payload
    },

    // 加入購物車
    addToCart (state, course) {
      const courseItem = { ...course }
      // const { cartList = [] } = localStorage.getItem('cart') || {}
      const index = state.cartCourses.findIndex(i => course.id === i.id)
      if (index === -1) {
        state.cartCourses.push(courseItem)
        console.log(state.cartCourses)
        // localStorage.setItem('cart', JSON.stringify(courseItem))
      } else {
        state.cartCourses[index].count++
        console.log(state.cartCourses)
        // localStorage.setItem('cart', JSON.stringify(courseItem))
      }
    },

    // 加一個
    addItem (state, index) {
      state.cartCourses[index].count++
      localStorage.setItem('cart', JSON.stringify(state.cartCourses))
    },

    // 減一個
    subItem (state, index) {
      state.cartCourses[index].count--
      localStorage.setItem('cart', JSON.stringify(state.cartCourses))
      if (state.cartCourses[index].count <= 0) {
        state.cartCourses[index].count = 1
      }
    },

    // 移除購物車
    removeItem (state, index) {
      state.cartCourses.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cartCourses))
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
  },
  getters: {
    total (state) {
      let sum = 0
      for (const i in state.cartCourses) {
        sum += state.cartCourses[i].count * state.cartCourses[i].price
      }
      return sum
    }
  }
})
