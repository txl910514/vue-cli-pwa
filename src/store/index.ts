import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import actions from './actions'
import getters from './getters'
import home, { State as HomeState } from './modules/home'
import spExp from './modules/spExp'
import expDetail from './modules/expDetail'


Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home,
    spExp,
    expDetail
  },
})

export interface ActionContextBasic {
    commit: Commit,
    dispatch: Dispatch
  }
  
export interface State {
  }