import Vue from 'vue'
import Login from './Login.vue'
import store from '@/store.js'

Vue.config.productionTip = false

new Vue({
	store,
  	render: h => h(Login)
}).$mount('#login')