import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 변수 (가져다 쓰기만 할수있음  = readOnly, 저장소를 만든다는 느낌적인 느낌
  state: {
    btn: {
      OutlineStyle: false,
      RoundStyle: false,
      DepressStyle: "",
      Color: "",
      TextColor: '#ffffff',
    },
  },
  // 변수를 수정하는놈 = update
  mutations: {
    modifyBtnDStyle(state, payload){ state.btn.DepressStyle = payload.DepressStyle},
    modifyBtnRStyle(state, payload){ state.btn.RoundStyle = payload.RoundStyle},
    modifyBtnOStyle(state, payload){ state.btn.OutlineStyle = payload.OutlineStyle},
    modifyBtnColor(state, payload){ state.btn.Color = payload.Color},
    modifyBtnTextColor(state, payload){ state.btn.TextColor = payload.TextColor},
  },
  actions: {
  },
  modules: {
  }
})
