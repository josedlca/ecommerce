<template>
	<div>
		<header class="full">
			<CabeceraBarraUtilidades/>
			<!-- <CabeceraBarraNav/> -->
		</header>
		<main>			
			<BanerSlider/>
			<section class="container mx-auto px-20">
				<BanerCategorias/>
				<BarraVerMas/>
			</section>
		</main>
	</div>
</template>

<script>

import '@/assets/css/style.css'
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades"
import CabeceraBarraNav from "@/components/cabecera/CabeceraBarraNav"
import BanerSlider from "@/components/home/BanerSlider"
import BanerCategorias from "@/components/home/BanerCategorias"
import BarraVerMas from "@/components/BarraVerMas"

export default {
	components:{
		CabeceraBarraUtilidades,
		CabeceraBarraNav,
		BanerSlider,
		BanerCategorias,
		BarraVerMas
	},
  	name: 'Home'
}
</script>
