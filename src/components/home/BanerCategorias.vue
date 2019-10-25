<template>
	<div class="w-full flex justify-between my-4 sm:h-34 ">
		<div v-for="item of categories" :key="item.id" class="flex w-1/4 h-full px-1">
			<div class="w-full h-full" :class="'colorPrimarioDos'">
				<div class="mt-2 mb-2 sm:w-48 h-14 sm:h-24 mx-auto">
					<img class="w-full h-full" :src="item.src" :alt="item.name">
				</div>
				<p class=" self-center leading-none text-white text-center uppercase mont-medium sm:mont-semibold sm:tracking-wide text-3xs sm:text-lg">{{item.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BanerCategorias',

	data(){
		return{
			categories:[
				{
					name:"Tratamiento",
					src: "https://via.placeholder.com/800"
				},
				{
					name:"Acondicionador",
					src: "https://via.placeholder.com/800"
				},
				{
					name:"Mascaras",
					src: "https://via.placeholder.com/800"
				},
				{
					name:"Quitamanchas",
					src: "https://via.placeholder.com/800"
				}
			],
		}
	}
}
</script>