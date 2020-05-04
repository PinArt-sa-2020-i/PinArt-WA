import Vue from 'vue';
import bootstrapvue from 'bootstrap-vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';
import 'bulma';
import './assets/css/index.scss';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Listbox from 'primevue/listbox';
import FileUpload from 'primevue/fileupload';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';
import App from './App.vue';
import router from './router';
import store from './store';
import { createProvider } from './vue-apollo';


Vue.config.productionTip = false;

Vue.use(bootstrapvue);
Vue.use(ToastService);
Vue.component('Toast', Toast);
Vue.component('Button', Button);
Vue.component('Listbox', Listbox);
Vue.component('Calendar', Calendar);
Vue.component('FileUpload', FileUpload);


new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
