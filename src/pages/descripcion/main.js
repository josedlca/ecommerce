import Vue from "vue";
import Descripcion from "./Descripcion.vue";
import store from "@/store.js";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Descripcion)
}).$mount("#descripcion");
