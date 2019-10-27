<template>
	<div>
		<header class="w-full">
			<CabeceraBarraUtilidades/>
			<!-- <CabeceraBarraNav/> -->
		</header>
		<main>			
			<BanerSlider/>
			<section class="container mx-auto px-3 sm:px-20">
				<BanerCategorias/>
				<BarraVerMas/>
				<ProductSlider/>
				<BarraVerMas/>
				<ProductSlider/>
			</section>
		</main>
		<Footer/>
	</div>
</template>

<script>

import '@/assets/css/style.css'
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades"
import CabeceraBarraNav from "@/components/cabecera/CabeceraBarraNav"
import BanerSlider from "@/components/home/BanerSlider"
import BanerCategorias from "@/components/home/BanerCategorias"
import BarraVerMas from "@/components/BarraVerMas"
import ProductSlider from "@/components/comun/ProductSlider"
import Footer from "@/components/footer/Footer"

export default {
	components:{
		CabeceraBarraUtilidades,
		CabeceraBarraNav,
		BanerSlider,
		BanerCategorias,
		BarraVerMas,
		ProductSlider,
		Footer
	},
  	name: 'Home'
}
</script>
