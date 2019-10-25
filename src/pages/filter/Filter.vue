<template>
	<div>
		<header class="w-full">
			<CabeceraBarraUtilidades/>
			<!-- <CabeceraBarraNav/> -->
		</header>
		<BreadCrumbs/>
		<main>			
			<section class="container mx-auto px-3 sm:px-20">
				<BarraProducto class="hidden sm:inline-block"/>
				<div class="w-full flex flex-row px-1 mb-14">
					<!-- filter part -->
					<div class=" w-3/12 mr-2 hidden sm:inline-block">
						<div class="w-full bg-white border-2 border-gray-superLight">
							<div class="w-full border-b-2 border-gray-superLight py-3 px-2">
								<p class="bebas-regular text-2.5xl text-purple-light">Filtrar por</p>
							</div>
							<!-- categorias -->
							<div class="w-full border-b-2 border-gray-superLight py-3 px-2">
								<p class="text-purple-neutral text-2xl mont-regular mb-3 border-b-2 border-purple-light pb-3">Categorias</p>
								<ul>
									<li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">Amazonia</li>
									<li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">Original</li>
									<li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">Equave</li>
									<li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">Be Fabulous</li>
								</ul>
							</div>
							<!-- rango de precio -->
							<div class="w-full border-b-2 border-gray-superLight py-3 px-2">
								<p class="text-purple-neutral text-2xl mont-regular mb-4">Precio</p>
								<input class="w-full mb-4" type="range" aria-label="rango">
								<div class="flex flex-row w-full">
									<input class=" w-2/5 outline-none border-2 border-purple-neutral rounded text-xl text-gray-neutral mont-regular text-center" type="text" aria-label="Valor Inicial">
									<div class="w-1/5 flex items-center">
										<div class="border-2 w-6 border-purple-neutral rounded mx-auto"></div>
									</div> 
									<input class=" w-2/5 outline-none border-2 border-purple-neutral rounded text-xl text-gray-neutral mont-regular text-center" type="text" aria-label="Valor Final">
								</div>
							</div>

							<div class="w-full py-3 px-2">
								<p class="text-purple-neutral text-2xl mont-regular mb-4 pb-3 border-b-2 border-purple-light">Marca</p>
								<ul class="overflow-y-scroll h-32 lista-marcas">
									<li class="flex items-center">
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label>  
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label>  
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label>  
									</li>
									<li>
										<input type="checkbox" name="Revlon" id="revlon">
										<label class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer checkLabel" for="revlon">Revlon</label> 
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- filter part end-->
					
					<!-- show results -->
					<div class="w-full sm:w-9/12 sm:ml-2">
						<div class="w-full hidden sm:flex flex-row bg-gray-superLight px-2 py-3 mb-4">
							<div class=" w-4/12 flex justify-center items-center">
								<label class="mr-3 text-purple-neutral text-xs mont-medium">Pagina Por:</label>
								<div class="comboBox w-2/4 relative border border-purple-neutral h-full bg-white">
									<select class=" w-full h-full absolute top-0 right-0 focus:outline-none text-gray-regular text-xs mont-medium border-none focus:outline-none 				outline-none px-5">
										<option>Novedades</option>
										<option>Novedades</option>
										<option>Novedades</option>
										<option>Novedades</option>
										<option>Novedades</option>
									</select>
								</div>
							</div>

							<div class="w-4/12 flex justify-center items-center">
								<label class="mr-3 text-purple-neutral text-xs mont-medium">Mostrar:</label>
								<div class="comboBox w-3/12 relative border border-purple-neutral h-full bg-white">
									<select class=" w-full h-full absolute top-0 right-0 focus:outline-none text-gray-regular text-xs mont-medium border-none focus:outline-none 					outline-none px-5">
										<option>21</option>
										<option>21</option>
										<option>21</option>
										<option>21</option>
										<option>21</option>
										<option>21</option>
										<option>21</option>
										<option>21</option>
									</select>
								</div>
							</div>

							<div class="w-4/12 flex flex-row justify-center items-center">
								<label class="mr-3 text-purple-neutral text-xs mont-medium">Paginas:</label>
								<div class="comboBox w-3/12 relative border border-purple-neutral h-full bg-white">
									<select class=" w-full h-full absolute top-0 right-0 focus:outline-none text-gray-regular text-xs mont-medium border-none focus:outline-none 				outline-none px-5">
										<option>1</option>
										<option>1</option>
										<option>1</option>
										<option>1</option>
										<option>1</option>
										<option>1</option>
									</select>
								</div>
								<p class="mx-2 text-purple-neutral text-xs mont-medium"> de 10</p>
								<div class="flex flex-row">
									<button class="border px-2 bg-purple-neutral rounded text-white flex items-center"> ⏴ </button>
									<button class="border px-2 bg-purple-neutral rounded text-white flex items-center"> ⏵ </button>
								</div>
							</div>
						</div>

						<div class="w-full flex flex-row cards flex-wrap">
							<!-- customizado -->
							<div class=" w-full sm:w-1/3 mb-4">
								<article class="w-full flex flex-col border-2 border-gray-superLight sm:rounded h-full sm:mx-2 p-2 ">
									<div class="w-full flex flex-row sm:flex-col">
										<div class="relative w-1/2 sm:w-full h-40">
											<div class="absolute text-2xs mont-semibold top-0 right-0 text-white bg-purple-intense rounded-xl py-1 px-5 uppercase">
												Oferta
											</div>
											<img class="w-full h-full" src="https://via.placeholder.com/130" alt="">
										</div>
										
										<div class="w-1/2 sm:w-full">
											<p class="text-2xs mont-semibold text-purple-intense sm:hidden">Marca: Revlon</p>
											<p class="sm:text-center text-xs mont-semibold text-gray-intense">Shampoo Revlon 200ml</p>
											<p class="sm:text-center text-xs mont-regular text-gray-intense mb-1">Funcion Repara</p>
											
											<!-- precio real -->
											<div class="flex flex-row sm:justify-center">		
												<p class="mont-regular text-2xs sm:hidden">Precio regular:</p>										
												<p class=" line-through mr-2 text-2xs text-gray-light mont-semibold">S/64.00</p>
												<span class="text-2xs text-x text-white bg-purple-intense rounded sm:rounded-none sm:bg-transparent sm:text-gray-light mont-semibold">-20%</span>
											</div>

											<div class="flex flex-col items-center mb-1">
												<!-- precio con descuento -->
												<div class="w-full flex justify-center mb-1">
													<p class="text-red-intense mont-semibold text-lg self-center">S/51.20</p>
												</div>
												<a class="flex w-4/5 sm:w-1/2 content-center justify-center flex-row buy-fast border border-purple-intense py-1 rounded-xl"  href="#">
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
										</div>
									</div>

									<div class="block text-center">
										<button class="inline-block py-2 px-4 bg-purple-intense text-2xs mont-medium text-white rounded-lg focus:outline-none uppercase">Comprar Ahora</button>
									</div>
								</article>
							</div>
							<!-- customizado -->
						</div>

						<div class="w-full hidden sm:flex justify-center flex-row bg-gray-superLight px-2 py-3 mb-4">
							<div class="w-4/12 flex flex-row justify-center items-center">
								<label class="mr-3 text-purple-neutral text-xs mont-medium">Paginas:</label>
								<div class="comboBox w-3/12 relative border border-purple-neutral h-full bg-white">
									<select class=" w-full h-full absolute top-0 right-0 focus:outline-none text-gray-regular text-xs mont-medium border-none focus:outline-none 				outline-none px-5">
										<option>1</option>
										<option>1</option>
										<option>1</option>
										<option>1</option>
										<option>1</option>
										<option>1</option>
									</select>
								</div>
								<p class="mx-2 text-purple-neutral text-xs mont-medium"> de 10</p>
								<div class="flex flex-row">
									<button class="border px-2 bg-purple-neutral rounded text-white flex items-center"> ⏴ </button>
									<button class="border px-2 bg-purple-neutral rounded text-white flex items-center"> ⏵ </button>
								</div>
							</div>
						</div>
					</div>
					<!-- show results end-->
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

<style lang="css">
	.lista-marcas::-webkit-scrollbar{
		width: 5px;
		background: #dddddd;
	}

	.lista-marcas::-webkit-scrollbar-thumb{
		width: 5px;
		background: #8E4560;
	}

	#revlon{
		display: none;
	}

	.checkLabel::before{
		content: '';
		width: 17px;
		height: 18px;
		border: solid 1px #8E4560;
		display: inline-flex;
		background: transparent;
		border-radius: 2px;
		margin-right: 4px;
		font-size: 14px;
		font-weight: bold;
		justify-content: center;
	}

	#revlon:checked + .checkLabel::before{
		content: '🗸';
		color: #8E4560;	
	}

	/* custom combobox */
	.comboBox select{
		background: transparent;
		z-index: 2;
	}
	.comboBox select{
		-webkit-appearance: button;
	}

	.comboBox::after{
		content: '⏷';
		position: absolute;
		color: white;
		top: 0;
		right: 0;
		height: 100%;
		width: 25px;
		background: #8E4560;
		display: flex;
		justify-content: center;
    	align-items: center;
	}

</style>