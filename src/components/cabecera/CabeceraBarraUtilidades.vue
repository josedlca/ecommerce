<template>
  <section class="w-full h-20 sm:h-28 relative"
:class="'colorPrimarioUno'">
    <div class="container flex content-center h-full mx-auto">
      <!-- drop menu icon -->
      <div class="self-center w-2/12 flex justify-center h-full">
        <div class="burguer-btn h-full w-full">
          <div class="inline-block h-full flex flex-col justify-center w-full items-center">
            <p
              class="text-white txt-regular font-light mont-regular burguerText hidden sm:inline-block"
            >
              Categoria
            </p>
            <svg
              class=" w-8 sm:w-12 fill-current text-white mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </div>

          <CabeceraBarraNav />
        </div>
      </div>

      <!-- brand and search bar  -->
      <div class="w-8/12 sm:w-7/12 self-center flex content-center">
        <a class="self-center w-4/12 flex flex-col pr-1 sm:px-2"
href="#">
          <img :src="logo"
alt="logo"
/>
          <p class="text-white text-4xs sm:text-xs mont-regular text-center">
            Profesional Hair
          </p>
        </a>

        <div class="self-center w-8/12 relative inline-block h-full searchInp sm:pr-2">
          <input
            class="w-full outline-none text-xs sm:text-lg px-1 py-2 sm:p-5 mont-regular rounded-lg border sm:border-2 border-white"
            type="text"
            placeholder="Buscar Producto..."
          >
          <button class="absolute right-0 top-0 px-2 sm:px-5 flex h-full focus:outline-none">
            <svg
              id="Capa_1"
              class=" w-5"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="33.803px"
              height="34.603px"
              viewBox="0 0 33.803 34.603"
              enable-background="new 0 0 33.803 34.603"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    fill="#E6E6E6"
                    d="M21.998,22.37c-5.17,4.965-13.415,4.799-18.381-0.372c-4.965-5.17-4.798-13.416,0.371-18.381
									C9.159-1.348,17.404-1.181,22.37,3.989C27.336,9.159,27.169,17.405,21.998,22.37z M5.375,5.06C1,9.261,0.859,16.238,5.061,20.613
									c4.2,4.375,11.178,4.516,15.553,0.314c4.375-4.201,4.516-11.178,0.314-15.553C16.726,1,9.749,0.858,5.375,5.06z"
                  />
                </g>
                <g>
                  <rect
                    x="26.193"
                    y="19.279"
                    transform="matrix(0.7212 -0.6927 0.6927 0.7212 -11.6619 26.5799)"
                    fill="#E6E6E6"
                    width="2"
                    height="17.001"
                  />
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
          <div class="absolute w-full h-full z-10 px-2"
style="height: 110%">
            <div
              class="w-full flex flex-col items-center justify-center rounded-b-lg sm:shadow-4xl-dark h-full utility-icon relative"
            >
              <svg class=" w-20 mb-6"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.98 26.93">
                <title>Recurso 2</title>
                <g id="Capa_2"
data-name="Capa 2">
                  <g id="Capa_1-2"
data-name="Capa 1">
                    <path
                      class="delivery-icon-color"
                      d="M52.58,22.63H26.19c-.06.23-.1.45-.17.67A4.94,4.94,0,0,1,16.41,23c-.06-.29-.16-.37-.44-.37-1.43,0-2.85,0-4.27,0a1,1,0,0,1-1.06-1.41l1.89-6.13a1,1,0,0,1,1-.74,1,1,0,0,1,.89.86,1.55,1.55,0,0,1-.08.56L13,20.24c0,.13-.07.27-.12.45.92,0,1.82,0,2.71,0A1,1,0,0,0,16.78,20,4.78,4.78,0,0,1,21.36,17a4.92,4.92,0,0,1,4.55,3.27.46.46,0,0,0,.53.39h16.2c.33,0,.45-.12.54-.42,1.81-6,3.71-12,5.24-18a2.86,2.86,0,0,0,.06-.31H18.16c-.32,0-.47.09-.53.39a4.52,4.52,0,0,1-.21.62,1,1,0,0,1-1.82-.62c.17-.56.36-1.12.56-1.67A1,1,0,0,1,17,0H49.7a1,1,0,0,1,1,1.27c-.13.56-.28,1.12-.42,1.68,0,0,0,0,0,.08H58a1.29,1.29,0,0,1,1.27.72q2.23,3.91,4.5,7.79a1.41,1.41,0,0,0,.5.5c1.34.8,2.7,1.57,4,2.36a1,1,0,0,1,.55,1.34q-.87,3-1.75,6a1,1,0,0,1-1.17.88H62.44a5,5,0,0,1-2,3.34,4.84,4.84,0,0,1-3.09,1C55,26.88,53.21,25.3,52.58,22.63Zm-7.09-2,.14,0c2.29,0,4.59,0,6.88,0,.1,0,.25-.15.29-.26a5,5,0,0,1,9.41,0,.32.32,0,0,0,.38.26c.85,0,1.69,0,2.54,0,.26,0,.35-.1.41-.33.41-1.44.83-2.88,1.26-4.31a.32.32,0,0,0-.18-.45c-1.22-.69-2.43-1.38-3.63-2.1a2,2,0,0,1-.66-.66Q60.14,9.11,58,5.36A.67.67,0,0,0,57.32,5c-2.33,0-4.67,0-7,0a.52.52,0,0,0-.61.45Q48,11.49,46.31,17.57C46,18.59,45.76,19.62,45.49,20.65Zm12-1.67a3,3,0,1,0,3,3A3,3,0,0,0,57.52,19ZM21.27,19a3,3,0,1,0,3,3A3,3,0,0,0,21.27,19Z"
                    />
                    <path
                      class="delivery-icon-color"
                      d="M12.61,6.35H1.27C.45,6.35,0,6,0,5.39s.45-1,1.29-1H24a2.32,2.32,0,0,1,.53,0,.94.94,0,0,1,.75,1,1,1,0,0,1-.8.9,4.26,4.26,0,0,1-.5,0Z"
                    />
                    <path
                      class="delivery-icon-color"
                      d="M19.54,7.83h8.54a2.07,2.07,0,0,1,.5,0,1,1,0,0,1,.07,1.83,1.66,1.66,0,0,1-.49.07H10.85c-.82,0-1.32-.59-1.09-1.27a.93.93,0,0,1,1-.66h8.81Z"
                    />
                    <path
                      class="delivery-icon-color"
                      d="M13.31,11.53h7.57a1,1,0,0,1,.2,1.92H5.58a1,1,0,0,1-1-1,1,1,0,0,1,1-.94h7.73Z"
                    />
                  </g>
                </g>
              </svg>
              <p class="uppercase text-sm icon-text absolute bottom-0 pb-6 mont-semibold">
                Transporte
              </p>
            </div>
          </div>
        </div>

        <!-- user -->
        <div class="hidden relative w-1/3 h-full flex sm:inline-block">
          <div class="absolute w-full h-full z-10 px-2"
style="height: 110%">
            <div
              class="w-full flex flex-col items-center justify-center rounded-b-lg sm:shadow-4xl-dark h-full utility-icon relative"
            >
              <svg class="w-12 mb-6"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.32 49.56">
                <title>Recurso 3</title>
                <g id="Capa_2"
data-name="Capa 2">
                  <g id="Capa_1-2"
data-name="Capa 1">
                    <path
                      class="user-icon-color"
                      d="M47.25,47.67a69.55,69.55,0,0,0-2.33-8.34,21.88,21.88,0,0,0-10.64-11.8A31,31,0,0,0,37,23.06a28.2,28.2,0,0,0,1.61-6,14.77,14.77,0,0,0-6.73-15C26.57-1,19-.61,14.25,2.89,8.15,7.42,7.43,16,9.93,22.23h0l0,0c.09.24.19.48.3.71a2.39,2.39,0,0,0,.25.43,15.12,15.12,0,0,0,1.6,2.73L13,27.61A23,23,0,0,0,3,38c-.39.75-1.49,3.19-1.63,3.7C.82,43.59.4,45.51.07,47.44c-.15.9-.16,2,1.16,2.11s1.31-.93,1.42-1.92A24.22,24.22,0,0,1,9.5,33.39c7.15,5.69,9.15,5.77,14.18.65,4.75,5.13,7.26,5,14.21-.72,3.78,4.18,6.27,8.86,6.79,14.44.08,1,.21,1.84,1.36,1.8S47.48,48.59,47.25,47.67Zm-35.43-16c2.38-2.11,2.89-2.16,5.45-.77a14.44,14.44,0,0,0,1.89.83c.65.25,1.31.44,2,.66C19.48,36.18,15.55,35.89,11.82,31.64ZM14.42,25h0a15.16,15.16,0,0,1-2.61-5.43c-1.18-5-1-9.92,3.09-13.69,3.84-3.57,8.52-4,13.35-2.46,5.81,1.83,8.88,7.85,7.56,14.64a20.75,20.75,0,0,1-4,8.21C26.26,31.51,19.15,31,14.42,25Zm11.8,7.62C28,31.68,29.8,30.43,31.74,30c1.14-.27,2.57.72,4,1.17C32.36,35.89,28.39,36.31,26.22,32.6Z"
                    />
                  </g>
                </g>
              </svg>
              <p class="uppercase text-sm icon-text absolute bottom-0 mont-semibold pb-6">
                Cuenta
              </p>
            </div>
          </div>
        </div>

        <!-- shop -->
        <div class="relative buyIcon w-full sm:w-1/3 h-full flex">
          <div class="inline-block relative w-full h-full flex">
            <div class="absolute w-full sm:z-10 px-2 h-full sm:h-plus">
              <div
                class="w-full flex flex-col items-center justify-center rounded-b-lg sm:shadow-4xl-dark h-full utility-icon relative"
              >
                <svg
                  class="w-8 sm:mb-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 53.88 47.69"
                >
                  <title>Recurso 4</title>
                  <g id="Capa_2"
data-name="Capa 2">
                    <g id="Capa_1-2"
data-name="Capa 1">
                      <path
                        class="carrito-icon-color"
                        d="M44.35,41.26A4.21,4.21,0,0,1,44.79,45,4,4,0,0,1,43.15,47a4.08,4.08,0,0,1-4.9-.35,4.16,4.16,0,0,1-.74-5.39H24.63c1.17,2.43.82,4.5-1.58,5.91a3.91,3.91,0,0,1-4.67-.62,4.1,4.1,0,0,1-1.07-1.63,4.15,4.15,0,0,1-.19-2,4.4,4.4,0,0,1,.74-1.83l-.22-.08a4.87,4.87,0,0,1-3.4-3.84c-.48-2.38-1-4.75-1.54-7.13-.57-2.65-1.15-5.31-1.72-8s-1.14-5.31-1.72-8C8.78,12,8.31,9.72,7.83,7.49A5.32,5.32,0,0,0,6.62,5.25a5.43,5.43,0,0,0-2-1.43L4.41,4a2.44,2.44,0,0,1-2.7.81A2.48,2.48,0,0,1,3.09.08,2.07,2.07,0,0,1,4.28.79a2.56,2.56,0,0,0,1.12.78A8.72,8.72,0,0,1,8.34,3.62a8,8,0,0,1,1.92,3.91c.07.41.16.81.25,1.23.29-.21.56-.41.85-.58a4.7,4.7,0,0,1,2.43-.64H50.07a4.05,4.05,0,0,1,2.62.82A3.05,3.05,0,0,1,53.88,11a5.49,5.49,0,0,1-.82,2.49c-1.1,2.06-2.18,4.12-3.28,6.18-.9,1.71-1.82,3.41-2.72,5.12-.65,1.23-1.31,2.45-2,3.68A8.38,8.38,0,0,1,41.46,32a8.53,8.53,0,0,1-4.12,1C31.89,33,26.45,33,21,33c-.8,0-1.6,0-2.4,0A5.89,5.89,0,0,1,16,32.07l-.36-.19-.1,0c.06.32.11.62.17.92.31,1.41.66,2.81.93,4.23A2.55,2.55,0,0,0,19,38.9H47a1.1,1.1,0,0,1,1.08.73A1.17,1.17,0,0,1,47,41.25H44.35ZM22.44,30.61,21,24.52H14.47c0,.12,0,.22.06.31.19.82.39,1.64.57,2.46a4.42,4.42,0,0,0,4.13,3.33h3.21Zm8.07,0c-.44-2.05-.88-4.07-1.32-6.11H23.4a1.16,1.16,0,0,0,0,.16q.69,2.83,1.37,5.68c.05.21.12.28.34.28h5.37Zm7.86,0c0-.07,0-.12,0-.17l-1.2-5.7c0-.17-.1-.23-.28-.23H31.61c.44,2.06.87,4.08,1.31,6.09ZM12.76,17.23c.39,1.65.77,3.28,1.15,4.91h6.47C20,20.53,19.6,19,19.21,17.37a.27.27,0,0,0-.21-.15H12.91Zm32.82,4.94a2,2,0,0,0-.07-.27c-.48-1.5-1-3-1.45-4.49a.24.24,0,0,0-.28-.2H38.22l-.21,0c0,.08,0,.15,0,.21.31,1.48.62,3,.92,4.45,0,.2.1.27.31.27h6.3ZM19.84,9.9c0,.09,0,.14,0,.19.37,1.51.74,3,1.1,4.53,0,.18.12.23.31.23h5.8c0-.06,0-.08,0-.11-.33-1.53-.66-3.07-1-4.61-.05-.19-.12-.23-.3-.23h-6Zm-1.27,4.95,0,0c-.38-1.57-.77-3.15-1.15-4.72,0-.15-.11-.19-.24-.18-1.16,0-2.31,0-3.47,0a2,2,0,0,0-2.06,2.6c.15.7.32,1.39.47,2.09,0,.21.14.25.34.25h6.09Zm10.1,7.31a1.87,1.87,0,0,0,0-.25l-1-4.47c0-.19-.11-.23-.29-.23H21.61c.4,1.67.8,3.3,1.2,4.95ZM44.12,9.92a.57.57,0,0,0,0,.16c.49,1.52,1,3,1.48,4.55a.27.27,0,0,0,.3.22h3.52a.34.34,0,0,0,.34-.22c.35-.66.71-1.32,1-2a9.55,9.55,0,0,0,.65-1.42.82.82,0,0,0-.54-1.15,2.46,2.46,0,0,0-.76-.16h-6Zm-15.64,0a.75.75,0,0,0,0,.11c.32,1.54.66,3.09,1,4.63,0,.17.12.2.28.2H35.1l-1-4.95Zm7.11,7.31H30c.36,1.65.71,3.29,1.06,4.92h5.51C36.27,20.48,35.93,18.86,35.59,17.22Zm7.6-2.39a.37.37,0,0,0,0-.11c-.49-1.52-1-3.05-1.48-4.58-.06-.2-.16-.25-.36-.25H36.77l-.27,0c0,.06,0,.1,0,.13.32,1.52.64,3,1,4.57,0,.17.09.23.27.23H43ZM40.61,29.74h0l.28-.17a5.8,5.8,0,0,0,2-2c.47-.85.92-1.72,1.37-2.58.08-.14.14-.27.21-.42h-5C39.89,26.28,40.25,28,40.61,29.74ZM19.05,43.56a2.13,2.13,0,1,0,2.09-2.11A2.11,2.11,0,0,0,19.05,43.56Zm19.78,0a2.07,2.07,0,0,0,2.09,2.13,2.12,2.12,0,1,0-2.09-2.13Zm8.38-24.07,1.19-2.26H46.48C46.72,18,47,18.69,47.21,19.48Z"
                      />
                    </g>
                  </g>
                </svg>

                <p
                  class="hidden sm:inline-block uppercase text-sm icon-text absolute bottom-0 mont-semibold pb-6"
                >
                  Carrito
                </p>
              </div>
            </div>
          </div>
          <!-- ventana de carrito de compras -->
          <div class=" fixed right-0 top-0 w-1/5 z-20 h-screen show-hide-buyModal">
            <div class="relative bg-white w-full h-full px-4">
              <!-- titulo del modal -->
              <div class="w-full py-4 border-b-2 border-black">
                <p class="text-lg font-semibold">
                  Carrito de compras
                </p>
              </div>
              <!-- listado de compras -->
              <ul class=" w-full flex flex-col">
                <!-- casilla de cada item -->
                <li class=" w-full flex flex-row py-4 h-32 border-b-2 border-black">
                  <div class=" w-1/4 h-full">
                    <!-- <img class="w-full h-full" src="https://via.placeholder.com/300" alt="placeholder"> -->
                    <div class="w-full h-full bg-gray-500" />
                  </div>
                  <div class="w-3/4 flex flex-col px-2 justify-center">
                    <div class="w-full flex flex-row mb-3">
                      <div class="w-3/4">
                        <p class=" leading-none font-semibold">
                          Shampoo Revlon 200ml - Funcion Repara
                        </p>
                      </div>
                      <div class="w-1/4 flex justify-end">
                        <svg class=" w-5"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                            d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="w-full flex flex-row">
                      <div class="w-1/2 flex flex-row">
                        <div class="w-1/3">
                          <button class="w-full border rounded-lg bg-gray-200 focus:outline-none">
                            -
                          </button>
                        </div>
                        <div class="w-1/3">
                          <input class="w-full border outline-none"
type="text"
/>
                        </div>
                        <div class="w-1/3">
                          <button class="w-full border rounded-lg bg-gray-200 focus:outline-none">
                            +
                          </button>
                        </div>
                      </div>
                      <div class="w-1/2 flex justify-center">
                        <p class=" font-semibold text-red-600 text-lg">
                          S/51.20
                        </p>
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
                    <p class="font-bold text-lg">
                      Subtotal:
                    </p>
                    <p class="font-semibold text-lg text-red-600">
                      S/ 119.20
                    </p>
                  </div>
                  <button class="w-full p-3 bg-red-600 text-white font-semibold mb-2">
                    Pagar Ahora
                  </button>
                  <button class="w-full p-3 border border-black">
                    Continuar comprando
                  </button>
                </div>
              </div>
              <!-- zona de calculo end-->
            </div>
          </div>
        </div>
        <!-- ventana de carrito de compras -->
        <div
          class="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-75 show-hide-opacityCap"
        >
          <!-- just a trick -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "@/assets/css/style.css";
import logo from "@/assets/img/logo.png";
import CabeceraBarraNav from "@/components/cabecera/CabeceraBarraNav.vue";

export default {
  name: "CabeceraBarraUtilidades",
  components: {
    CabeceraBarraNav
  },
  data() {
    return {
      logo
    };
  }
};
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
}
</style>
