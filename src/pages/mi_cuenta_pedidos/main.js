import Vue from "vue";
import Main from "./Main.vue";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(Main)
}).$mount("#app");