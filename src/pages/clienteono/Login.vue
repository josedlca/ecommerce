<template>
	<div>
		<header class="w-full">
			<CabeceraBarraUtilidades/>
		</header>
		<main class="w-full">			
			<div class="container mx-auto py-6 w-full flex flex-row justify-around">
				<div class="w-3/12">
					<div class="w-full flex flex-col border-2 border-black bg-white p-4">
						<div class="w-full pb-3">
							<p class="mont-semibold text-xl text-gray-regular">Soy cliente</p>
						</div>

						<div class="w-full mb-3">
							<p class=" text-sm mont-regular text-gray-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae voluptatem in blanditiis eum, dolorum, voluptate autem inventore ducimus quod corrupti. Recusandae ullam doloribus expedita architecto, consequuntur atque illum dolore?</p>
						</div>

						<div class="w-full flex flex-col mb-3">
							<label for="correo" class="mont-medium text-gray-regular">Correo electronico*</label>
							<input id="correo" class="w-full border rounded border-purple-neutral text-sm mont-medium text-gray-light px-2 py-1 outline-none" type="email">
						</div>

						<div class="w-full flex flex-col mb-3">
							<label for="pass" class="mont-medium text-gray-regular">Contraseña*</label>
							<input id="pass" class="w-full border rounded border-purple-neutral text-sm mont-medium text-gray-light px-2 py-1 outline-none" type="password">
						</div>

						<div class="w-full flex flex-col mb-3">
							<p class="font-semibold text-xs">¿Has olvidado tu contraseña?</p>
							<button class="w-full font-bold border-2 text-white py-1 bg-red-700 border-black">Ingresar</button>
						</div>

						<div class="w-full flex flex-row">
							<div class="w-1/2">
								<div class="w-full pr-1">
									<button class="w-full py-1 text-white font-semibold bg-blue-500 border-2 border-black">Facebook</button>
								</div>
							</div>
							<div class="w-1/2">
								<div class="w-full pl-1">
									<button class="w-full py-1 font-semibold bg-gray-500 border-2 border-black">Google</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="w-3/12">
					<div class="w-full flex flex-col p-4">
						<div class="w-full pb-3">
							<p class="font-semibold text-lg">Aun no soy cliente</p>
						</div>

						<div class="w-full mb-3">
							<p class="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae voluptatem in blanditiis eum, dolorum, voluptate autem inventore ducimus quod corrupti. Recusandae ullam doloribus expedita architecto, consequuntur atque illum dolore?</p>
						</div>

						<div class="w-full flex flex-col mb-3">
							<label class="font-semibold text-xs">Correo electronico*</label>
							<input class="w-full border-2 border-black" type="text">
						</div>

						<div class="w-full flex flex-col mb-3">
							<label class="font-semibold text-xs">Nombre</label>
							<input class="w-full border-2 border-black" type="text">
						</div>

						<div class="w-full flex flex-col mb-3">
							<label class="font-semibold text-xs">Contraseña*</label>
							<input class="w-full border-2 border-black" type="text">
						</div>

						<div class="w-full flex flex-col mb-3">
							<label class="font-semibold text-xs">Confirmar contraseña*</label>
							<input class="w-full border-2 border-black" type="text">
						</div>

						<div class="w-full flex flex-col mb-3">
							<button class="w-full font-bold border-2 py-1 bg-gray-500 border-black">Registrarse</button>
						</div>

						<div class="w-full flex flex-row">
							<div class="w-1/2">
								<div class="w-full pr-1">
									<button class="w-full py-1 text-white font-semibold bg-blue-500 border-2 border-black">Facebook</button>
								</div>
							</div>
							<div class="w-1/2">
								<div class="w-full pl-1">
									<button class="w-full py-1 font-semibold bg-gray-500 border-2 border-black">Google</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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