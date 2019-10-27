import Vue from "vue";
import Filter from "./Filter.vue";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Filter)
}).$mount("#filter");
