<template>
	<article class=" border rounded h-full mx-2 p-2 relative">
		<div class="absolute text-2xs mont-semibold top-0 right-0 m-2 text-white bg-purple-intense rounded-xl py-1 px-5 uppercase">
			Oferta
		</div>
		<img class="w-full h-40" src="https://via.placeholder.com/130" alt="">
		
		<p class="text-center text-xs mont-semibold text-gray-intense">Shampoo Revlon 200ml</p>
		<p class="text-center text-xs mont-regular text-gray-intense mb-1">- Funcion Repara</p>
		
		<div class="flex flex-row justify-center">
			<!-- precio real -->
			<p class=" line-through mr-2 text-xs text-gray-light mont-semibold">S/64.00</p>
			<span class="text-xs text-gray-light mont-semibold">-20%</span>
		</div>
		<div class="flex flex-col items-center mb-1">
			<!-- precio con descuento -->
			<div class="w-full flex justify-center mb-1">
				<p class="text-red-intense mont-semibold text-lg self-center">S/51.20</p>
			</div>
			<a class="flex w-1/2 content-center justify-center flex-row buy-fast border border-purple-intense py-1 rounded-xl"  href="#">
				<svg class=" w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.98 26.93">
					<title>Recurso 2</title>
					<g id="Capa_2" data-name="Capa 2">
						<g id="Capa_1-2" data-name="Capa 1">
							<path class="delivery-icon-color" d="M52.58,22.63H26.19c-.06.23-.1.45-.17.67A4.94,4.94,0,0,1,16.41,23c-.06-.29-.16-.37-.44-.37-1.43,0-2.85,0-4.27,0a1,1,0,0,1-1.06-1.41l1.89-6.13a1,1,0,0,1,1-.74,1,1,0,0,1,.89.86,1.55,1.55,0,0,1-.08.56L13,20.24c0,.13-.07.27-.12.45.92,0,1.82,0,2.71,0A1,1,0,0,0,16.78,20,4.78,4.78,0,0,1,21.36,17a4.92,4.92,0,0,1,4.55,3.27.46.46,0,0,0,.53.39h16.2c.33,0,.45-.12.54-.42,1.81-6,3.71-12,5.24-18a2.86,2.86,0,0,0,.06-.31H18.16c-.32,0-.47.09-.53.39a4.52,4.52,0,0,1-.21.62,1,1,0,0,1-1.82-.62c.17-.56.36-1.12.56-1.67A1,1,0,0,1,17,0H49.7a1,1,0,0,1,1,1.27c-.13.56-.28,1.12-.42,1.68,0,0,0,0,0,.08H58a1.29,1.29,0,0,1,1.27.72q2.23,3.91,4.5,7.79a1.41,1.41,0,0,0,.5.5c1.34.8,2.7,1.57,4,2.36a1,1,0,0,1,.55,1.34q-.87,3-1.75,6a1,1,0,0,1-1.17.88H62.44a5,5,0,0,1-2,3.34,4.84,4.84,0,0,1-3.09,1C55,26.88,53.21,25.3,52.58,22.63Zm-7.09-2,.14,0c2.29,0,4.59,0,6.88,0,.1,0,.25-.15.29-.26a5,5,0,0,1,9.41,0,.32.32,0,0,0,.38.26c.85,0,1.69,0,2.54,0,.26,0,.35-.1.41-.33.41-1.44.83-2.88,1.26-4.31a.32.32,0,0,0-.18-.45c-1.22-.69-2.43-1.38-3.63-2.1a2,2,0,0,1-.66-.66Q60.14,9.11,58,5.36A.67.67,0,0,0,57.32,5c-2.33,0-4.67,0-7,0a.52.52,0,0,0-.61.45Q48,11.49,46.31,17.57C46,18.59,45.76,19.62,45.49,20.65Zm12-1.67a3,3,0,1,0,3,3A3,3,0,0,0,57.52,19ZM21.27,19a3,3,0,1,0,3,3A3,3,0,0,0,21.27,19Z"/>
							<path class="delivery-icon-color" d="M12.61,6.35H1.27C.45,6.35,0,6,0,5.39s.45-1,1.29-1H24a2.32,2.32,0,0,1,.53,0,.94.94,0,0,1,.75,1,1,1,0,0,1-.8.9,4.26,4.26,0,0,1-.5,0Z"/>
							<path class="delivery-icon-color" d="M19.54,7.83h8.54a2.07,2.07,0,0,1,.5,0,1,1,0,0,1,.07,1.83,1.66,1.66,0,0,1-.49.07H10.85c-.82,0-1.32-.59-1.09-1.27a.93.93,0,0,1,1-.66h8.81Z"/>
							<path class="delivery-icon-color" d="M13.31,11.53h7.57a1,1,0,0,1,.2,1.92H5.58a1,1,0,0,1-1-1,1,1,0,0,1,1-.94h7.73Z"/>
						</g>
					</g>
				</svg>
				<span class=" text-4xs text-gray-regular mont-medium">Entrega <br> Inmediata</span>
			</a>
		</div>
		<div class="block text-center">
			<button class="inline-block py-2 px-4 bg-purple-intense text-2xs mont-medium text-white rounded-lg focus:outline-none uppercase">Comprar Ahora</button>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ProductCard'
}
</script>