<template>
  <div>
    <header class="w-full">
      <CabeceraBarraUtilidades />
    </header>
    <main class="w-full pb-5 bg-gray-superLight">
      <div class="w-full border-b-2">
        <div class="container py-3 px-3 mx-auto text-right z-30">
          <p class="mont-medium text-xl text-purple-neutral">
            Hola Mario
          </p>
        </div>
      </div>
      <div class="text-center mx-auto mb-4 py-3 bg-purple-neutral">
        <h1 class=" text-2xl uppercase text-white oswald-medium">
          carrito de compras
        </h1>
      </div>
      <section class="container mx-auto flex flex-row">
        <div class="flex w-8/12">
          <div class="w-full flex flex-col pr-2">
            <div class="w-full flex flex-row py-3 px-2 bg-white mb-2">
              <div class="w-3/6">
                <p class="mont-semibold text-purple-intense text-1xs">
                  Producto
                </p>
              </div>
              <div class="w-1/6">
                <p class="mont-semibold text-purple-intense text-1xs">
                  Precio
                </p>
              </div>
              <div class="w-1/6">
                <p class="mont-semibold text-purple-intense text-1xs">
                  Cantidad
                </p>
              </div>
              <div class="w-1/6">
                <p class="mont-semibold text-purple-intense text-1xs">
                  Subtotal
                </p>
              </div>
            </div>
            <ul class="w-full flex flex-col bg-white shadow-style">
              <li class=" w-full flex flex-row py-2 px-2 h-24">
                <div class="w-full flex flex-row border border-gray-superLight">
                  <div class=" w-3/6 flex flex-row h-full items-center">
                    <div class=" w-1/4 h-full py-2 px-2 border-r border-gray-superLight">
                      <img
                        class="w-full h-full"
                        src="https://via.placeholder.com/300"
                        alt="placeholder"
                      >
                    </div>
                    <div class="w-3/4 flex h-full py-2 border-r border-gray-superLight">
                      <div class="w-full px-2 flex flex-col justify-center">
                        <p class="mont-semibold text-2xs text-purple-intense">
                          Marca: Revlon
                        </p>
                        <p class="mont-semibold text-xs text-gray-intense">
                          Shampoo Revlon 200ml
                        </p>
                        <p class="mont-regular text-xs text-gray-intense">
                          Para cabello con tinte
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class=" w-1/6">
                    <div
                      class="w-full flex items-center px-2 h-full py-2 border-r border-gray-superLight"
                    >
                      <p class=" text-lg mont-semibold text-red-intense">
                        S/51.20
                      </p>
                    </div>
                  </div>

                  <div class="w-1/6 flex flex-row items-center">
                    <div
                      class="w-full flex-row flex h-full items-center px-2 border-r border-gray-superLight"
                    >
                      <div
                        class="w-full relative h-full/2 flex flex-row border border-purple-intense rounded"
                      >
                        <div class="w-1/2">
                          <button
                            class=" bg-gray-neutral text-2xl text-left text-white font-bold rounded w-full focus:outline-none"
                            style="padding-left: 30%;"
                          >
                            -
                          </button>
                        </div>
                        <div class="w-1/3 flex h-full bottom-o absolute cantidad-inp">
                          <input
                            class="w-full h-full outline-none rounded text-xl mont-semibold text-gray-neutral text-center"
                            type="text"
                            aria-label="cantidad"
                          >
                        </div>
                        <div class="w-1/2">
                          <button
                            class="bg-purple-intense text-2xl text-right font-bold text-white rounded w-full focus:outline-none"
                            style="padding-right: 30%;"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="w-1/6 flex flex-row items-center justify-between">
                    <div class="w-3/4 h-full">
                      <div
                        class="w-full flex items-center p-2 border-r border-gray-superLight h-full"
                      >
                        <p class=" text-lg mont-semibold text-red-intense">
                          S/51.20
                        </p>
                      </div>
                    </div>

                    <div class="w-1/4 h-full">
                      <div class="w-full flex items-center justify-center h-full">
                        <svg
                          class="w-6 fill-current text-red-intense"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class=" w-full flex flex-row py-2 px-2 h-24">
                <div class="w-full flex flex-row border border-gray-superLight">
                  <div class=" w-3/6 flex flex-row h-full items-center">
                    <div class=" w-1/4 h-full py-2 px-2 border-r border-gray-superLight">
                      <img
                        class="w-full h-full"
                        src="https://via.placeholder.com/300"
                        alt="placeholder"
                      >
                    </div>
                    <div class="w-3/4 flex h-full py-2 border-r border-gray-superLight">
                      <div class="w-full px-2 flex flex-col justify-center">
                        <p class="mont-semibold text-2xs text-purple-intense">
                          Marca: Revlon
                        </p>
                        <p class="mont-semibold text-xs text-gray-intense">
                          Shampoo Revlon 200ml
                        </p>
                        <p class="mont-regular text-xs text-gray-intense">
                          Para cabello con tinte
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class=" w-1/6">
                    <div
                      class="w-full flex items-center px-2 h-full py-2 border-r border-gray-superLight"
                    >
                      <p class=" text-lg mont-semibold text-red-intense">
                        S/51.20
                      </p>
                    </div>
                  </div>

                  <div class="w-1/6 flex flex-row items-center">
                    <div
                      class="w-full flex-row flex h-full items-center px-2 border-r border-gray-superLight"
                    >
                      <div
                        class="w-full relative h-full/2 flex flex-row border border-purple-intense rounded"
                      >
                        <div class="w-1/2">
                          <button
                            class=" bg-gray-neutral text-2xl text-left text-white font-bold rounded w-full focus:outline-none"
                            style="padding-left: 30%;"
                          >
                            -
                          </button>
                        </div>
                        <div class="w-1/3 flex h-full bottom-o absolute cantidad-inp">
                          <input
                            class="w-full h-full outline-none rounded text-xl mont-semibold text-gray-neutral text-center"
                            type="text"
                            aria-label="cantidad"
                          >
                        </div>
                        <div class="w-1/2">
                          <button
                            class="bg-purple-intense text-2xl text-right font-bold text-white rounded w-full focus:outline-none"
                            style="padding-right: 30%;"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="w-1/6 flex flex-row items-center justify-between">
                    <div class="w-3/4 h-full">
                      <div
                        class="w-full flex items-center p-2 border-r border-gray-superLight h-full"
                      >
                        <p class=" text-lg mont-semibold text-red-intense">
                          S/51.20
                        </p>
                      </div>
                    </div>

                    <div class="w-1/4 h-full">
                      <div class="w-full flex items-center justify-center h-full">
                        <svg
                          class="w-6 fill-current text-red-intense"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex w-4/12 flex-col bg-white shadow-style">
          <!-- titulo del modal -->
          <div class="w-full py-2 bg-purple-neutral px-3">
            <p class=" text-lg font-semibold text-white">
              Resumen del pedido
            </p>
          </div>
          <!-- listado de compras -->

          <div class="w-full flex flex-col px-3">
            <div class="py-2 flex flex-row items-center">
              <p class="mont-semibold text-lg text-gray-intense mr-3">
                Si tienes un cupon
              </p>
              <a class="mont-semibold text-lg text-purple-neutral"
href="#">usalo aqui</a>
            </div>
            <div class="w-full flex flex-row border-b border-gray-superLight pb-3 mb-3">
              <input
                class="w-3/4 border border-purple-neutral rounded outline-none mr-3"
                type="text"
                aria-label="cupon"
              >
              <button
                class=" w-1/4 mont-semibold bg-red-intense text-white uppercase rounded-lg py-2 px-3 focus:outline-none"
              >
                Aplicar
              </button>
            </div>
          </div>

          <ul class="w-full flex flex-col px-3">
            <li class="w-full flex flex-row justify-between mb-3">
              <p class="mont-medium text-1xl text-gray-intense">
                Cantidad
              </p>
              <p class="mont-medium text-1xl text-purple-neutral">
                2 und
              </p>
            </li>
            <li class="w-full flex flex-row justify-between mb-3">
              <p class="mont-medium text-1xl text-gray-intense">
                Subtotal
              </p>
              <p class="mont-medium text-1xl text-purple-neutral">
                164.20
              </p>
            </li>
            <li
              class="w-full flex flex-row justify-between pb-3 mb-3 border-b border-gray-superLight"
            >
              <p class="mont-medium text-1xl text-gray-intense">
                Descuento
              </p>
              <p class="mont-medium text-1xl text-red-intense">
                (45.00)
              </p>
            </li>
          </ul>

          <!-- zona de calculo -->
          <div class=" w-full flex flex-col border-t-2 border-black py-4 px-3">
            <div class="w-full flex flex-row justify-between mb-3">
              <p class="mont-medium text-gray-intense text-1xl">
                Total:
              </p>
              <p class="mont-semibold text-red-intense text-1xl">
                S/ 119.20
              </p>
            </div>
            <button
              class="w-full p-3 bg-purple-intense text-white mont-semibold uppercase rounded mb-2"
            >
              Continuar
            </button>
          </div>
          <!-- zona de calculo end-->
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import "@/assets/css/style.css";
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades";
import Footer from "@/components/footer/Footer";

export default {
  name: "Carritocompras",
  components: {
    CabeceraBarraUtilidades,
    Footer
  }
};
</script>
