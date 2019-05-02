import { Commit } from 'vuex'
import api from '../../api/api'
import * as types from '../mutation-types'
console.log(api);
export interface State {
    expDetails : object
  }

const initState: State = {
    expDetails : {}
  }

  // getters
const getters = {
    getExpDetailState: (state: State) => state.expDetails,
  }

  // actions
const actions = {
    async getExpDetailActions(context: { commit: Commit; state: State }, params: number) {
        let experiments = await api.getExperiment(params);
        context.commit(types.GET_EXP_DETAIL, experiments)
        return experiments;
    },
  }
  
  // mutations
  const mutations = {
    [types.GET_EXP_DETAIL](state: State, payload: Exp[]) {
        console.log(payload);
        state.expDetails = payload || {};
    }
  }

  export default {
    state: initState,
    getters,
    actions,
    mutations,
  }