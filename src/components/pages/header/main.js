import Vue from 'vue'
import Header from './Header.vue'
import store from '../../../store'

Vue.config.productionTip = false

new Vue({
	store,
  	render: h => h(Header)
}).$mount('#header')