<template>
	<section class="w-full relative">
		<nav class="container mx-auto ">
			<ul class="flex justify-between">
				<li class="font-semibold hover:text-red-700 py-3 navItem">
					<a href="#">Acondicionadores</a>

					<!-- drop nav  -->
					<div class="w-full bg-white absolute left-0 top-full show-hide-dropnav border border-t-2 border-b-2 z-10">
						<div class="container mx-auto">
							<div class="sm:flex mb-4 flex-col">
								<div class="flex w-full mb-4">
									<div class=" w-1/4">
										<div class="text-red-600 mb-2">Amazonia</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>

									<div class=" w-1/4">
										<div class="text-red-600 mb-2">Expert</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>
									<div class=" w-1/4">
										<div class="text-red-600 mb-2">Expert</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>
									<div class=" w-1/4">
										<div class="text-red-600 mb-2">Expert</div>
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
										<div class="text-red-600 mb-2">Amazonia</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>

									<div class=" w-1/4">
										<div class="text-red-600 mb-2">Expert</div>
										<ul class="list-reset leading-normal">
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Loreal</a></li>
											<li style="color: grey!important;"><a href="#">Revlon</a></li>
											<li style="color: grey!important;"><a href="#">Ver Todo</a></li>
											<li style="color: black!important;"><a href="#">Ver Todo</a></li>
										</ul>
									</div>
									<div class=" w-1/4">
										<div class="text-red-600 mb-2">Expert</div>
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
				<li class="font-semibold hover:text-red-700 py-3"><a href="#">Shampoos</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a href="#">Mascarillas</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a href="#">Oil</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a href="#">Serum</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a href="#">Reparadores</a></li>
				<li class="font-semibold hover:text-red-700 py-3"><a href="#">Mousse</a></li>
				<li class="font-semibold hover:text-red-700 py-3 underline"><a href="#">Ver mas</a></li>
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