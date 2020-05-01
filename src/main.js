import Vue from 'vue';
import bootstrapvue from 'bootstrap-vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/index.scss';


Vue.config.productionTip = false;

Vue.use(bootstrapvue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
