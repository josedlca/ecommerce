<template>
  <section class="w-full h-108 relative sm:px-12 cardSlider mb-5">
	  <carousel class="w-full h-full" :responsive="{0:{items:2,nav:false},640:{items:4,nav:true}}" :autoplay="false" :dots="false" :items=4 :nav="true">
		<ProductCard v-for="product of products" :key="product.id" />
	  </carousel>
  </section>
</template>

<script>

import '@/assets/css/style.css'
import carousel from 'vue-owl-carousel';
import ProductCard from '@/components/comun/ProductCard'

export default {
	  name: 'ProductSlider',
	  components:{
		  carousel,
		  ProductCard
	  },
	  data(){
		  return{
			  products:[
				  {
					  src:'https://via.placeholder.com/800',
					  name: 'placeholder'
				  },
				  {
					  src:'https://via.placeholder.com/800',
					  name: 'placeholder'
				  },
				  {
					  src:'https://via.placeholder.com/800',
					  name: 'placeholder'
				  },
				  {
					  src:'https://via.placeholder.com/800',
					  name: 'placeholder'
				  },
				  {
					  src:'https://via.placeholder.com/800',
					  name: 'placeholder'
				  },
				  {
					  src:'https://via.placeholder.com/800',
					  name: 'placeholder'
				  },
				  {
					  src:'https://via.placeholder.com/800',
					  name: 'placeholder'
				  },
			  ]
		  }
	  }

}
</script>

<style lang="css">
	.owl-nav{
		position: absolute;
		width: 100%;
		top: 50%;
		left: 0;
		margin: 0!important;
	}

	.owl-prev{
		float: left;
		position: absolute;
		left: -30px;
		transform: translateY(-50%);
		width: 46px;
		height: 46px;
		border-radius: 100%!important;
		background-color: #8E4560!important;
		color: #8E4560!important;
	}
	.owl-prev::after{
		content: url('../../assets/img/arrow-left.png');
		position: absolute;
		left: 50%;
		top: 50%;
		line-height: 1;
		transform: translate(-50%, -50%);
	}

	.owl-next{
		float: right;
		position: absolute;
		right: -30px;
		transform: translateY(-50%);
		width: 46px;
		height: 46px;
		border-radius: 100%!important;
		background-color: #8E4560!important;
		color: #8E4560!important;
	}

	.owl-next::after{
		content: url('../../assets/img/arrow-right.png');
		position: absolute;
		left: 50%;
		top: 50%;
		line-height: 1;
		transform: translate(-50%, -50%);
	}


	.cardSlider .owl-carousel{
		position: unset;
	}
</style>