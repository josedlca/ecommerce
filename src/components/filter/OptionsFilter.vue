<template>
	<div class=" w-2/12 mr-2">
		<div class="w-full bg-white border-2 border-gray-600">
			<div class="w-full border-b-2 border-gray-600 py-3 px-2">
				<p class="bebas-regular text-2.5xl text-purple-light">Filtrar por</p>
			</div>
			<!-- categorias -->
			<div class="w-full border-b-2 border-gray-600 py-3 px-2">
				<p class="text-purple-neutral text-2xl mont-regular mb-1">Categorias</p>
				<ul>
					<li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">Amazonia</li>
					<li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">Original</li>
					<li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">Equave</li>
					<li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">Be Fabulous</li>
				</ul>
			</div>
			<!-- rango de precio -->
			<div class="w-full border-b-2 border-gray-600 py-3 px-2">
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
				<p class="text-purple-neutral text-2xl mont-regular mb-4">Marca</p>
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
</template>

<script>
export default {
	name: 'OptionsFilter'
}
</script>