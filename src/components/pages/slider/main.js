import Vue from 'vue'
import Slider from './Slider.vue'
import store from '../../../store'

Vue.config.productionTip = false

new Vue({
	store,
  	render: h => h(Slider)
}).$mount('#slider')