import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(VueClipboard);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
