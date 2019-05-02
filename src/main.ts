import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './style/iconfont.js';
import axios from 'axios';

import FastClick from 'fastclick';
// 样式统一
import 'normalize.css';

// 移动端300ms延迟问题，同时解决点透事件的出现。
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  });
}

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
// axios.defaults.withCredentials = true;

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error.message);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
