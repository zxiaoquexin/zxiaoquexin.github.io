import Vue from 'vue';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import './filters/index'
import router from './router/index';
import store from './store/index';
import './style/index.less';
import 'amfe-flexible';
import {
  loading,
  clear
} from './loding/index';
import axios from 'axios';
Vue.prototype.axios=axios;
Vue.prototype.$loading=loading;
Vue.prototype.$clear=clear;



Vue.use(Vant);



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
