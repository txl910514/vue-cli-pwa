import { Commit } from 'vuex'
import api from '../../api/api'
import * as types from '../mutation-types'
console.log(api);
export interface State {
    experiments: Exp[]
  }

const initState: State = {
    experiments: []
  }

  // getters
const getters = {
    getExperimentsState: (state: State) => state.experiments,
  }

  // actions
const actions = {
    async getExperimentsActions(context: { commit: Commit; state: State }, params: object) {
        const experiments = await api.getAllExperiments(params);
        context.commit(types.GET_ALL_EXPERIMENTS, experiments)
        return experiments;
    },
  }
  
  // mutations
  const mutations = {
    [types.GET_ALL_EXPERIMENTS](state: State, payload: Exp[]) {
        console.log(payload);
        state.experiments = payload || [];
    }
  }

  export default {
    state: initState,
    getters,
    actions,
    mutations,
  }