<template>
	<div>
		<header class="w-full">
			<CabeceraBarraUtilidades class="hidden sm:inline-block"/>
			<section class="w-full h-20 sm:h-28 relative sm:hidden" :class="'colorPrimarioUno'">
				<div class="container flex content-center h-full mx-auto">
					<!-- brand and search bar  -->
					<div class="w-full sm:w-7/12 self-center flex content-center">
						<a class="self-center w-5/12 flex flex-col px-3 sm:px-2" href="#">
							<img :src="logo" alt="logo">
							<p class="text-white text-4xs sm:text-xs mont-regular text-center">Profesional Hair</p>
						</a>
					</div>
				</div>
			</section>
		</header>
		<main class="w-full">	
			<div class="w-10/12 mx-auto pt-3 sm:hidden">
				<button @click="showLoginHideSign" :class="estaActivoLogin" class="w-1/2 text-lg focus:outline-none text-center uppercase mont-regular text-gray-light border-b-4 border-gray-light leading-none">Iniciar sesión</button>
				<button @click="showSignHideLogin" :class="estaActivoSign" class="w-1/2 text-lg focus:outline-none text-center uppercase mont-regular text-gray-light border-b-4 border-gray-light leading-none">Crear cuenta</button>
			</div>		
			<div class="container relative mx-auto py-6 w-full flex flex-row justify-around">
				<div :class="showOrHideLogin" class="w-full absolute sm:relative mt-6 px-4 sm:w-4/12">
					<div class="w-full flex flex-col shadow-4xl-dark bg-white py-4 px-8">
						<div class="w-full pb-3">
							<p class="mont-semibold text-xl text-gray-regular">Soy cliente</p>
						</div>

						<div class="w-full mb-3">
							<p class=" text-sm mont-regular text-gray-regular">Si haz comprado antes, solo ingresa tu correo electronico y contraseña para acceder a tu cuenta.</p>
						</div>

						<div class="w-full flex flex-col mb-3">
							<label for="logCorreo" class="mont-medium text-gray-regular">Correo electronico*</label>
							<input id="logCorreo" class="w-full border rounded border-purple-neutral text-sm mont-medium text-gray-light px-2 py-1 outline-none" type="email" placeholder="Escribir aqui...">
						</div>

						<div class="w-full flex flex-col mb-1">
							<label for="logPass" class="mont-medium text-gray-regular">Contraseña*</label>
							<div class="w-full flex flex-row items-center">
								<div class="w-10/12">
									<input id="logPass" class="w-full border rounded border-purple-neutral text-sm mont-medium text-gray-light px-2 py-1 outline-none" :type="inputType" placeholder="Escribir aqui...">
								</div>
								<div class="w-2/12 flex justify-center items-center relative cursor-pointer" @click="mostrarContrasena">
									<svg class="w-6"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.64 22.23">								
										<title>Recurso 3</title>
										<g id="Capa_2" data-name="Capa 2">
											<g id="Capa_1-2" data-name="Capa 1">
												<path class="show-icon fill-current text-purple-neutral" d="M0,11.19V11c.15-.24.32-.48.45-.73a19.72,19.72,0,0,1,31.4-4.38A46.93,46.93,0,0,1,35.64,11v.16c-.15.25-.31.48-.45.73A19.71,19.71,0,0,1,3.8,16.3,45.14,45.14,0,0,1,0,11.19ZM9.34,5.78a14.75,14.75,0,0,0-5.47,5.36l.2.34a16.47,16.47,0,0,0,17,7.1,16.36,16.36,0,0,0,10.32-6.9c.15-.22.3-.64.2-.8a16.08,16.08,0,0,0-5.34-5.19c1.09,4.48,0,8.14-3.9,10.57a8.22,8.22,0,0,1-9.4-.15C9.28,13.64,8.27,10.05,9.34,5.78Zm5.11,5.12a3.38,3.38,0,0,0,3.39-3.34,3.36,3.36,0,0,0-6.72,0A3.38,3.38,0,0,0,14.45,10.9Z"/>
											</g>
										</g>
									</svg>
									<div class="absolute w-full h-full left-0 flex justify-center items-center" :class="{'hidden' : mostrar}" style="bottom: 3px;">
										<p class=" text-2xl text-purple-neutral font-semibold">/</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="w-full flex flex-row mb-3">
							<p class="mont-medium text-2xs sm:text-xs text-gray-regular mr-2">¿Has olvidado tu contraseña?</p>
							<a class="mont-semibold text-2xs sm:text-xs text-purple-neutral" href="#">Has click aqui</a>
						</div>

						<div class="w-full flex flex-col mb-3">
							<button class="w-full mont-semibold uppercase rounded bg-purple-intense text-white py-1">Ingresar</button>
						</div>

						<div class="w-full flex flex-col items-center">
							<div class=" w-7/12 mb-2">
								<div class="w-full">
									<a href="#" class="w-full flex flex-row justify-center py-1 bg-blue-light rounded">
										<svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22.86">										
											<title>Recurso 1</title>
											<g id="Capa_2" data-name="Capa 2">
												<g id="Capa_1-2" data-name="Capa 1">
													<g id="Layer_1">
														<path class="facebook-icon-btn" d="M23,11.5A11.5,11.5,0,1,0,9.7,22.86v-8H6.78V11.5H9.7V9c0-2.89,1.72-4.48,4.35-4.48a17.16,17.16,0,0,1,2.57.23V7.55H15.17A1.65,1.65,0,0,0,13.3,9.34V11.5h3.19L16,14.82H13.3v8A11.5,11.5,0,0,0,23,11.5Z"/>
													</g>
												</g>
											</g>
										</svg>
										<p class="mont-semibold text-2xs text-white flex items-center">Ingresar con Facebook</p>
									</a>
								</div>
							</div>
							<div class=" w-7/12">
								<div class="w-full">
									<a href="#" class="w-full flex flex-row justify-center py-1 bg-red-regular rounded">
										<svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22.86">										
											<title>Recurso 1</title>
											<g id="Capa_2" data-name="Capa 2">
												<g id="Capa_1-2" data-name="Capa 1">
													<g id="Layer_1">
														<path class="facebook-icon-btn" d="M23,11.5A11.5,11.5,0,1,0,9.7,22.86v-8H6.78V11.5H9.7V9c0-2.89,1.72-4.48,4.35-4.48a17.16,17.16,0,0,1,2.57.23V7.55H15.17A1.65,1.65,0,0,0,13.3,9.34V11.5h3.19L16,14.82H13.3v8A11.5,11.5,0,0,0,23,11.5Z"/>
													</g>
												</g>
											</g>
										</svg>
										<p class="mont-semibold text-2xs text-white flex items-center">Ingresar con Google</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div :class="showOrHideSign" class="w-full absolute sm:relative mt-6 px-4 sm:w-4/12">
					<div class="w-full flex flex-col py-4 px-8 shadow-4xl-dark bg-white">
						<div class="w-full pb-3">
							<p class="mont-semibold text-xl text-gray-regular">Aun no soy cliente</p>
						</div>

						<div class="w-full mb-3">
							<p class="text-sm mont-regular text-gray-regular">Si aun no eres cliente, registrate ingresando tu correo electronico, documento de identidad y contraseña</p>
						</div>

						<div class="w-full flex flex-col mb-3">
							<label for="signCorreo" class="mont-medium text-gray-regular">Correo electronico*</label>
							<input id="signCorreo" class="w-full border rounded border-purple-neutral text-sm mont-medium text-gray-light px-2 py-1 outline-none" type="email" placeholder="Escribir aqui...">
						</div>

						<div class="w-full flex flex-col mb-3">
							<label for="signNombre" class="mont-medium text-gray-regular">Nombre</label>
							<input id="signNombre" class="w-full border rounded border-purple-neutral text-sm mont-medium text-gray-light px-2 py-1 outline-none" type="text" placeholder="Escribir aqui...">
						</div>

						<div class="w-full flex flex-col mb-3">
							<label for="signContraseña" class="mont-medium text-gray-regular">Contraseña*</label>
							<input id="signContraseña" class="w-full border rounded border-purple-neutral text-sm mont-medium text-gray-light px-2 py-1 outline-none" type="password" placeholder="Escribir aqui...">
						</div>

						<div class="w-full flex flex-col mb-3">
							<label for="signConfirm" class="mont-medium text-gray-regular">Confirmar contraseña*</label>
							<input id="signConfirm" class="w-full border rounded border-purple-neutral text-sm mont-medium text-gray-light px-2 py-1 outline-none" type="password" placeholder="Escribir aqui...">
						</div>

						<div class="w-full flex flex-col mb-3">
							<button class="w-full mont-semibold uppercase rounded bg-purple-light text-white py-1">Registrarse</button>
						</div>

						<div class="w-full flex flex-col items-center">
							<div class=" w-7/12 mb-2">
								<div class="w-full">
									<a href="#" class="w-full flex flex-row justify-center py-1 bg-blue-light rounded">
										<svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22.86">										
											<title>Recurso 1</title>
											<g id="Capa_2" data-name="Capa 2">
												<g id="Capa_1-2" data-name="Capa 1">
													<g id="Layer_1">
														<path class="facebook-icon-btn" d="M23,11.5A11.5,11.5,0,1,0,9.7,22.86v-8H6.78V11.5H9.7V9c0-2.89,1.72-4.48,4.35-4.48a17.16,17.16,0,0,1,2.57.23V7.55H15.17A1.65,1.65,0,0,0,13.3,9.34V11.5h3.19L16,14.82H13.3v8A11.5,11.5,0,0,0,23,11.5Z"/>
													</g>
												</g>
											</g>
										</svg>
										<p class="mont-semibold text-2xs text-white flex items-center">Ingresar con Facebook</p>
									</a>
								</div>
							</div>
							<div class=" w-7/12">
								<div class="w-full">
									<a href="#" class="w-full flex flex-row justify-center py-1 bg-red-regular rounded">
										<svg class="w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22.86">										
											<title>Recurso 1</title>
											<g id="Capa_2" data-name="Capa 2">
												<g id="Capa_1-2" data-name="Capa 1">
													<g id="Layer_1">
														<path class="facebook-icon-btn" d="M23,11.5A11.5,11.5,0,1,0,9.7,22.86v-8H6.78V11.5H9.7V9c0-2.89,1.72-4.48,4.35-4.48a17.16,17.16,0,0,1,2.57.23V7.55H15.17A1.65,1.65,0,0,0,13.3,9.34V11.5h3.19L16,14.82H13.3v8A11.5,11.5,0,0,0,23,11.5Z"/>
													</g>
												</g>
											</g>
										</svg>
										<p class="mont-semibold text-2xs text-white flex items-center">Ingresar con Google</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		<Footer class="hidden sm:inline-block"/>
	</div>
</template>

<script>

import '@/assets/css/style.css'
import logo from '@/assets/img/logo.png'
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades"
import Footer from "@/components/footer/Footer"

export default {
	components:{
		CabeceraBarraUtilidades,
		Footer
	},
	  name: 'Login',
	  data(){
		  return{
				mostrar: true,
				inputType: 'password',
				logo:logo,
				showOrHideLogin: 'show-login',
				showOrHideSign: 'hide-sign',
				estaActivoLogin:'activeChoice',
				estaActivoSign: ''
		  }
	  },
	  methods: {
		  mostrarContrasena(){
			  if (this.mostrar === true) {
				  this.mostrar=false,
				  this.inputType= 'text'
			  }else{
				  this.mostrar=true,
				  this.inputType= 'password'
			  }
		  },
		  showLoginHideSign(){
			  if (this.showOrHideLogin == 'hide-login') {
				  this.showOrHideLogin = 'show-login',
				  this.showOrHideSign = 'hide-sign',
				  this.estaActivoLogin = 'activeChoice',
				  this.estaActivoSign = 'unactiveChoice'
			  }
		  },
		  showSignHideLogin(){
			  if (this.showOrHideSign == 'hide-sign') {
				  this.showOrHideSign = 'show-sign',
				  this.showOrHideLogin = 'hide-login',
				  this.estaActivoLogin = 'unactiveChoice',
				  this.estaActivoSign = 'activeChoice'
			  }
		  }
	  },
}
</script>

<style lang="css">

@media (max-width: 640px){
	.show-login{
		top: 0;
		left: 0;
		transition: ease-in all .2s;
	}
	.hide-login{
		top: 0;
		left: -100%;
		transition: ease-in all .2s;
	}

	.show-sign{
		top: 0;
		right: 0;
		transition: ease-in all .2s;
	}
	.hide-sign{
		top: 0;
		right: -100%;
		transition: ease-in all .2s;
	}

	.activeChoice{
		color: #D4145A;
		border-color: #D4145A;
	}
	.unactiveChoice{
		color: #B3B3B3;
		border-color: #B3B3B3;
	}
}
</style>