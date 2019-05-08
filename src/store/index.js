import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
  userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : null,
  userToken: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null,
}

const mutations = {
  setuserToken(state, userToken) {
    // console.log('11111111111');
    state.userToken = userToken;
    localStorage.setItem('userToken', userToken)
  },
  setuserName(state, userName) {
    state.userName = userName;
    localStorage.setItem('userName', userName)
  },
  closeLogin(state) {
    state.userName = null,
    state.userToken = null,
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
  }
}

export default new Vuex.Store({
  mutations,
  state,
})