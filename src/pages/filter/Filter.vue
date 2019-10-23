<template>
	<div>
		<header class="full">
			<CabeceraBarraUtilidades/>
			<!-- <CabeceraBarraNav/> -->
		</header>
		<BreadCrumbs/>
		<main>			
			<section class="container mx-auto px-20">
				<BarraProducto/>
			</section>
		</main>
		<Footer/>
	</div>
</template>

<script>

import '@/assets/css/style.css'
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades"
import BreadCrumbs from '@/components/comun/BreadCrumbs'
import BarraProducto from '@/components/BarraProducto'
import Footer from "@/components/footer/Footer"

export default {
	components:{
		CabeceraBarraUtilidades,
		BreadCrumbs,
		BarraProducto,
		Footer
	},
  	name: 'Filter'
}
</script>