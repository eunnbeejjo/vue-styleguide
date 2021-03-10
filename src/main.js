import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import DefaultBtn from "@/components/buttonComponent/DefaultBtn";
import SaveBtn from "@/components/buttonComponent/SaveBtn";
import CancelBtn from "@/components/buttonComponent/CancelBtn";
import DeleteBtn from "@/components/buttonComponent/DeleteBtn";

Vue.component('default-btn', DefaultBtn);
Vue.component('save-btn', SaveBtn);
Vue.component('cancel-btn', CancelBtn);
Vue.component('delete-btn', DeleteBtn);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
