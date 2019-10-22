<template>
	<div class="w-full flex justify-between my-4" style="height: 138px">
		<div v-for="item of categories" :key="item.id" class="flex w-1/4 h-full px-1">
			<div class="w-full h-full" :class="'colorPrimarioDos'">
				<div class="mt-2 mb-2 w-48 h-24 mx-auto">
					<img class="w-full h-full" :src="item.src" :alt="item.name">
				</div>
				<p class=" self-center leading-none text-white text-center uppercase tracking-wide text-lg">{{item.name}}</p>
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