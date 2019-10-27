<template>
  <div class="w-full">
    <header class="w-full">
      <CabeceraBarraUtilidades />
    </header>
    <BreadCrumbs />
    <main>
      <section class="container mx-auto sm:px-20">
        <!-- product description card -->
        <div
          class="w-full flex flex-col sm:flex-row bg-white items-center sm:mb-5 sm:shadow-4xl-dark sm:h-111"
        >
          <div class="w-full px-3 sm:px-0 sm:w-6/12 h-67 sm:h-full relative">
            <div
              class="sm:hidden absolute text-2xs mont-semibold top-0 right-0 mt-2 mr-5 text-white bg-purple-intense rounded-xl py-1 px-5 uppercase"
            >
              Oferta
            </div>

            <svg
              class="absolute left-0 top-0 w-10 ml-5 mt-2 sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62.26 54.94"
              @click="showHeart"
            >
              <title>corazon</title>
              <g id="Capa_2"
data-name="Capa 2">
                <g id="Mockup">
                  <path
                    class=" fill-current text-purple-light"
                    d="M31.22,6.1A17.88,17.88,0,0,1,46.3.17a17.63,17.63,0,0,1,15.91,16c.48,8.06-2.59,14.82-8,20.5a91.24,91.24,0,0,1-10.1,8.92c-4.18,3.25-8.63,6.17-13,9.3C23.39,49,14.69,44.29,8.07,36.88,3,31.23-.31,24.86,0,17.07c.33-7.56,4.15-13,11.1-15.7S24.48,0,30,5.11c.3.27.58.57.87.84A1.87,1.87,0,0,0,31.22,6.1Zm-.15,5.15c-.66-.87-1.24-1.66-1.85-2.42A14.69,14.69,0,0,0,13.57,3.71,14.35,14.35,0,0,0,3.16,16.05C2.5,22.24,4.7,27.61,8.4,32.44c6.12,8,14.79,12.88,22.72,18.64,3.84-2.7,7.68-5.17,11.27-8a93.66,93.66,0,0,0,9.35-8.22A25,25,0,0,0,59.19,19.1,14.71,14.71,0,0,0,50.88,4.56,14.55,14.55,0,0,0,34.39,7.34C33.22,8.52,32.22,9.88,31.07,11.25Z"
                  />
                </g>
              </g>
            </svg>

            <svg
              :class="showOrHideHeart"
              class="absolute left-0 top-0 ml-5 mt-2 sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62.26 54.94"
              @click="hideHeart"
            >
              <title>corazon Relleno</title>
              <g id="Capa_2"
data-name="Capa 2">
                <g id="Mockup">
                  <path
                    class=" fill-current text-purple-intense"
                    d="M62.21,16.22A17.63,17.63,0,0,0,46.3.17,17.88,17.88,0,0,0,31.22,6.1,1.87,1.87,0,0,1,30.89,6c-.29-.27-.57-.57-.87-.84C24.48,0,18-1.35,11.12,1.38S.35,9.51,0,17.07c-.33,7.79,3,14.16,8.05,19.81,6.62,7.41,15.32,12.14,23,18.06,4.42-3.13,8.87-6,13-9.3a91.24,91.24,0,0,0,10.1-8.92C59.62,31,62.69,24.28,62.21,16.22Z"
                  />
                </g>
              </g>
            </svg>
            <img class="w-full h-full"
src="https://via.placeholder.com/1600" alt="placeholder"
/>
          </div>
          <div class=" w-full sm:w-6/12 px-3 sm:p-8 border-b border-gray-superLight sm:border-none">
            <div class="w-full sm:border-b-2 flex flex-col sm:pb-3 sm:mb-3">
              <p class="mont-semibold text-purple-intense mb-1 text-center sm:text-left">
                Marca : Revlon
              </p>

              <div class="w-full flex flex-col mb-1 sm:mb-4">
                <h3 class=" text-xl mont-semibold text-center sm:text-left text-gray-intense">
                  Acondicionador 200ml
                </h3>
                <p class="text-xl mont-regular text-gray-intense text-center sm:text-left">
                  Para cabello con tinte
                </p>
              </div>

              <div class="w-full sm:flex flex-row mb-4 hidden">
                <p class="mont-semibold text-gray-regular text-3xl mr-3">
                  Precio:
                </p>
                <p class="mont-semibold text-red-intense text-3xl">
                  S/54.40
                </p>
              </div>

              <div class="sm:flex flex-row mb-3 hidden">
                <p class="mont-regular text-xs text-gray-intense mr-3">
                  Precio regular:
                </p>
                <span class="text-xs mont-bold text-gray-light mr-3 line-through">S/64.00</span>
                <p class="text-xs mont-bold text-white bg-purple-intense rounded">
                  -20%
                </p>
              </div>

              <div class="sm:flex hidden flex-row justify-around items-center">
                <div class="w-1/3 flex flex-row items-center">
                  <div class="w-full relative flex flex-row border border-purple-intense rounded">
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
                <div class="w-1/3 flex">
                  <button
                    class="rounded h-full flex uppercase bg-purple-intense text-white mont-medium text-xs  py-2 px-3 focus:outline-none"
                  >
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full sm:flex hidden flex-row items-center justify-around">
              <div class="w-1/4">
                <p class="text-2xs mont-medium text-gray-regular">
                  Enviado por:
                </p>
                <p class="text-2xs mont-medium text-purple-intense">
                  Belleza
                </p>
              </div>

              <a
                class="flex w-1/4 content-center justify-center flex-row buy-fast border border-purple-intense py-1 rounded-xl"
                href="#"
              >
                <svg class=" w-8 mr-2"
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
                <span
class=" text-2xs text-gray-regular mont-medium">Entrega <br >
                  Inmediata</span>
              </a>
            </div>
          </div>

          <ul class="w-full flex flex-row justify-center py-3 sm:hidden">
            <li class=" mx-2 sm:ml-4">
              <a href="#">
                <svg
                  class="w-10 sm:w-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 53.46 53.48"
                >
                  <title>Recurso 13</title>
                  <g id="Capa_2"
data-name="Capa 2">
                    <g id="Capa_1-2"
data-name="Capa 1">
                      <path
                        class="fill-current text-purple-intense"
                        d="M26.77,53.47A26.74,26.74,0,1,0,0,26.86,26.67,26.67,0,0,0,26.77,53.47ZM19,21.43H22.4c0-1.65,0-3.11,0-4.58.05-4.15,2-6.31,6.17-6.58,1.91-.12,3.82,0,5.88,0v6c-1.16,0-2.32,0-3.47,0a1.42,1.42,0,0,0-1.65,1.64c0,1.1,0,2.2,0,3.46h5.25c-.16,2-.31,3.8-.47,5.76h-4.8V44.28H22.4v-17H19Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li class=" mx-2 sm:ml-4">
              <a href="#">
                <svg
                  class="w-10 sm:w-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 53.47 53.46"
                >
                  <title>Capa 6</title>
                  <g id="Capa_2"
data-name="Capa 2">
                    <g id="Capa_1-2"
data-name="Capa 1">
                      <g id="Capa_6"
data-name="Capa 6">
                        <path
                          class="fill-current text-purple-intense"
                          d="M26.65,53.46A26.73,26.73,0,1,0,0,26.57,26.65,26.65,0,0,0,26.65,53.46Zm-15-34.14a7.34,7.34,0,0,1,7.11-7.16A116.31,116.31,0,0,1,34,12c5.28.34,7.94,3.55,8.19,9,.09,2.13,0,4.26,0,6.38h.18c-.13,2.65-.09,5.32-.43,8-.53,4.12-3.25,6.9-7.37,7.12a150.32,150.32,0,0,1-15.6,0,7.46,7.46,0,0,1-7.37-7.26A140.74,140.74,0,0,1,11.6,19.32Z"
                        />
                        <path
                          class="fill-current text-purple-intense"
                          d="M20.13,39.83c4.41.16,8.83.17,13.24,0,3.85-.14,5.79-2.24,6-6.1.09-2.12,0-4.25,0-6.38s.07-4.37,0-6.55c-.17-3.77-2.16-5.91-5.85-6q-6.7-.21-13.41,0c-3.66.12-5.73,2.21-5.84,5.86-.13,4.41-.14,8.83,0,13.24C14.34,37.65,16.35,39.7,20.13,39.83ZM35.05,17.27c.75.15,1.39.89,2.09,1.37v.77c-.69.49-1.33,1.26-2.08,1.39-1.19.21-1.88-.63-1.85-1.83S34,17.07,35.05,17.27Zm-8.27,2.06a8,8,0,1,1-8,8A7.95,7.95,0,0,1,26.78,19.33Z"
                        />
                        <path
                          class="fill-current text-purple-intense"
                          d="M39.34,27.35c0,2.13.07,4.26,0,6.38.09-2.12,0-4.25,0-6.38s.07-4.37,0-6.55C39.41,23,39.34,25.17,39.34,27.35Z"
                        />
                        <path
                          class="fill-current text-purple-intense"
                          d="M26.79,32.43a5.14,5.14,0,1,0-5.18-5.18A5.17,5.17,0,0,0,26.79,32.43Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li class="mx-2 sm:m-0">
              <a href="#">
                <svg
                  class=" w-10 sm:w-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 53.47 53.51"
                >
                  <title>Recurso 12</title>
                  <g id="Capa_2"
data-name="Capa 2">
                    <g id="Capa_1-2"
data-name="Capa 1">
                      <path
                        class=" fill-current text-purple-intense"
                        d="M26.66,0A26.76,26.76,0,1,0,53.47,26.76,26.73,26.73,0,0,0,26.66,0ZM43.32,19.39c-2.24,3-2.17,3.05-3,6.75-3,14.18-17.78,17-26.29,11.51,3.18-.07,6-.55,8.45-2.56-2.52-.56-4.42-1.67-5.36-4.19l2.25-.25c-2.74-1.3-4.36-3.06-4.49-6l2.51.59c-2.51-2.48-3.11-5.05-1.7-8.22,3.47,3.83,7.51,6.09,12.47,6.37a20.6,20.6,0,0,1,.52-3.4,6,6,0,0,1,8.85-3.21,3.54,3.54,0,0,0,4.06.21l1-.44.29.3-2,2.78L43.45,19C43.38,19.2,43.38,19.32,43.32,19.39Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li class=" mx-2 sm:ml-4">
              <a href="#">
                <svg
                  class="w-10 sm:w-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 49.38 49.38"
                >
                  <title>wsp</title>
                  <g id="Capa_2"
data-name="Capa 2">
                    <g id="Mockup">
                      <path
                        class="fill-current text-purple-intense"
                        d="M22.86,11.88a11.79,11.79,0,0,0-7.8,18.19.8.8,0,0,1,.1.81c-.45,1.28-.87,2.56-1.34,3.93l.51-.14c1.25-.4,2.49-.8,3.75-1.18a.78.78,0,0,1,.58.06,11.85,11.85,0,1,0,4.2-21.67ZM29.67,30a4.68,4.68,0,0,1-2.29-.14,13.33,13.33,0,0,1-7.74-5.65,7.91,7.91,0,0,1-1.49-3,3.64,3.64,0,0,1,1.13-3.65,5,5,0,0,1,1.43-.62l0,.12a.65.65,0,0,1,.77.45c.41.94.82,1.89,1.2,2.85a.75.75,0,0,1,0,.57A7.77,7.77,0,0,1,21.85,22a.6.6,0,0,0-.07.85,9.44,9.44,0,0,0,4.73,4,.56.56,0,0,0,.71-.17c.34-.42.69-.82,1-1.25a.58.58,0,0,1,.76-.25c1,.45,2,.9,2.9,1.39a.74.74,0,0,1,.24.58A3,3,0,0,1,29.67,30Z"
                      />
                      <path
                        class="fill-current text-purple-intense"
                        d="M24.69,0A24.69,24.69,0,1,0,49.38,24.69,24.68,24.68,0,0,0,24.69,0Zm2.48,37.38A14.08,14.08,0,0,1,18.43,36a.85.85,0,0,0-.68-.05l-7.47,2.37c.52-1.51,1-3,1.49-4.39.31-.93.64-1.85.93-2.78a.86.86,0,0,0,0-.63,14.17,14.17,0,1,1,14.52,6.9Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <!-- product description card end-->

        <div class="w-full flex flex-col bg-white sm:shadow-4xl-dark sm:mb-6">
          <div class="w-full flex flex-col-reverse sm:flex-row">
            <div
              class="w-full sm:w-1/3 flex flex-col shadow-small-bottom mb-3 sm:shadow-none sm:mb-0"
            >
              <div class="bg-purple-light w-full flex flex-row py-2.5 px-5">
                <p
                  class="text-2xl sm:text-4.5xl bebas-regular text-white uppercase leading-none mr-1"
                >
                  Caracteristicas
                </p>
              </div>
              <div class="w-full flex flex-col p-5">
                <div class=" bg-white flex w-full flex-row">
                  <div class="w-1/2 mont-regular text-lg text-gray-intense">
                    Color
                  </div>
                  <div class="w-1/2 py-2 mont-regular text-lg text-gray-intense">
                    Rojo
                  </div>
                </div>
                <div class=" bg-gray-300 flex w-full flex-row">
                  <div class="w-1/2 py-2 mont-regular text-lg text-gray-intense">
                    Color
                  </div>
                  <div class="w-1/2 py-2 mont-regular text-lg text-gray-intense">
                    Rojo
                  </div>
                </div>
              </div>
            </div>

            <div
              class="w-full sm:w-2/3 flex flex-col shadow-small-bottom mb-3 sm:shadow-none sm:mb-0"
            >
              <div class="bg-purple-light w-full flex flex-row py-2.5 px-5">
                <p
                  class="text-2xl sm:text-4.5xl bebas-regular text-white uppercase leading-none mr-1"
                >
                  Detalle del producto
                </p>
              </div>
              <div class="w-full p-5">
                <p class="mont-regular text-xs text-gray-intense">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quas. Inventore
                  magni doloribus provident saepe natus dolores quia perspiciatis expedita
                  consequatur? Accusantium libero ducimus nisi, tenetur officiis asperiores harum.
                  Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col shadow-4xl-dark sm:mb-6">
          <div class="bg-purple-light w-full flex flex-row py-2.5 px-5">
            <p class="text-2xl sm:text-4.5xl bebas-regular text-white uppercase leading-none mr-1">
              Reseña del producto
            </p>
          </div>
          <div class="w-full sm:w-1/2 flex flex-col p-5">
            <div class="w-full mb-2">
              <p class="mont-regular text-lg text-gray-intense">
                Calificacion 3 de 5
              </p>
            </div>

            <div class=" w-full h-6 overflow-hidden bg-gray-superLight rounded mb-2">
              <div class="relative w-9/12 float-left min-w-0 h-full bg-purple-light" />
            </div>
            <div class=" w-full h-6 overflow-hidden bg-gray-superLight rounded mb-2">
              <div class="relative w-7/12 float-left min-w-0 h-full bg-purple-light" />
            </div>
            <div class=" w-full h-6 overflow-hidden bg-gray-superLight rounded mb-2">
              <div class="relative w-10/12 float-left min-w-0 h-full bg-purple-light" />
            </div>
            <div class=" w-full h-6 overflow-hidden bg-gray-superLight rounded mb-2">
              <div class="relative w-2/12 float-left min-w-0 h-full bg-purple-light" />
            </div>
          </div>
        </div>

        <div class="w-full mb-3 hidden sm:inline-block">
          <div class="bg-purple-light w-full flex flex-row py-2.5 px-8">
            <div class="w-1/3 flex flex-row items-center">
              <p class="text-4.5xl bebas-regular text-white uppercase leading-none mr-1">
                Te Puede Interesar
              </p>
            </div>
          </div>
        </div>

        <!-- responsive resenas -->
        <div class="w-full flex flex-col sm:hidden">
          <div class="w-full border border-purple-light p-5">
            <div class="w-full flex flex-col">
              <p class="mont-regular text-lg text-gray-intense">
                Calificacion 3 de 5
              </p>
              <p class="mont-medium text-gray-intense">
                Reseña por: Gloria Arimura
              </p>
              <p class="mont-semibold text-red-regular">
                Compra verificada
              </p>
            </div>
          </div>
          <div class="w-full border border-purple-light p-5">
            <div class="w-full flex flex-col">
              <p class="mont-regular text-lg text-gray-intense">
                Calificacion 3 de 5
              </p>
              <p class="mont-medium text-gray-intense">
                Reseña por: Gloria Arimura
              </p>
              <p class="mont-semibold text-red-regular">
                Compra verificada
              </p>
            </div>
          </div>
        </div>
        <!-- responsive resenas -->
        <!-- slide just show in desktop  -->
        <ProductSlider class="hidden sm:inline-block" />
        <!-- slide just show in desktop  end-->
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import "@/assets/css/style.css";
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades";
import BreadCrumbs from "@/components/comun/BreadCrumbs";
import ProductSlider from "@/components/comun/ProductSlider";
import Footer from "@/components/footer/Footer";

export default {
  name: "Descripcion",
  components: {
    CabeceraBarraUtilidades,
    BreadCrumbs,
    ProductSlider,
    Footer
  },

  data() {
    return {
      showOrHideHeart: "hide-heart"
    };
  },
  methods: {
    showHeart() {
      if (this.showOrHideHeart == "hide-heart") {
        this.showOrHideHeart = "show-heart";
      }
    },
    hideHeart() {
      if (this.showOrHideHeart == "show-heart") {
        this.showOrHideHeart = "hide-heart";
      }
    }
  }
};
</script>

<style lang="css">
.show-heart{
	visibility: visible;
	opacity: 1;
	z-index: 20;
	width: 2.5rem;
	transition: ease-in all .2s;
}
.hide-heart{
	visibility: hidden;
	opacity: 0;
	z-index: 0;
	width: .5rem;
	transition: ease-in all .2s;
}
</style>
