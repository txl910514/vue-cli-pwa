import { Commit } from 'vuex'
import api from '../../api/api'
import * as types from '../mutation-types'
console.log(api);
export interface State {
    experimentsType: Exp[]
  }

const initState: State = {
    experimentsType: []
  }

  // getters
const getters = {
    getExperimentsTypeState: (state: State) => state.experimentsType,
  }

  // actions
const actions = {
    async getExperimentsTypeActions(context: { commit: Commit; state: State }, params: byType) {
        let experiments  = []
        if (params.type) {
            experiments = await api.getExperimentsByType(params);
        } else {
            experiments = await api.getAllExperiments(params);
        }
        context.commit(types.GET_EXPERIMENTS_BY_TYPE, experiments)
        return experiments;
    },
  }
  
  // mutations
  const mutations = {
    [types.GET_EXPERIMENTS_BY_TYPE](state: State, payload: Exp[]) {
        console.log(payload);
        state.experimentsType = payload || [];
    }
  }

  export default {
    state: initState,
    getters,
    actions,
    mutations,
  }