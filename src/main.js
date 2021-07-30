import Vue from 'vue';
import { BootstrapVue, IconPlugins } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.component(BootstrapVue);
Vue.component(IconPlugins);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
