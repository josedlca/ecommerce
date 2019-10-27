<template>
  <div class="relative">
    <header class="w-full">
      <CabeceraBarraUtilidades />
      <!-- <CabeceraBarraNav/> -->
    </header>
    <div
      class=" w-full flex flex-row px-4 py-1 justify-end shadow-small-bottom mb-6"
      @click="mostrarFiltros"
    >
      <p class="uppercase text-purple-neutral bebas-regular text-3xl">
        Filtros
      </p>

      <svg class="w-8"
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.05 28.2">
        <title>conosvg</title>
        <g id="Capa_2"
data-name="Capa 2">
          <g id="Filtro">
            <path
              class=" fill-current text-purple-neutral"
              d="M16.52,0H30.35a2.52,2.52,0,0,1,2.21,1,2.3,2.3,0,0,1-.28,3.12c-2.65,3.1-5.32,6.19-8,9.28a20,20,0,0,1-1.7,2,4.17,4.17,0,0,0-1.41,3.87c.11,1,0,2,0,2.93a1.45,1.45,0,0,1-.72,1.4c-2.21,1.46-4.4,3-6.64,4.39a2,2,0,0,1-1.37.21c-.6-.14-.66-.74-.66-1.3,0-3.05,0-6.1,0-9.14a2.19,2.19,0,0,0-.47-1.26Q6.14,10.32.86,4.23A2.42,2.42,0,0,1,.23,1.41,2.55,2.55,0,0,1,2.85,0C7.41,0,12,0,16.52,0Zm-2.4,25c1.54-1,2.92-1.92,4.25-2.87a1.43,1.43,0,0,0,.52-1c.06-1.46,0-2.91.05-4.36a2.06,2.06,0,0,1,.43-1.2c3-3.56,6.07-7.09,9.11-10.63L30.65,2.4H2.41c.27.33.45.56.65.79Q8.28,9.27,13.5,15.33a2.37,2.37,0,0,1,.63,1.73C14.1,19.63,14.12,22.19,14.12,25Z"
            />
          </g>
        </g>
      </svg>
    </div>
    <BreadCrumbs :list="list_breadcrumbs"/>
    <main>
      <section class="container mx-auto px-3 sm:px-20">
        <BarraProducto class="hidden sm:inline-block" />
        <div class="w-full flex flex-row px-1 mb-5 sm:mb-14">
          <!-- filter part -->
          <div
            :class="showOrHide"
            class="bg-white sm:bg-transparent sm:relative sm:z-0 sm:w-3/12 sm:h-auto sm:mr-2"
          >
            <div class="w-full bg-white border-2 border-gray-superLight">
              <div
                class="w-full border-b-2 border-gray-superLight py-3 px-2 hidden sm:inline-block"
              >
                <p class="bebas-regular text-2.5xl text-purple-light">
                  Filtrar por
                </p>
              </div>

              <!-- responsive tittle -->
              <div
                class=" w-full flex flex-row justify-between px-4 py-1 justify-end shadow-small-bottom mb-1 sm:hidden"
              >
                <p class="uppercase text-purple-neutral bebas-regular text-3xl">
                  Filtros
                </p>

                <svg
                  class="w-8 fill-current text-purple-neutral"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  @click="ocultarFiltros"
                >
                  <path
                    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                  />
                </svg>
              </div>
              <!-- categorias -->
              <div class="w-full border-b-2 border-gray-superLight py-3 px-2">
                <p
                  class="text-purple-neutral text-2xl mont-regular mb-3 border-b sm:border-b-2 border-purple-light pb-3"
                >
                  Categorias
                </p>
                <ul>
                  <li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">
                    Amazonia
                  </li>
                  <li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">
                    Original
                  </li>
                  <li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">
                    Equave
                  </li>
                  <li class="mont-regular text-gray-neutral hover:text-gray-intense cursor-pointer">
                    Be Fabulous
                  </li>
                </ul>
              </div>
              <!-- rango de precio -->
              <div class="w-full border-b-2 border-gray-superLight py-3 px-2">
                <p class="text-purple-neutral text-2xl mont-regular mb-4">
                  Precio
                </p>

                <input class="w-full mb-4 hidden sm:inline-block"
type="range" aria-label="rango"
/>

                <div class="flex flex-row w-full">
                  <div class="w-2/5 flex flex-col">
                    <p class="mont-regular text-gray-neutral">
                      Desde
                    </p>
                    <input
                      class="w-full outline-none border-2 border-purple-neutral rounded text-xl text-gray-neutral mont-regular text-center"
                      type="text"
                      aria-label="Valor Inicial"
                    >
                  </div>
                  <div class="w-1/5 flex items-center mt-5">
                    <div class="border-2 w-6 border-purple-neutral rounded mx-auto" />
                  </div>
                  <div class=" w-2/5 flex flex-col">
                    <p class="mont-regular text-gray-neutral">
                      Hasta
                    </p>
                    <input
                      class="w-full outline-none border-2 border-purple-neutral rounded text-xl text-gray-neutral mont-regular text-center"
                      type="text"
                      aria-label="Valor Final"
                    >
                  </div>
                </div>
              </div>

              <div class="w-full py-3 px-2">
                <p
                  class="text-purple-neutral text-2xl mont-regular sm:mb-4 pb-3 sm:border-b-2 sm:border-purple-light"
                >
                  Marca
                </p>
                <ul class="overflow-y-scroll h-32 lista-marcas">
                  <li class="w-full flex items-center relative py-1">
                    <input id="revlon" type="checkbox" name="Revlon"/>
                    <label
                      class="hover:text-gray-intense w-full cursor-pointer relative checkLabel flex flex-row"
                      for="revlon"
                    >
                      <p class="mont-regular text-gray-neutral sm:ml-5">
                        Revlon
                      </p>
                      <p
                        class="mont-semibold text-purple-neutral absolute sm:relative sm:hidden top-0 right-0 mr-6"
                      >
                        15
                      </p>
                    </label>
                  </li>
                  <li class="w-full flex items-center relative py-1">
                    <input id="revlon" type="checkbox" name="Revlon"/>
                    <label
                      class="hover:text-gray-intense w-full cursor-pointer relative checkLabel flex flex-row"
                      for="revlon"
                    >
                      <p class="mont-regular text-gray-neutral sm:ml-5">
                        Revlon
                      </p>
                      <p
                        class="mont-semibold text-purple-neutral absolute sm:relative sm:hidden top-0 right-0 mr-6"
                      >
                        15
                      </p>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full py-2 bg-purple-neutral text-center sm:hidden">
              <p class="text-white bebas-regular uppercase text-2xl">
                Limpiar filtro
              </p>
            </div>
          </div>
          <!-- filter part end-->

          <!-- show results -->
          <div class="w-full sm:w-9/12 sm:ml-2">
            <div class="w-full hidden sm:flex flex-row bg-gray-superLight px-2 py-3 mb-4">
              <div class=" w-4/12 flex justify-center items-center">
                <label class="mr-3 text-purple-neutral text-xs mont-medium">Pagina Por:</label>
                <div class="comboBox w-2/4 relative border border-purple-neutral h-full bg-white">
                  <select
                    class=" w-full h-full absolute top-0 right-0 focus:outline-none text-gray-regular text-xs mont-medium border-none focus:outline-none outline-none px-5"
                  >
                    <option>Novedades</option>
                    <option>Novedades</option>
                    <option>Novedades</option>
                    <option>Novedades</option>
                    <option>Novedades</option>
                  </select>
                </div>
              </div>

              <div class="w-4/12 flex justify-center items-center">
                <label class="mr-3 text-purple-neutral text-xs mont-medium">Mostrar:</label>
                <div class="comboBox w-3/12 relative border border-purple-neutral h-full bg-white">
                  <select
                    class=" w-full h-full absolute top-0 right-0 focus:outline-none text-gray-regular text-xs mont-medium border-none focus:outline-none 					outline-none px-5"
                  >
                    <option>21</option>
                    <option>21</option>
                    <option>21</option>
                    <option>21</option>
                    <option>21</option>
                    <option>21</option>
                    <option>21</option>
                    <option>21</option>
                  </select>
                </div>
              </div>

              <div class="w-4/12 flex flex-row justify-center items-center">
                <label class="mr-3 text-purple-neutral text-xs mont-medium">Paginas:</label>
                <div class="comboBox w-3/12 relative border border-purple-neutral h-full bg-white">
                  <select
                    class=" w-full h-full absolute top-0 right-0 focus:outline-none text-gray-regular text-xs mont-medium border-none focus:outline-none 	outline-none px-5"
                  >
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </select>
                </div>
                <p class="mx-2 text-purple-neutral text-xs mont-medium">
                  de 10
                </p>
                <div class="flex flex-row">
                  <button
                    class="border px-2 bg-purple-neutral rounded text-white flex items-center"
                  >
                    ⏴
                  </button>
                  <button
                    class="border px-2 bg-purple-neutral rounded text-white flex items-center"
                  >
                    ⏵
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full flex flex-row cards flex-wrap">
              <!-- customizado -->
              <div class=" w-full sm:w-1/3 mb-4">
                <article
                  class="w-full flex flex-col border sm:border-2 border-gray-superLight sm:rounded h-full sm:mx-2 pt-2 sm:p-2 shadow-3xl-dark sm:shadow-none"
                >
                  <div class="w-full flex flex-row sm:flex-col">
                    <div class="relative w-1/2 sm:w-full h-40 px-2 sm:px-0">
                      <div
                        class="absolute text-2xs mont-semibold top-0 right-0 text-white bg-purple-intense rounded-xl py-1 px-5 uppercase"
                      >
                        Oferta
                      </div>
                      <img class="w-full h-full"
src="https://via.placeholder.com/130" alt=""
/>
                    </div>

                    <div class="w-1/2 sm:w-full px-2 sm:px-0">
                      <p class="text-2xs mont-semibold text-purple-intense sm:hidden">
                        Marca: Revlon
                      </p>
                      <p class="sm:text-center text-xs mont-semibold text-gray-intense">
                        Shampoo Revlon 200ml
                      </p>
                      <p class="sm:text-center text-xs mont-regular text-gray-intense mb-2 sm:mb-1">
                        Funcion Repara
                      </p>

                      <!-- precio real -->
                      <div class="flex flex-row sm:justify-center mb-2 sm:mb-0">
                        <p class="mont-regular text-2xs sm:hidden">
                          Precio regular:
                        </p>
                        <p class=" line-through mr-2 text-2xs text-gray-light mont-semibold">
                          S/64.00
                        </p>
                        <span
                          class="text-2xs text-x text-white bg-purple-intense rounded sm:rounded-none sm:bg-transparent sm:text-gray-light mont-semibold"
                        >-20%</span>
                      </div>

                      <!-- precio con descuento -->
                      <div class="flex flex-col sm:items-center mb-1">
                        <div class="w-full flex flex-row sm:flex-col sm:justify-center mb-1">
                          <p
                            class="text-gray-intense mont-semibold text-lg self-center mr-1 sm:hidden"
                          >
                            Precio:
                          </p>
                          <p class="text-red-intense mont-semibold text-lg self-center">
                            S/51.20
                          </p>
                        </div>
                        <a
                          class="flex w-4/5 sm:w-1/2 sm:content-center justify-center flex-row buy-fast border border-purple-intense py-1 rounded-xl"
                          href="#"
                        >
                          <svg
                            class=" w-8 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68.98 26.93"
                          >
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
class=" text-4xs text-gray-regular mont-medium">Entrega <br >
                            Inmediata</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="w-full flex sm:block text-center">
                    <button
                      class="inline-block w-full sm:w-auto py-2 px-4 bg-purple-intense text-2xs mont-medium text-white sm:rounded-lg focus:outline-none uppercase"
                    >
                      Comprar Ahora
                    </button>
                  </div>
                </article>
              </div>

              <div class=" w-full sm:w-1/3 mb-4">
                <article
                  class="w-full flex flex-col border sm:border-2 border-gray-superLight sm:rounded h-full sm:mx-2 pt-2 sm:p-2 shadow-3xl-dark sm:shadow-none"
                >
                  <div class="w-full flex flex-row sm:flex-col">
                    <div class="relative w-1/2 sm:w-full h-40 px-2 sm:px-0">
                      <div
                        class="absolute text-2xs mont-semibold top-0 right-0 text-white bg-purple-intense rounded-xl py-1 px-5 uppercase"
                      >
                        Oferta
                      </div>
                      <img class="w-full h-full"
src="https://via.placeholder.com/130" alt=""
/>
                    </div>

                    <div class="w-1/2 sm:w-full px-2 sm:px-0">
                      <p class="text-2xs mont-semibold text-purple-intense sm:hidden">
                        Marca: Revlon
                      </p>
                      <p class="sm:text-center text-xs mont-semibold text-gray-intense">
                        Shampoo Revlon 200ml
                      </p>
                      <p class="sm:text-center text-xs mont-regular text-gray-intense mb-2 sm:mb-1">
                        Funcion Repara
                      </p>

                      <!-- precio real -->
                      <div class="flex flex-row sm:justify-center mb-2 sm:mb-0">
                        <p class="mont-regular text-2xs sm:hidden">
                          Precio regular:
                        </p>
                        <p class=" line-through mr-2 text-2xs text-gray-light mont-semibold">
                          S/64.00
                        </p>
                        <span
                          class="text-2xs text-x text-white bg-purple-intense rounded sm:rounded-none sm:bg-transparent sm:text-gray-light mont-semibold"
                        >-20%</span>
                      </div>

                      <!-- precio con descuento -->
                      <div class="flex flex-col sm:items-center mb-1">
                        <div class="w-full flex flex-row sm:flex-col sm:justify-center mb-1">
                          <p
                            class="text-gray-intense mont-semibold text-lg self-center mr-1 sm:hidden"
                          >
                            Precio:
                          </p>
                          <p class="text-red-intense mont-semibold text-lg self-center">
                            S/51.20
                          </p>
                        </div>
                        <a
                          class="flex w-4/5 sm:w-1/2 sm:content-center justify-center flex-row buy-fast border border-purple-intense py-1 rounded-xl"
                          href="#"
                        >
                          <svg
                            class=" w-8 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 68.98 26.93"
                          >
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
class=" text-4xs text-gray-regular mont-medium">Entrega <br >
                            Inmediata</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="w-full flex sm:block text-center">
                    <button
                      class="inline-block w-full sm:w-auto py-2 px-4 bg-purple-intense text-2xs mont-medium text-white sm:rounded-lg focus:outline-none uppercase"
                    >
                      Comprar Ahora
                    </button>
                  </div>
                </article>
              </div>
              <!-- customizado -->
            </div>

            <div
              class="w-full hidden sm:flex justify-center flex-row bg-gray-superLight px-2 py-3 mb-4"
            >
              <div class="w-4/12 flex flex-row justify-center items-center">
                <label class="mr-3 text-purple-neutral text-xs mont-medium">Paginas:</label>
                <div class="comboBox w-3/12 relative border border-purple-neutral h-full bg-white">
                  <select
                    class=" w-full h-full absolute top-0 right-0 focus:outline-none text-gray-regular text-xs mont-medium border-none focus:outline-none 				outline-none px-5"
                  >
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </select>
                </div>
                <p class="mx-2 text-purple-neutral text-xs mont-medium">
                  de 10
                </p>
                <div class="flex flex-row">
                  <button
                    class="border px-2 bg-purple-neutral rounded text-white flex items-center"
                  >
                    ⏴
                  </button>
                  <button
                    class="border px-2 bg-purple-neutral rounded text-white flex items-center"
                  >
                    ⏵
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- show results end-->
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import "@/assets/css/style.css";
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades";
import BreadCrumbs from "@/components/comun/BreadCrumbs";
import BarraProducto from "@/components/BarraProducto";
import Footer from "@/components/footer/Footer";

export default {
  components: {
    CabeceraBarraUtilidades,
    BreadCrumbs,
    BarraProducto,
    Footer
  },
  data() {
    return {
      showOrHide: "hide-mobile-filter",
      list_breadcrumbs: []
    };
  },
  mounted() {
    this.list_breadcrumbs = this.getBreadCrumbs();
  },
  methods: {
    getBreadCrumbs() {
      return [
        {
          'name' : 'Inicio',
          'url' : 'index.html'
        },
        {
          'name' : 'Acondicionadores',
          'url' : 'filtro.html'
        },
        {
          'name' : 'Amazonia',
          'url' : 'filtro.html'
        }
      ]
    },
    mostrarFiltros() {
      if (this.showOrHide === "hide-mobile-filter") {
        this.showOrHide = "show-mobile-filter";
      }
    },
    ocultarFiltros() {
      if (this.showOrHide === "show-mobile-filter") {
        this.showOrHide = "hide-mobile-filter";
      }
    }
  }
};
</script>

<style lang="css">
.lista-marcas::-webkit-scrollbar{
	width: 5px;
	background: #dddddd;
}

.lista-marcas::-webkit-scrollbar-thumb{
	width: 5px;
	background: #8E4560;
}

/* custom combobox */
.comboBox select{
	background: transparent;
	z-index: 2;
}
.comboBox select{
	-webkit-appearance: button;
}

.comboBox::after{
	content: '⏷';
	position: absolute;
	color: white;
	top: 0;
	right: 0;
	height: 100%;
	width: 25px;
	background: #8E4560;
	display: flex;
	justify-content: center;
  align-items: center;
}

.hide-mobile-filter{
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 20;
	top: 0;
	left: -100%;
	transition: ease-in all .2s
}
.show-mobile-filter{
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 20;
	top: 0;
	left: 0;
	transition: ease-in all .2s
}
</style>
