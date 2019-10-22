<template>
	<section class="w-full absolute drop-nav-container">
		<nav class="container mx-auto ">
			<ul class="flex justify-between">
				<li class="font-semibold hover:text-red-700 py-3 navItem">
					<a class="mont-regular text-gray-intense text-xl" href="#">Acondicionadores</a>

					<!-- drop nav  -->
					<div class="w-full bg-white absolute left-0 top-full show-hide-dropnav border border-t-2 border-b-2 z-10">
						<div class="container mx-auto">
							<div class="sm:flex mb-4 flex-col">
								<div class="flex w-full mb-4">
									<div class=" w-1/4">
										<div class="mb-2 mont-semibold text-xl text-red-intense">Amazonia</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>

									<div class=" w-1/4">
										<div class="text-red-600 mb-2 mont-semibold text-xl text-red-intense">Expert</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>
									<div class=" w-1/4">
										<div class="text-red-600 mb-2 mont-semibold text-xl text-red-intense">Expert</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>
									<div class=" w-1/4">
										<div class="text-red-600 mb-2 mont-semibold text-xl text-red-intense">Expert</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>
								</div>
								<div class="flex w-full">
									<div class=" w-1/4">
										<div class="text-red-600 mb-2 mont-semibold text-xl text-red-intense">Amazonia</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>

									<div class=" w-1/4">
										<div class="text-red-600 mb-2 mont-semibold text-xl text-red-intense">Expert</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>
									<div class=" w-1/4">
										<div class="text-red-600 mb-2 mont-semibold text-xl text-red-intense">Expert</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>
									<div class=" w-1/4">
										<div class="text-red-600 mb-2"><a class="underline" href="#">Ver Todo</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- drop nav  -->
				</li>
				<li class="font-semibold hover:text-red-700 py-3"><a class="mont-regular text-gray-intense text-xl" href="#">Shampoos</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a class="mont-regular text-gray-intense text-xl" href="#">Mascarillas</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a class="mont-regular text-gray-intense text-xl" href="#">Oil</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a class="mont-regular text-gray-intense text-xl" href="#">Serum</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a class="mont-regular text-gray-intense text-xl" href="#">Reparadores</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a class="mont-regular text-gray-intense text-xl" href="#">Mousse</a></li>
				<li class="font-semibold hover:text-red-700 py-3 underline"><a class="mont-regular text-gray-intense text-xl" href="#">Ver mas</a></li>
			</ul>
		</nav>
	</section>
</template>

<script>
import '@/assets/css/style.css'

export default {
	name: 'CabeceraBarraNav'
}
</script>

<style lang="css">
	.drop-nav-container{
		bottom: 0;
		transform: translateY(100%);
		left: 0;
		visibility: hidden;
		z-index: 10;
		background: white;
	}

	.drop-nav-container:hover{
		visibility: visible;
	}
</style>