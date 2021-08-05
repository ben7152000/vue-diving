import Vue from 'vue'
import Vuex from 'vuex'
import goodsOptions from './goods'
import coursesOptions from './courses'
import usersOptions from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsAbout: goodsOptions,
    coursesAbout: coursesOptions,
    usersAbout: usersOptions
  }
})
