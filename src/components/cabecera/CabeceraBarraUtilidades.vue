<template>
	<section class="w-full h-20 sm:h-28 relative" :class="'colorPrimarioUno'">
		<div class="container flex content-center h-full mx-auto">
			<!-- drop menu icon -->
			<div class="self-center w-2/12 flex justify-center h-full">
				<div @click="showPrincipalMenu" class="burguer-btn h-full w-full">
					<div class="inline-block h-full flex flex-col justify-center w-full items-center">
						<p class="text-white txt-regular font-light mont-regular burguerText hidden sm:inline-block">Categoria</p>
						<svg class=" w-8 sm:w-12 fill-current text-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</div>

					<CabeceraBarraNav/>
				</div>
			</div>

			<!-- brand and search bar  -->
			<div class="w-8/12 sm:w-7/12 self-center flex content-center">

				<a class="self-center w-4/12 flex flex-col pr-1 sm:px-2" href="#">
					<img :src="logo" alt="logo">
					<p class="text-white text-4xs sm:text-xs mont-regular text-center">Profesional Hair</p>
				</a>

				<div class="self-center w-8/12 relative inline-block h-full searchInp sm:pr-2">
					<input class="w-full outline-none text-xs sm:text-lg px-1 py-2 sm:p-5 mont-regular rounded-lg border sm:border-2 border-white" type="text" placeholder="Buscar Producto..." >
					<button class="absolute right-0 top-0 px-2 sm:px-5 flex h-full focus:outline-none">
						<svg class=" w-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							width="33.803px" height="34.603px" viewBox="0 0 33.803 34.603" enable-background="new 0 0 33.803 34.603" xml:space="preserve">
							<g>
								<g>
									<path fill="#E6E6E6" d="M21.998,22.37c-5.17,4.965-13.415,4.799-18.381-0.372c-4.965-5.17-4.798-13.416,0.371-18.381
									C9.159-1.348,17.404-1.181,22.37,3.989C27.336,9.159,27.169,17.405,21.998,22.37z M5.375,5.06C1,9.261,0.859,16.238,5.061,20.613
									c4.2,4.375,11.178,4.516,15.553,0.314c4.375-4.201,4.516-11.178,0.314-15.553C16.726,1,9.749,0.858,5.375,5.06z"/>
								</g>
								<g>
									
									<rect x="26.193" y="19.279" transform="matrix(0.7212 -0.6927 0.6927 0.7212 -11.6619 26.5799)" fill="#E6E6E6" width="2" height="17.001"/>
								</g>
							</g>
						</svg>
					</button>
				</div>
			</div>

			<!-- other utilities -->
			<div class="w-2/12 sm:w-4/12 h-full flex">
				<!-- truck -->
				<div class="hidden relative w-1/3 h-full flex sm:inline-block">
					<div class="absolute w-full h-full z-10 px-2" style="height: 110%">
						<div class="w-full flex flex-col items-center justify-center rounded-b-lg sm:shadow-4xl-dark h-full utility-icon relative">
							<svg class=" w-20 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.98 26.93">
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
							<p class="uppercase text-sm icon-text absolute bottom-0 pb-6 mont-semibold">Transporte</p>
						</div>
					</div>
				</div>

				<!-- user -->
				<div class="hidden relative w-1/3 h-full flex sm:inline-block">
					<div class="absolute w-full h-full z-10 px-2" style="height: 110%">
						<div class="w-full flex flex-col items-center justify-center rounded-b-lg sm:shadow-4xl-dark h-full utility-icon relative">
							<svg class="w-12 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.32 49.56">
								<title>Recurso 3</title>
								<g id="Capa_2" data-name="Capa 2">
									<g id="Capa_1-2" data-name="Capa 1">
									<path class="user-icon-color" d="M47.25,47.67a69.55,69.55,0,0,0-2.33-8.34,21.88,21.88,0,0,0-10.64-11.8A31,31,0,0,0,37,23.06a28.2,28.2,0,0,0,1.61-6,14.77,14.77,0,0,0-6.73-15C26.57-1,19-.61,14.25,2.89,8.15,7.42,7.43,16,9.93,22.23h0l0,0c.09.24.19.48.3.71a2.39,2.39,0,0,0,.25.43,15.12,15.12,0,0,0,1.6,2.73L13,27.61A23,23,0,0,0,3,38c-.39.75-1.49,3.19-1.63,3.7C.82,43.59.4,45.51.07,47.44c-.15.9-.16,2,1.16,2.11s1.31-.93,1.42-1.92A24.22,24.22,0,0,1,9.5,33.39c7.15,5.69,9.15,5.77,14.18.65,4.75,5.13,7.26,5,14.21-.72,3.78,4.18,6.27,8.86,6.79,14.44.08,1,.21,1.84,1.36,1.8S47.48,48.59,47.25,47.67Zm-35.43-16c2.38-2.11,2.89-2.16,5.45-.77a14.44,14.44,0,0,0,1.89.83c.65.25,1.31.44,2,.66C19.48,36.18,15.55,35.89,11.82,31.64ZM14.42,25h0a15.16,15.16,0,0,1-2.61-5.43c-1.18-5-1-9.92,3.09-13.69,3.84-3.57,8.52-4,13.35-2.46,5.81,1.83,8.88,7.85,7.56,14.64a20.75,20.75,0,0,1-4,8.21C26.26,31.51,19.15,31,14.42,25Zm11.8,7.62C28,31.68,29.8,30.43,31.74,30c1.14-.27,2.57.72,4,1.17C32.36,35.89,28.39,36.31,26.22,32.6Z"/>
									</g>
								</g>
							</svg>
							<p class="uppercase text-sm icon-text absolute bottom-0 mont-semibold pb-6">Cuenta</p>
						</div>
					</div>
				</div>

				<!-- shop -->
				<div class="relative buyIcon w-full sm:w-1/3 h-full flex">
					<div class="inline-block relative w-full h-full flex">
						<div class="absolute w-full sm:z-10 px-2 h-full sm:h-plus">
							<div class="w-full flex flex-col items-center justify-center rounded-b-lg sm:shadow-4xl-dark h-full utility-icon relative">
								<svg class="w-8 sm:w-12 sm:mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.88 47.69">
									<title>Recurso 4</title>
									<g id="Capa_2" data-name="Capa 2">
										<g id="Capa_1-2" data-name="Capa 1">
										<path class="carrito-icon-color" d="M44.35,41.26A4.21,4.21,0,0,1,44.79,45,4,4,0,0,1,43.15,47a4.08,4.08,0,0,1-4.9-.35,4.16,4.16,0,0,1-.74-5.39H24.63c1.17,2.43.82,4.5-1.58,5.91a3.91,3.91,0,0,1-4.67-.62,4.1,4.1,0,0,1-1.07-1.63,4.15,4.15,0,0,1-.19-2,4.4,4.4,0,0,1,.74-1.83l-.22-.08a4.87,4.87,0,0,1-3.4-3.84c-.48-2.38-1-4.75-1.54-7.13-.57-2.65-1.15-5.31-1.72-8s-1.14-5.31-1.72-8C8.78,12,8.31,9.72,7.83,7.49A5.32,5.32,0,0,0,6.62,5.25a5.43,5.43,0,0,0-2-1.43L4.41,4a2.44,2.44,0,0,1-2.7.81A2.48,2.48,0,0,1,3.09.08,2.07,2.07,0,0,1,4.28.79a2.56,2.56,0,0,0,1.12.78A8.72,8.72,0,0,1,8.34,3.62a8,8,0,0,1,1.92,3.91c.07.41.16.81.25,1.23.29-.21.56-.41.85-.58a4.7,4.7,0,0,1,2.43-.64H50.07a4.05,4.05,0,0,1,2.62.82A3.05,3.05,0,0,1,53.88,11a5.49,5.49,0,0,1-.82,2.49c-1.1,2.06-2.18,4.12-3.28,6.18-.9,1.71-1.82,3.41-2.72,5.12-.65,1.23-1.31,2.45-2,3.68A8.38,8.38,0,0,1,41.46,32a8.53,8.53,0,0,1-4.12,1C31.89,33,26.45,33,21,33c-.8,0-1.6,0-2.4,0A5.89,5.89,0,0,1,16,32.07l-.36-.19-.1,0c.06.32.11.62.17.92.31,1.41.66,2.81.93,4.23A2.55,2.55,0,0,0,19,38.9H47a1.1,1.1,0,0,1,1.08.73A1.17,1.17,0,0,1,47,41.25H44.35ZM22.44,30.61,21,24.52H14.47c0,.12,0,.22.06.31.19.82.39,1.64.57,2.46a4.42,4.42,0,0,0,4.13,3.33h3.21Zm8.07,0c-.44-2.05-.88-4.07-1.32-6.11H23.4a1.16,1.16,0,0,0,0,.16q.69,2.83,1.37,5.68c.05.21.12.28.34.28h5.37Zm7.86,0c0-.07,0-.12,0-.17l-1.2-5.7c0-.17-.1-.23-.28-.23H31.61c.44,2.06.87,4.08,1.31,6.09ZM12.76,17.23c.39,1.65.77,3.28,1.15,4.91h6.47C20,20.53,19.6,19,19.21,17.37a.27.27,0,0,0-.21-.15H12.91Zm32.82,4.94a2,2,0,0,0-.07-.27c-.48-1.5-1-3-1.45-4.49a.24.24,0,0,0-.28-.2H38.22l-.21,0c0,.08,0,.15,0,.21.31,1.48.62,3,.92,4.45,0,.2.1.27.31.27h6.3ZM19.84,9.9c0,.09,0,.14,0,.19.37,1.51.74,3,1.1,4.53,0,.18.12.23.31.23h5.8c0-.06,0-.08,0-.11-.33-1.53-.66-3.07-1-4.61-.05-.19-.12-.23-.3-.23h-6Zm-1.27,4.95,0,0c-.38-1.57-.77-3.15-1.15-4.72,0-.15-.11-.19-.24-.18-1.16,0-2.31,0-3.47,0a2,2,0,0,0-2.06,2.6c.15.7.32,1.39.47,2.09,0,.21.14.25.34.25h6.09Zm10.1,7.31a1.87,1.87,0,0,0,0-.25l-1-4.47c0-.19-.11-.23-.29-.23H21.61c.4,1.67.8,3.3,1.2,4.95ZM44.12,9.92a.57.57,0,0,0,0,.16c.49,1.52,1,3,1.48,4.55a.27.27,0,0,0,.3.22h3.52a.34.34,0,0,0,.34-.22c.35-.66.71-1.32,1-2a9.55,9.55,0,0,0,.65-1.42.82.82,0,0,0-.54-1.15,2.46,2.46,0,0,0-.76-.16h-6Zm-15.64,0a.75.75,0,0,0,0,.11c.32,1.54.66,3.09,1,4.63,0,.17.12.2.28.2H35.1l-1-4.95Zm7.11,7.31H30c.36,1.65.71,3.29,1.06,4.92h5.51C36.27,20.48,35.93,18.86,35.59,17.22Zm7.6-2.39a.37.37,0,0,0,0-.11c-.49-1.52-1-3.05-1.48-4.58-.06-.2-.16-.25-.36-.25H36.77l-.27,0c0,.06,0,.1,0,.13.32,1.52.64,3,1,4.57,0,.17.09.23.27.23H43ZM40.61,29.74h0l.28-.17a5.8,5.8,0,0,0,2-2c.47-.85.92-1.72,1.37-2.58.08-.14.14-.27.21-.42h-5C39.89,26.28,40.25,28,40.61,29.74ZM19.05,43.56a2.13,2.13,0,1,0,2.09-2.11A2.11,2.11,0,0,0,19.05,43.56Zm19.78,0a2.07,2.07,0,0,0,2.09,2.13,2.12,2.12,0,1,0-2.09-2.13Zm8.38-24.07,1.19-2.26H46.48C46.72,18,47,18.69,47.21,19.48Z"/>
										</g>
									</g>
								</svg>

								<p class="hidden sm:inline-block uppercase text-sm icon-text absolute bottom-0 mont-semibold pb-6">Carrito</p>
							</div>
						</div>
					</div>
					<!-- ventana de carrito de compras -->
					<div class=" fixed right-0 top-0 w-1/5 z-20 h-screen show-hide-buyModal">
						<div class="relative bg-white w-full h-full px-4">
							<!-- titulo del modal -->
							<div class="w-full py-4 border-b-2 border-black">
								<p class="text-lg font-semibold">Carrito de compras</p>
							</div>
							<!-- listado de compras -->
							<ul class=" w-full flex flex-col">
								<!-- casilla de cada item -->
								<li class=" w-full flex flex-row py-4 h-32 border-b-2 border-black">
									<div class=" w-1/4 h-full">
										<!-- <img class="w-full h-full" src="https://via.placeholder.com/300" alt="placeholder"> -->
										<div class="w-full h-full bg-gray-500"></div>
									</div>
									<div class="w-3/4 flex flex-col px-2 justify-center">
										<div class="w-full flex flex-row mb-3">
											<div class="w-3/4">
												<p class=" leading-none font-semibold">Shampoo Revlon 200ml - Funcion Repara</p>
											</div>
											<div class="w-1/4 flex justify-end">
												<svg class=" w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
													<path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
												</svg>	
											</div>						
										</div>
										<div class="w-full flex flex-row">
											<div class="w-1/2 flex flex-row">	
												<div class="w-1/3">											
													<button class="w-full border rounded-lg bg-gray-200 focus:outline-none">-</button>
												</div>
												<div class="w-1/3">
													<input class="w-full border outline-none" type="text">
												</div>
												<div class="w-1/3">
													<button class="w-full border rounded-lg bg-gray-200 focus:outline-none">+</button>								
												</div>
											</div>
											<div class="w-1/2 flex justify-center">
												<p class=" font-semibold text-red-600 text-lg">S/51.20</p>
											</div>
										</div>
									</div>
								</li>
								<!-- casilla de cada item  end-->
							</ul>
							<!-- listado de compras -->

							<!-- zona de calculo -->
							<div class="w-full px-4  absolute bottom-0 left-0">
								<div class=" w-full flex flex-col border-t-2 border-black py-4">
									<div class="w-full flex flex-row justify-between mb-3">
										<p class="font-bold text-lg">Subtotal:</p>
										<p class="font-semibold text-lg text-red-600">S/ 119.20</p>
									</div>
									<button class="w-full p-3 bg-red-600 text-white font-semibold mb-2">Pagar Ahora</button>
									<button class="w-full p-3 border border-black">Continuar comprando</button>
								</div>
							</div>
							<!-- zona de calculo end-->
						</div>
					</div>
				</div>
				<!-- ventana de carrito de compras -->
				<div class="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-75 show-hide-opacityCap">
						<!-- just a trick -->
				</div>
			</div>
		</div>

		<!-- base opaca -->
		<div class="absolute w-full h-screen top-full z-10 left-0 bg-black opacity-50 sm:hidden"></div>
		<!-- base opaca end-->

		<!-- nav principal mobile -->
		<div :class="[showOrNot?'left-0':'left-less-full', showOrNot?'z-20':'z-0', 'swipe-transition']" class="absolute w-10/12 h-screen bg-white top-full sm:hidden">
			<div class="w-full px-2">
				<div class="w-full flex flex-row py-2 items-center border-b border-purple-neutral">
					<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.54 35.13">
						<title>user</title>
						<g id="Capa_2" data-name="Capa 2">
							<g id="Menus">
								<path class="fill-current text-purple-neutral" d="M33.49,33.79a48.68,48.68,0,0,0-1.65-5.91,15.6,15.6,0,0,0-7.55-8.37,20.68,20.68,0,0,0,1.92-3.16,19.59,19.59,0,0,0,1.15-4.26,10.48,10.48,0,0,0-4.77-10.6,12,12,0,0,0-12.49.56C5.78,5.26,5.26,11.33,7,15.75H7v0l.21.5a2.16,2.16,0,0,0,.19.31,10.34,10.34,0,0,0,1.13,1.93l.66,1.06A16.32,16.32,0,0,0,2.1,26.93c-.27.54-1,2.26-1.15,2.62a40.48,40.48,0,0,0-.9,4.07c-.11.64-.11,1.44.82,1.5s.93-.66,1-1.36A17.21,17.21,0,0,1,6.73,23.67c5.07,4,6.49,4.08,10.05.45,3.37,3.64,5.15,3.57,10.07-.5a17.34,17.34,0,0,1,4.81,10.23c.07.68.16,1.3,1,1.28s1-.69.86-1.34M8.37,22.42c1.69-1.49,2.06-1.53,3.87-.54a12.36,12.36,0,0,0,1.34.59c.46.17.93.31,1.39.46-1.16,2.71-4,2.5-6.6-.51m1.85-4.72h0a11.19,11.19,0,0,1-1.85-3.85c-.83-3.58-.68-7,2.2-9.71,2.72-2.53,6-2.81,9.45-1.74,4.12,1.3,6.3,5.57,5.36,10.38a14.68,14.68,0,0,1-2.83,5.82c-3.95,3.73-9,3.35-12.34-.9m8.36,5.4a19.39,19.39,0,0,1,3.91-1.86c.81-.19,1.83.51,2.83.83-2.39,3.36-5.2,3.67-6.74,1"/>
							</g>
						</g>
					</svg>

					<p class="mont-regular text-purple-neutral text-2xl uppercase">mi cuenta</p>
				</div>
			</div>

			<div class="w-full px-2">
				<div class="w-full flex flex-row py-2 items-center border-b border-purple-neutral">
					<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
						<title>categorias icon</title>
						<g id="Capa_2" data-name="Capa 2">
							<g id="Menus">
								<g id="Capa_9" data-name="Capa 9">
									<rect class="fill-current text-purple-neutral" width="18" height="18" rx="5"/>
									<rect class="fill-current text-purple-neutral" x="20" width="18" height="18" rx="5"/>
									<rect class="fill-current text-purple-neutral" y="20" width="18" height="18" rx="5"/>
									<path class="fill-current text-purple-neutral" d="M38,32.5A5.5,5.5,0,0,1,32.5,38h-8A5.5,5.5,0,0,1,19,32.5v-8A5.5,5.5,0,0,1,24.5,19h8A5.5,5.5,0,0,1,38,24.5Zm-1-8A4.49,4.49,0,0,0,32.5,20h-8A4.49,4.49,0,0,0,20,24.5v8A4.49,4.49,0,0,0,24.5,37h8A4.49,4.49,0,0,0,37,32.5Z"/>
								</g>
							</g>
						</g>
					</svg>
					<p class="mont-regular text-purple-neutral text-2xl uppercase">categorias</p>
				</div>
			</div>
		</div>
		<!-- nav principal mobile end-->

		<!-- nav cuenta -->
		<div class="absolute w-10/12 h-screen bg-white top-full  left-0 sm:hidden">
			<!-- sub nav tittle -->
			<div class="w-full flex flex-row py-2 bg-purple-neutral px-2 items-center">

				<svg class="w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.2 25.72">
					<title>volver</title>
					<g id="Capa_2" data-name="Capa 2">
						<g id="Menus">
							<path class="fill-current text-white" d="M.75,12.12,0,12.86,12.57,25.43A1,1,0,0,0,14,24L3,13.23,14,1.68A1,1,0,0,0,13.27,0a1,1,0,0,0-.7.29L.75,12.11h0"/>
							<path class="fill-current text-white" d="M11.69,12.12l-.74.74L23.52,25.43A1,1,0,0,0,24.91,24L14,13.23l11-11.55a1,1,0,0,0,0-1.39,1,1,0,0,0-1.39,0L11.69,12.11h0"/>
						</g>
					</g>
				</svg>
				
				<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.54 35.13">
					<title>user</title>
					<g id="Capa_2" data-name="Capa 2">
						<g id="Menus">
							<path class="fill-current text-white" d="M33.49,33.79a48.68,48.68,0,0,0-1.65-5.91,15.6,15.6,0,0,0-7.55-8.37,20.68,20.68,0,0,0,1.92-3.16,19.59,19.59,0,0,0,1.15-4.26,10.48,10.48,0,0,0-4.77-10.6,12,12,0,0,0-12.49.56C5.78,5.26,5.26,11.33,7,15.75H7v0l.21.5a2.16,2.16,0,0,0,.19.31,10.34,10.34,0,0,0,1.13,1.93l.66,1.06A16.32,16.32,0,0,0,2.1,26.93c-.27.54-1,2.26-1.15,2.62a40.48,40.48,0,0,0-.9,4.07c-.11.64-.11,1.44.82,1.5s.93-.66,1-1.36A17.21,17.21,0,0,1,6.73,23.67c5.07,4,6.49,4.08,10.05.45,3.37,3.64,5.15,3.57,10.07-.5a17.34,17.34,0,0,1,4.81,10.23c.07.68.16,1.3,1,1.28s1-.69.86-1.34M8.37,22.42c1.69-1.49,2.06-1.53,3.87-.54a12.36,12.36,0,0,0,1.34.59c.46.17.93.31,1.39.46-1.16,2.71-4,2.5-6.6-.51m1.85-4.72h0a11.19,11.19,0,0,1-1.85-3.85c-.83-3.58-.68-7,2.2-9.71,2.72-2.53,6-2.81,9.45-1.74,4.12,1.3,6.3,5.57,5.36,10.38a14.68,14.68,0,0,1-2.83,5.82c-3.95,3.73-9,3.35-12.34-.9m8.36,5.4a19.39,19.39,0,0,1,3.91-1.86c.81-.19,1.83.51,2.83.83-2.39,3.36-5.2,3.67-6.74,1"/>
						</g>
					</g>
				</svg>

				<p class="mont-regular text-white text-2xl uppercase">mi cuenta</p>
			</div>
			<!-- sub nav tittle end-->
			<div class="w-full px-2">
				<div class="w-full flex py-3 flex-col border-b border-purple-neutral">
					<div class="w-full flex flex-row py-2 items-center">
						<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.2 32.92">
							<title>carritochiquito</title>
							<g id="Capa_2" data-name="Capa 2">
								<g id="Menus">
									<path class="fill-current text-purple-neutral" d="M30.62,28.48a2.93,2.93,0,0,1,.3,2.55,2.73,2.73,0,0,1-1.13,1.42,2.81,2.81,0,0,1-3.38-.24,2.87,2.87,0,0,1-.52-3.72H17c.8,1.68.56,3.11-1.1,4.08a2.7,2.7,0,0,1-3.23-.43A2.86,2.86,0,0,1,12,31a3,3,0,0,1-.13-1.35,3,3,0,0,1,.51-1.26l-.15-.06A3.36,3.36,0,0,1,9.83,25.7c-.33-1.64-.71-3.28-1.06-4.92C8.37,19,8,17.11,7.58,15.28s-.79-3.66-1.19-5.5c-.33-1.53-.65-3.07-1-4.61a3.65,3.65,0,0,0-.83-1.55,3.74,3.74,0,0,0-1.4-1L3,2.79a1.69,1.69,0,0,1-1.86.56,1.71,1.71,0,0,1,1-3.29A1.4,1.4,0,0,1,3,.55a2,2,0,0,0,.78.54,5.81,5.81,0,0,1,2,1.41A5.42,5.42,0,0,1,7.08,5.2c0,.28.12.56.18.84.2-.13.38-.28.58-.39a3.2,3.2,0,0,1,1.68-.44H34.57a2.85,2.85,0,0,1,1.81.57,2.15,2.15,0,0,1,.82,1.81,3.86,3.86,0,0,1-.57,1.72c-.76,1.42-1.51,2.85-2.26,4.27-.63,1.18-1.26,2.35-1.88,3.53-.45.85-.91,1.7-1.35,2.54a5.74,5.74,0,0,1-2.52,2.43,6,6,0,0,1-2.85.69c-3.75,0-7.51,0-11.27,0-.55,0-1.11,0-1.66,0A4.12,4.12,0,0,1,11,22.14L10.78,22l-.08,0c.05.22.08.42.13.63.21,1,.45,1.94.63,2.93a1.8,1.8,0,0,0,1.63,1.31H32.41A.81.81,0,0,1,33,28.24a.78.78,0,0,1-.56.24H30.62ZM15.49,21.13q-.51-2.11-1-4.2H10a1.12,1.12,0,0,0,0,.21c.13.57.27,1.13.4,1.7a3,3,0,0,0,2.84,2.3h2.22m5.57,0c-.3-1.42-.6-2.81-.91-4.22h-4c0,.06,0,.08,0,.11.32,1.31.64,2.61.95,3.92,0,.14.08.19.24.19h3.7m5.43,0s0-.08,0-.11c-.28-1.31-.55-2.62-.82-3.94,0-.12-.08-.15-.2-.15H21.82c.31,1.42.61,2.81.9,4.2ZM8.81,11.9c.27,1.13.53,2.26.79,3.38h4.47c-.27-1.11-.54-2.2-.81-3.29a.19.19,0,0,0-.14-.1H8.92l-.11,0m22.66,3.4c0-.07,0-.13,0-.18-.34-1-.67-2.07-1-3.1a.18.18,0,0,0-.2-.14h-4l0,.15c.21,1,.43,2.05.63,3.07,0,.14.07.19.22.19h4.35M13.7,6.83a.9.9,0,0,0,0,.13c.25,1,.51,2.09.76,3.13,0,.13.08.16.21.16h4s0-.05,0-.07C18.47,9.12,18.24,8.06,18,7c0-.13-.08-.16-.2-.16H13.7Zm-.88,3.42s0,0,0,0C12.57,9.13,12.3,8,12,7a.15.15,0,0,0-.17-.13c-.8,0-1.59,0-2.39,0A1.37,1.37,0,0,0,8.06,8.63c.1.49.22,1,.32,1.45,0,.14.1.17.24.17h4.2Zm7,5s0-.11,0-.16q-.35-1.55-.66-3.09c0-.13-.08-.16-.21-.16h-4c.28,1.15.55,2.28.83,3.41ZM30.46,6.85a.36.36,0,0,0,0,.11l1,3.14a.18.18,0,0,0,.21.15h2.42a.23.23,0,0,0,.24-.15c.24-.46.49-.91.72-1.37a7.22,7.22,0,0,0,.45-1,.57.57,0,0,0-.37-.8,1.62,1.62,0,0,0-.53-.11H30.53l-.07,0m-10.8,0a.26.26,0,0,1,0,.07c.23,1.07.46,2.14.68,3.2,0,.12.08.14.19.14h3.69C24,9.09,23.75,8,23.52,6.84Zm4.91,5.05H20.74c.24,1.14.49,2.27.73,3.39h3.81c-.24-1.14-.48-2.26-.71-3.39m5.25-1.65s0-.06,0-.07L28.79,7c0-.14-.12-.17-.25-.17H25.38l-.18,0a.25.25,0,0,0,0,.09c.21,1,.43,2.1.65,3.15,0,.12.06.16.19.16h3.77M28,20.53h0l.19-.12A4.11,4.11,0,0,0,29.64,19c.32-.59.63-1.19.94-1.79l.15-.29H27.28c.26,1.21.5,2.41.75,3.6M13.15,30.07a1.47,1.47,0,1,0,1.45-1.46,1.48,1.48,0,0,0-1.45,1.46m13.65,0a1.46,1.46,0,1,0,1.46-1.45,1.47,1.47,0,0,0-1.46,1.45m5.79-16.61c.29-.55.55-1,.83-1.56H32.09c.16.51.32,1,.5,1.56"/>
								</g>
							</g>
						</svg>
						<p class="mont-regular text-gray-regular text-lg">Mis pedidos</p>
					</div>
					<div class="w-full flex flex-row py-2 items-center">
						<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.24 28.27">
							<title>lapiz</title>
							<g id="Capa_2" data-name="Capa 2">
								<g id="Menus">
									<path class="fill-current text-purple-neutral" d="M28.24,4.4a6,6,0,0,1-2.18,3.73C20.45,13.7,14.88,19.3,9.27,24.88a2.94,2.94,0,0,1-1,.66c-2.46.93-4.93,1.82-7.39,2.73H.47a.84.84,0,0,1-.38-1.16c.9-2.45,1.77-4.91,2.68-7.35A2.32,2.32,0,0,1,3.3,19L20.86,1.43a5,5,0,0,1,3-1.43h.38a4.78,4.78,0,0,1,2.85,1.38A5,5,0,0,1,28.24,4Zm-4.6,4.16-4-4c-.13.15-.24.33-.39.48-4.35,4.35-8.67,8.73-13.07,13A10.39,10.39,0,0,0,3.08,23c-.25,1-.67,1.88-1,2.83-.06.16-.1.33-.18.59,2-.72,3.85-1.4,5.73-2.1a2.05,2.05,0,0,0,.77-.5q2.7-2.67,5.38-5.36ZM21,3.47l3.79,3.85A16.12,16.12,0,0,0,26.16,6,2.77,2.77,0,0,0,22.32,2,14.77,14.77,0,0,0,21,3.47Z"/>
								</g>
							</g>
						</svg>
						<p class="mont-regular text-gray-regular text-lg">Mis reseñas</p>
					</div>
					<div class="w-full flex flex-row py-2 items-center">
						<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.75 20.47">
							<title>cupon</title>
							<g id="Capa_2" data-name="Capa 2">
								<g id="Menus">
									<path class="fill-current text-purple-neutral" d="M0,.42A3.67,3.67,0,0,1,1.05.05c2.09,0,4.18,0,6.28,0a2,2,0,0,1,1.05.5,8.07,8.07,0,0,1,.95,1c.15-.06.21-.07.24-.11C10.44.21,11.64,0,13.11,0,20.9.07,28.69,0,36.47,0c.52,0,1,0,1.28.55v19.3c-.34.18-.69.52-1,.52q-12.62,0-25.21,0a1.57,1.57,0,0,1-.87-.37,14.24,14.24,0,0,1-1.09-1.11c-.11,0-.18,0-.2.06-.93,1.37-2.27,1.56-3.8,1.46s-3,0-4.43-.05A3.43,3.43,0,0,1,0,19.88ZM36.14,18.87V1.59H35.08c-6.9,0-13.8.07-20.7,0-1.93,0-3.49.26-4.61,1.91a4.46,4.46,0,0,1-.41.38C8.78,3.21,8.22,2.59,7.63,2A1,1,0,0,0,7,1.61c-1.81,0-3.61,0-5.42,0V18.87a27.46,27.46,0,0,1,3.15,0A4,4,0,0,0,9,17.18a3.71,3.71,0,0,1,.53-.5c.48.49,1,.94,1.41,1.45a2.07,2.07,0,0,0,1.81.76c7.46,0,14.92,0,22.38,0Z"/>
									<path class="fill-current text-purple-neutral" d="M18.27,16.51c-.69,0-1.1-.56-.87-1a2.29,2.29,0,0,1,.51-.65Q23,9.68,28.16,4.56c.18-.18.36-.43.57-.47a1.12,1.12,0,0,1,.88.14,1.21,1.21,0,0,1,.12.88c0,.18-.27.34-.43.5Q24.16,10.77,19,15.92A8.31,8.31,0,0,1,18.27,16.51Z"/>
									<path class="fill-current text-purple-neutral" d="M26.75,10.27a3.09,3.09,0,0,1,3.12,3.14,3.16,3.16,0,0,1-3.18,3.11,3.1,3.1,0,0,1-3.06-3.21A3.05,3.05,0,0,1,26.75,10.27Zm0,1.54a1.53,1.53,0,0,0-1.59,1.57A1.59,1.59,0,0,0,26.76,15a1.67,1.67,0,0,0,1.57-1.56A1.6,1.6,0,0,0,26.76,11.81Z"/>
									<path class="fill-current text-purple-neutral" d="M20.42,10.19A3.12,3.12,0,0,1,17.3,7a3.2,3.2,0,0,1,3.21-3.1,3.14,3.14,0,0,1,3,3.15A3.06,3.06,0,0,1,20.42,10.19Zm0-1.54A1.54,1.54,0,0,0,22,7.06a1.6,1.6,0,0,0-1.53-1.57,1.68,1.68,0,0,0-1.64,1.57A1.62,1.62,0,0,0,20.44,8.65Z"/>
									<path class="fill-current text-purple-neutral" d="M10.33,5.68c-.31.2-.62.56-.93.55s-.65-.45-.66-.71a1,1,0,0,1,.66-.71c.3,0,.62.33.93.52Z"/>
									<path class="fill-current text-purple-neutral" d="M9.38,7.6c.39.47.83.78.79,1s-.47.56-.73.84c-.25-.25-.65-.48-.7-.76S9.06,8.1,9.38,7.6Z"/>
									<path class="fill-current text-purple-neutral" d="M9.41,10.73c.38.48.8.8.76,1s-.49.52-.76.77c-.24-.25-.64-.49-.67-.76S9.08,11.21,9.41,10.73Z"/>
									<path class="fill-current text-purple-neutral" d="M9.46,13.84c.35.53.72.85.71,1.15s-.51.69-.72.65a1.1,1.1,0,0,1-.71-.74C8.7,14.66,9.09,14.35,9.46,13.84Z"/>
								</g>
							</g>
						</svg>
						<p class="mont-regular text-gray-regular text-lg">Mis cupones</p>
					</div>
				</div>
			</div>

			<div class="w-full px-2">
				<div class="w-full flex py-3 flex-col border-b border-purple-neutral">
					<div class="w-full flex flex-row py-2 items-center">
						<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.54 35.13">
							<title>user</title>
							<g id="Capa_2" data-name="Capa 2">
								<g id="Menus">
									<path class="fill-current text-purple-neutral" d="M33.49,33.79a48.68,48.68,0,0,0-1.65-5.91,15.6,15.6,0,0,0-7.55-8.37,20.68,20.68,0,0,0,1.92-3.16,19.59,19.59,0,0,0,1.15-4.26,10.48,10.48,0,0,0-4.77-10.6,12,12,0,0,0-12.49.56C5.78,5.26,5.26,11.33,7,15.75H7v0l.21.5a2.16,2.16,0,0,0,.19.31,10.34,10.34,0,0,0,1.13,1.93l.66,1.06A16.32,16.32,0,0,0,2.1,26.93c-.27.54-1,2.26-1.15,2.62a40.48,40.48,0,0,0-.9,4.07c-.11.64-.11,1.44.82,1.5s.93-.66,1-1.36A17.21,17.21,0,0,1,6.73,23.67c5.07,4,6.49,4.08,10.05.45,3.37,3.64,5.15,3.57,10.07-.5a17.34,17.34,0,0,1,4.81,10.23c.07.68.16,1.3,1,1.28s1-.69.86-1.34M8.37,22.42c1.69-1.49,2.06-1.53,3.87-.54a12.36,12.36,0,0,0,1.34.59c.46.17.93.31,1.39.46-1.16,2.71-4,2.5-6.6-.51m1.85-4.72h0a11.19,11.19,0,0,1-1.85-3.85c-.83-3.58-.68-7,2.2-9.71,2.72-2.53,6-2.81,9.45-1.74,4.12,1.3,6.3,5.57,5.36,10.38a14.68,14.68,0,0,1-2.83,5.82c-3.95,3.73-9,3.35-12.34-.9m8.36,5.4a19.39,19.39,0,0,1,3.91-1.86c.81-.19,1.83.51,2.83.83-2.39,3.36-5.2,3.67-6.74,1"/>
								</g>
							</g>
						</svg>
						<p class="mont-regular text-gray-regular text-lg">Mis datos personales</p>
					</div>
					<div class="w-full flex flex-row py-2 items-center">
						<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.29 33.38">
							<title>ubicacion</title>
							<g id="Capa_2" data-name="Capa 2">
								<g id="Grilla_12" data-name="Grilla 12">
									<path class="fill-current text-purple-neutral" d="M11.12,0a11.71,11.71,0,0,1,11.6,8.12,11.53,11.53,0,0,1-1,9.32c-.75,1.35-1.48,2.71-2.21,4.07q-2.72,5-5.41,10a4.22,4.22,0,0,1-.92,1.23A2.23,2.23,0,0,1,10,32.65a4.29,4.29,0,0,1-.75-1C6.72,27,4.24,22.4,1.74,17.78a17.35,17.35,0,0,1-1-2.17,11.23,11.23,0,0,1-.63-4.94,11.45,11.45,0,0,1,6.7-9.59A10.58,10.58,0,0,1,11.12,0ZM1.36,11.8a9.68,9.68,0,0,0,.29,2.28,12,12,0,0,0,1.22,3C4.27,19.6,5.63,22.18,7,24.74Q8.69,27.85,10.38,31a3,3,0,0,0,.57.75,1,1,0,0,0,1.39,0,3.25,3.25,0,0,0,.56-.76q2.61-4.79,5.2-9.59c.84-1.57,1.7-3.13,2.54-4.7a10.15,10.15,0,0,0,1.08-7.06A10.29,10.29,0,0,0,1.36,11.8Z"/>
									<path class="fill-current text-purple-neutral" d="M11.64,18.68a6.45,6.45,0,1,1,6.44-6.44A6.45,6.45,0,0,1,11.64,18.68Zm-5.1-6.46a5.1,5.1,0,1,0,5.13-5.1A5.12,5.12,0,0,0,6.54,12.22Z"/>
								</g>
							</g>
						</svg>
						<p class="mont-regular text-gray-regular text-lg">Mis direcciones</p>
					</div>
					<div class="w-full flex flex-row py-2 items-center">
						<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.8 23.59">
							<title>cardbuy</title>
							<g id="Capa_2" data-name="Capa 2">
								<g id="Menus">
									<g id="Capa_9" data-name="Capa 9">
										<path class="fill-current text-purple-neutral" d="M18.93,0H34.87a2.83,2.83,0,0,1,2.86,2.26,4.35,4.35,0,0,1,.07.88V20.67a2.86,2.86,0,0,1-2.92,2.92h-32A2.82,2.82,0,0,1,.08,21.37a4.4,4.4,0,0,1-.08-1V3A2.84,2.84,0,0,1,2.94,0h16Zm17,11.27h-34v9.38a.93.93,0,0,0,1,1h32a.94.94,0,0,0,1-1v-9.4Zm-34-6.85h34c0-.13,0-.23,0-.34,0-.37,0-.73,0-1.1a1,1,0,0,0-1.07-1.07h-32a.88.88,0,0,0-.9.79C1.9,3.27,1.92,3.83,1.92,4.42Z"/>
										<path class="fill-current text-purple-neutral" d="M30.28,20.46A3.55,3.55,0,0,1,28.57,20a.32.32,0,0,0-.34,0,3.78,3.78,0,0,1-4.06-.29,4,4,0,0,1,.35-6.8,3.79,3.79,0,0,1,3.68-.08.38.38,0,0,0,.41,0A4,4,0,0,1,34,14.74a4,4,0,0,1-3.7,5.72Zm3.12-4a3.06,3.06,0,1,0-3,3.06A3.06,3.06,0,0,0,33.4,16.45Zm-5.9-2.84a3,3,0,0,0-3.49,1,3,3,0,0,0,.33,4.06,3,3,0,0,0,3.16.61,4,4,0,0,1-1.16-2.83A4.09,4.09,0,0,1,27.5,13.61Z"/>
									</g>
								</g>
							</g>
						</svg>
						<p class="mont-regular text-gray-regular text-lg">Datos de facturacion</p>
					</div>
				</div>
			</div>
		</div>
		<!-- nav cuenta end-->

		<!-- nav categorias -->
		<div class="absolute w-10/12 h-screen bg-white top-full  left-0 sm:hidden">
			<!-- sub nav tittle -->
			<div class="w-full flex flex-row py-2 bg-purple-neutral px-2 items-center">
				<svg class="w-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.2 25.72">
					<title>volver</title>
					<g id="Capa_2" data-name="Capa 2">
						<g id="Menus">
							<path class="fill-current text-white" d="M.75,12.12,0,12.86,12.57,25.43A1,1,0,0,0,14,24L3,13.23,14,1.68A1,1,0,0,0,13.27,0a1,1,0,0,0-.7.29L.75,12.11h0"/>
							<path class="fill-current text-white" d="M11.69,12.12l-.74.74L23.52,25.43A1,1,0,0,0,24.91,24L14,13.23l11-11.55a1,1,0,0,0,0-1.39,1,1,0,0,0-1.39,0L11.69,12.11h0"/>
						</g>
					</g>
				</svg>
				
				<svg class="w-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
					<title>categorias icon</title>
					<g id="Capa_2" data-name="Capa 2">
						<g id="Menus">
							<g id="Capa_9" data-name="Capa 9">
								<rect class="fill-current text-white" width="18" height="18" rx="5"/>
								<rect class="fill-current text-white" x="20" width="18" height="18" rx="5"/>
								<rect class="fill-current text-white" y="20" width="18" height="18" rx="5"/>
								<path class="fill-current text-white" d="M38,32.5A5.5,5.5,0,0,1,32.5,38h-8A5.5,5.5,0,0,1,19,32.5v-8A5.5,5.5,0,0,1,24.5,19h8A5.5,5.5,0,0,1,38,24.5Zm-1-8A4.49,4.49,0,0,0,32.5,20h-8A4.49,4.49,0,0,0,20,24.5v8A4.49,4.49,0,0,0,24.5,37h8A4.49,4.49,0,0,0,37,32.5Z"/>
							</g>
						</g>
					</g>
				</svg>
				<p class="mont-regular text-white text-2xl uppercase">categorias</p>
			</div>
			<!-- sub nav tittle end-->

			<div class="w-full flex flex-row flex-wrap px-2">
				<div @click="eligeCategoria(index)" v-for="(categoria, index) of categoriasIcons" :key="categoria.id" class="w-1/2 flex flex-col py-2 px-2">
					<div class="w-full h-24 mb-1">
						<img class="w-full h-full" :src="categoria.src" :alt="categoria.categoriName">
					</div>
					<div class="w-full flex justify-center">
						<p class="text-purple-neutral mont-regular">{{categoria.categoriName}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- nav categorias end-->

		<!-- nav despues de elegir una categoria -->
		<div class="absolute w-10/12 h-screen bg-white top-full  left-0 sm:hidden">

			<div class="w-full flex flex-row py-2 bg-purple-neutral px-2 mb-3 items-center">
				<svg class="w-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.2 25.72">
					<title>volver</title>
					<g id="Capa_2" data-name="Capa 2">
						<g id="Menus">
							<path class="fill-current text-white" d="M.75,12.12,0,12.86,12.57,25.43A1,1,0,0,0,14,24L3,13.23,14,1.68A1,1,0,0,0,13.27,0a1,1,0,0,0-.7.29L.75,12.11h0"/>
							<path class="fill-current text-white" d="M11.69,12.12l-.74.74L23.52,25.43A1,1,0,0,0,24.91,24L14,13.23l11-11.55a1,1,0,0,0,0-1.39,1,1,0,0,0-1.39,0L11.69,12.11h0"/>
						</g>
					</g>
				</svg>

				<div class="w-8 h-8 mr-2">
					<img class="w-full h-full" :src="nextNav.nextNavSrc" :alt="nextNav.nextNavTittle">
				</div>
				
				<p class="mont-regular text-white text-2xl uppercase">{{nextNav.nextNavTittle}}</p>
			</div>

			<ul class="w-full flex flex-col px-2">
				<li class="mont-regular text-xl text-gray-neutral px-6 pb-3">Amazonia</li>
				<li class="mont-regular text-xl text-gray-neutral px-6 pb-3">Amazonia</li>
				<li class="mont-regular text-xl text-gray-neutral px-6 pb-3">Amazonia</li>
				<li class="mont-regular text-xl text-gray-neutral px-6 pb-3">Amazonia</li>
				<li class="mont-regular text-xl text-gray-neutral px-6 pb-3">Amazonia</li>
				<li class="mont-regular text-xl text-gray-neutral px-6 pb-3">Amazonia</li>
			</ul>
		</div>
		<!-- nav despues de elegir una categoria end-->
	</section>
</template>

<script>
import '@/assets/css/style.css'
import logo from '@/assets/img/logo.png'
import CabeceraBarraNav from '@/components/cabecera/CabeceraBarraNav.vue'

export default {
	name: 'CabeceraBarraUtilidades',
	components:{
		CabeceraBarraNav
	},
	data(){
		return{
			logo: logo,
			categoriasIcons:[
				{
					src: 'https://via.placeholder.com/150',
					categoriName: 'Acondicionador'
				},
				{
					src: 'https://via.placeholder.com/150',
					categoriName: 'Shampoos'
				},
				{
					src: 'https://via.placeholder.com/150',
					categoriName: 'Mascarilla'
				},
				{
					src: 'https://via.placeholder.com/150',
					categoriName: 'Oil'
				},
				{
					src: 'https://via.placeholder.com/150',
					categoriName: 'Serum'
				},
				{
					src: 'https://via.placeholder.com/150',
					categoriName: 'Reparadores'
				},
			],
			nextNav:{
				nextNavSrc:'',
				nextNavTittle: ''
			},
			showOrNot:false,
		}
	},
	methods:{
		showPrincipalMenu(){
			if (this.showOrNot == false) {
				this.showOrNot = true
			}
		},
		eligeCategoria(index){
			this.nextNav.nextNavTittle = this.categoriasIcons[index].categoriName,
			this.nextNav.nextNavSrc = this.categoriasIcons[index].src
		}
	}
}
</script>

<style lang="css">
	.burguer-btn:hover{
		background: white;
		border-radius: 0 0 8px 8px;
		height: 110%;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	.burguer-btn:hover .burguerText{
		color: #8E4560;
	}

	.burguer-btn:hover svg{
		fill: #8E4560;
	}
	.burguer-btn:hover > .drop-nav-container{
		visibility: visible;
	}

	@media (max-width: 640px){
		.burguer-btn:hover{
			background: transparent;
			border-radius: none;
			height: 100%;
			box-shadow: none;
		}
		.burguer-btn:hover svg{
			fill: #ffffff;
		}

		.swipe-transition{
			transition: ease-in all .2s;
		}
	}
</style>
