<template>
	<div class=" w-10/12 ml-2">
		<div class="w-full flex flex-row border-2 border-gray-600 bg-white px-2 py-3 mb-4">
			<div class="w-1/3 flex">
				<label class="mr-3">Ordenar:</label>
				<select class="border focus:outline-none">
					<option>Novedades</option>
					<option>Novedades</option>
					<option>Novedades</option>
					<option>Novedades</option>
					<option>Novedades</option>
				</select>
			</div>

			<div class="w-1/3 flex">
				<label class="mr-3">Mostrar:</label>
				<select class="border focus:outline-none">
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

			<div class="w-1/3 flex">
				<label class="mr-3">Paginas:</label>
				<select class="border focus:outline-none">
					<option>1</option>
					<option>1</option>
					<option>1</option>
					<option>1</option>
					<option>1</option>
					<option>1</option>
				</select>
				<p class="mx-2"> de 10</p>
				<div>
					<button class="border px-3 font-semibold">  </button>
					<button class="border px-3 font-semibold"> > </button>
				</div>
			</div>
		</div>
		<div class="w-full flex flex-row cards flex-wrap">
			<!-- customizado -->
			<article class=" w-1/3 mb-4 pr-4">
				<ProductCard/>
			</article>
			<!-- customizado -->
		</div>
		<div class="w-full flex flex-row border-2 justify-center border-gray-600 bg-white px-2 py-3 mb-3">
			<div class="flex justify-center">
				<label class="mr-3">Paginas:</label>
				<select class="border focus:outline-none">
					<option>1</option>
					<option>1</option>
					<option>1</option>
					<option>1</option>
					<option>1</option>
					<option>1</option>
				</select>
				<p class="mx-2"> de 10</p>
				<div>
					<button class="border px-3 font-semibold"> </button>
					<button class="border px-3 font-semibold"> > </button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	components:{
		ProductCard
	},
	name: 'Resultados'
}
</script>