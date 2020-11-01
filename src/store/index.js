import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    home:'Headline',
    video: 'VideoRecommend',
    tabState:'Home',
    isLogin: 'false',
    phone: 0,
    showResult: false
  },
  mutations: {
    changeHome(state, selected){
      state.home = selected
    },
    changeVideo(state, selected){
      state.video = selected
    },
    changeTabState(state, selected){
      state.tabState = selected
    },
    changeLoginState(state, isLogin){
      state.isLogin = isLogin
    },
    changePhone(state, phone){
      state.phone = phone
    },
    changeShowResult(state, show){
      state.showResult = show
    }
  },
  actions: {
  },
  modules: {
  }
})
