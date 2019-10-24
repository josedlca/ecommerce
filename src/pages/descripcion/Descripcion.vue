<template>
	<div>
		<header class="full">
			<CabeceraBarraUtilidades/>
		</header>
		<BreadCrumbs/>
		<main>			
			<section class="container mx-auto px-20">
				<div class="w-full flex flex-row bg-white items-center mb-5" style="height: 400px;">
					<div class=" w-6/12 h-full">
						<img class="w-full h-full" src="https://via.placeholder.com/1600" alt="placeholder">
					</div>
					<div class=" w-6/12 p-8">
						<div class="w-full border-b-2 flex flex-col pb-3 mb-3">
							<p class="mont-semibold text-purple-intense mb-1">Marca : Revlon</p>
							
							<div class="w-full flex flex-col mb-4">
								<h3 class=" text-xl mont-semibold text-gray-intense">Acondicionador 200ml</h3>
								<p class="text-xl mont-regular text-gray-intense">Para cabello con tinte</p>
							</div>

							<div class="w-full flex flex-row mb-4">
								<p class="mont-semibold text-gray-regular text-3xl ">Precio:</p>
								<p class="mont-semibold text-red-intense text-3xl">$/54.40</p>
							</div>
							
							<div class="flex flex-row mb-3">
								<p class="mont-regular text-xs text-gray-intense mr-3">Precio regular:</p> 
								<span class="text-xs mont-bold text-gray-light mr-3 line-through">$/64.00</span> 
								<p class="text-xs mont-bold text-white bg-purple-intense rounded">-20%</p>
							</div>
							
							<div class="flex flex-row justify-around">
								<div class="w-1/3 flex flex-row items-center">
									<div class="w-1/3">
										<button class="border-2 w-full focus:outline-none">+</button>
									</div>
									<div class="w-1/3">
										<input class="w-full outline-none" type="text">
									</div>
									<div class="w-1/3">
										<button class="border-2 w-full focus:outline-none">-</button>
									</div>
								</div>
								<div class="w-1/3">
									<button class="border-2 rounded-lg py-2 px-3">Aguegar al carrito</button>
								</div>
							</div>
						</div>
						<div class="w-full flex flex-row items-center">
							<div class="w-1/4">
								<p class="font-bold">Enviado por:</p>
								<p class="text-lg">Belleza</p>
							</div>
							
							<a class="flex w-1/4 content-center justify-center flex-col"  href="#">
								<svg class=" w-6 self-center" viewBox="0 0 254.215 254.215">
									<g>
										<path d="M253.521,120.354l-19.709-42.577c-1.229-2.652-3.885-4.35-6.807-4.35h-61.982V36.312c0-4.142-3.357-7.5-7.5-7.5H7.5
											c-4.143,0-7.5,3.358-7.5,7.5v126.221c0,4.142,3.357,7.5,7.5,7.5h14.691c-1.256,2.75-2.205,5.667-2.799,8.712H7.5
											c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h11.893c3.51,18.016,19.406,31.659,38.436,31.659
											c19.027,0,34.922-13.644,38.432-31.659h62.596c3.51,18.016,19.405,31.659,38.434,31.659c19.026,0,34.92-13.644,38.43-31.659h10.996
											c4.143,0,7.5-3.358,7.5-7.5v-62.74C254.215,122.416,253.979,121.341,253.521,120.354z M158.855,178.744H96.26
											c-0.593-3.045-1.543-5.962-2.799-8.712h64.063c1.988,0,3.791-0.779,5.133-2.042C160.893,171.321,159.598,174.934,158.855,178.744z
											M15,43.812h135.023v111.221H81.447c-6.571-4.985-14.754-7.95-23.619-7.95s-17.05,2.965-23.621,7.95H15V43.812z M57.828,210.403
											c-13.324,0-24.164-10.838-24.164-24.159c0-13.323,10.84-24.162,24.164-24.162c13.322,0,24.16,10.839,24.16,24.162
											C81.988,199.565,71.15,210.403,57.828,210.403z M197.289,210.403c-13.323,0-24.162-10.838-24.162-24.159
											c0-13.323,10.839-24.162,24.162-24.162c13.321,0,24.158,10.839,24.158,24.162C221.447,199.565,210.61,210.403,197.289,210.403z
											M239.215,178.744h-3.496c-3.51-18.018-19.402-31.662-38.43-31.662c-13.535,0-25.486,6.904-32.523,17.374
											c0.162-0.615,0.258-1.257,0.258-1.923V88.427h57.189l17.002,36.729V178.744z"/>
										<path d="M211.066,95.302h-31.537c-4.143,0-7.5,3.358-7.5,7.5v20.85c0,4.142,3.357,7.5,7.5,7.5h41.428c0.011,0,0.015,0,0.02,0
											c4.143,0,7.5-3.358,7.5-7.5c0-1.343-0.353-2.603-0.971-3.693l-9.663-20.371C216.601,96.97,213.963,95.302,211.066,95.302z
											M187.029,116.151v-5.85h19.294l2.774,5.85H187.029z"/>
									</g>
								</svg>
								<span class=" text-xs text-center">Entrega <br> Inmediata</span>
							</a>
						</div>
					</div>
				</div>

				<div class="w-full flex flex-row bg-white">
					<div class="w-1/2 p-4">
						<p class="font-bold text-lg mb-4">Caracteristicas</p>

						<div class="w-full flex flex-col">
							<div class=" bg-white flex w-full flex-row">
								<div class="w-1/2 border-r-2 border-black ">
									Color
								</div>
								<div class="w-1/2 py-2">
									Rojo
								</div>
							</div>
							<div class=" bg-gray-300 flex w-full flex-row">
								<div class="w-1/2 border-r-2 border-black py-2">
									Color
								</div>
								<div class="w-1/2 py-2">
									Rojo
								</div>
							</div>
						</div>

					</div>
					<div class="w-1/2 p-4">
						<p class="font-bold text-lg mb-4">Detalle del producto</p>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quas. Inventore magni doloribus provident saepe natus dolores quia perspiciatis expedita consequatur? Accusantium libero ducimus nisi, tenetur officiis asperiores harum. Repudiandae?
						</p>
					</div>
				</div>
			</section>
		</main>
		<Footer/>
	</div>
</template>

<script>

import '@/assets/css/style.css'
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades"
import BreadCrumbs from '@/components/comun/BreadCrumbs'
import Footer from "@/components/footer/Footer"

export default {
	components:{
		CabeceraBarraUtilidades,
		BreadCrumbs,
		Footer
	},
  	name: 'Descripcion'
}
</script>