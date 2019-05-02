import http from '@/utils/http'
import config from '@/config';
const headers = {
  baseURL: config.Url,
  headers: {
    'Authorization': `Bearer ${config.SpecialPassCode}`,
    'withCredentials': true,
  }
}
export default {
  getAllExperiments(params: object) {
    let param = {
      params
    }
    param = Object.assign(param, headers, {});
    return http()
      .get('/experiments', param)
      .then((res: object) => {
        return res
      })
  },
  getExperimentsByType (paramsObj: byType) {
    let {type, ...params} = paramsObj;
    const url = encodeURI('/experiment_types/' + type);
    let param = {
      params
    }
    param = Object.assign(param, headers, {});
    console.log(param);
    return http()
      .get(url, param)
      .then((res: object) => {
        return res
      })
  },
  getExperiment (id: number) {
    let param = {
      
    }
    param = Object.assign(param, headers, {});
    return http()
      .get('/experiments/' + id, param)
      .then((res: object) => {
        return res
      })
  }
}
