import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "@/assets/css/tailwind.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import '@/router'
import router from '@/router';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
