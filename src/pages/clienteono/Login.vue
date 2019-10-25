<template>
	<div>
		<header class="w-full">
			<CabeceraBarraUtilidades/>
		</header>
		<main>			
			
		</main>
		<Footer/>
	</div>
</template>

<script>

import '@/assets/css/style.css'
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades"
import Footer from "@/components/footer/Footer"

export default {
	components:{
		CabeceraBarraUtilidades,
		Footer
	},
  	name: 'Login'
}
</script>