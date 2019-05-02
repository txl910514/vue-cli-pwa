import Vue from 'vue'
let http = function () {
  let host = ''
  return {
    get (action: string, options: object) {
      return Vue.prototype.axios.get(host + action, options)
    },
    head (action: string, options: object) {
      return Vue.prototype.axios.head(host + action, options)
    },
    delete (action: string, options: object) {
      return Vue.prototype.axios.delete(host + action, options)
    },
    post (action: string, body: object, options: object) {
      return Vue.prototype.axios.post(host + action, body, options)
    },
    put (action: string, body: object, options: object) {
      return Vue.prototype.axios.put(host + action, body, options)
    },
    patch (action: string, body: object, options: object) {
      return Vue.prototype.axios.patch(host + action, body, options)
    }
  }
}

export default http