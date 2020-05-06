import Vue from 'vue';
import bootstrapvue from 'bootstrap-vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/index.scss';
import { createProvider } from './vue-apollo';


Vue.config.productionTip = false;

Vue.use(bootstrapvue);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
