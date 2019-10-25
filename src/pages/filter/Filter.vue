<template>
	<div>
		<header class="w-full">
			<CabeceraBarraUtilidades/>
			<!-- <CabeceraBarraNav/> -->
		</header>
		<BreadCrumbs/>
		<main>			
			<section class="container mx-auto px-20">
				<BarraProducto/>
				<div class="w-full flex flex-row px-1 mb-14">
					<!-- filter part -->
					<div class=" w-3/12 mr-2">
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
					<div class=" w-9/12 ml-2">
						<div class="w-full flex flex-row bg-gray-superLight px-2 py-3 mb-4">
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
							<div class=" w-1/3 mb-4">
								<ProductCard/>
							</div>
							<!-- customizado -->
						</div>

						<div class="w-full flex justify-center flex-row bg-gray-superLight px-2 py-3 mb-4">
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
import ProductCard from '@/components/comun/ProductCard'
import Footer from "@/components/footer/Footer"

export default {
	components:{
		CabeceraBarraUtilidades,
		BreadCrumbs,
		BarraProducto,
		ProductCard,
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