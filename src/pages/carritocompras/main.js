import Vue from "vue";
import Carritocompras from "./Carritocompras.vue";
import store from "@/store.js";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Carritocompras)
}).$mount("#app");
