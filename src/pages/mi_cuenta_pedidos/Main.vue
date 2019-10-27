<template>
    <div>
        <header class="w-full">
            <CabeceraBarraUtilidades />
        </header>
        <main class="mb-4">
            <BreadCrumbs :list="list_breadcrumbs"/>
            <section class="container mx-auto px-20">
                <div class="w-1/5 px-2 py-3 border">
                    <ol>
                        <li class="my-2">
                            <a href="#" class="flex">
                                <svg class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                                <span>Mis Pedidos</span>
                            </a>
                        </li>
                        <li class="my-2">
                            <a href="#" class="flex">
                                <svg class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/></svg>
                                <span>Mis Favoritos</span>
                            </a>
                        </li>
                        <li class="my-2">
                            <a href="#" class="flex">
                                <svg class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 12v5H0v-5a2 2 0 1 0 0-4V3h20v5a2 2 0 1 0 0 4zM3 5v10h14V5H3zm7 7.08l-2.92 2.04L8.1 10.7 5.27 8.56l3.56-.08L10 5.12l1.17 3.36 3.56.08-2.84 2.15 1.03 3.4L10 12.09z"/></svg>
                                <span>Mis cupones</span>
                            </a>
                        </li>
                        <li class="my-2">
                            <a href="#" class="flex">
                                <svg class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                <span>Mis reseñas</span>
                            </a>
                        </li>
                        <li class="my-2">
                            <a href="#" class="flex">
                                <svg class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/></svg>
                                <span>Mis datos personales</span>
                            </a>
                        </li>
                        <li class="my-2">
                            <a href="#" class="flex">
                                <svg class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                                <span>Mis direcciones</span>
                            </a>
                        </li>
                        <li class="my-2">
                            <a href="#" class="flex">
                                <svg class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm4 8h4v2H4v-2z"/></svg>
                                <span>Datos de facturación</span>
                            </a>
                        </li>
                        <li class="my-2">
                            <a href="#" class="flex">
                                <svg class="h-6 w-6 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                                <span>Cerrar Sessión</span>
                            </a>
                        </li>
                    </ol>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script>
    import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades.vue";
    import BreadCrumbs from "@/components/comun/BreadCrumbs";
    import Footer from "@/components/footer/Footer.vue";

    export default {
        name: "Main",
        components: {
            CabeceraBarraUtilidades,
            BreadCrumbs,
            Footer
        },
        data() {
            return {
                list_breadcrumbs: []
            }
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
                        'name' : 'Mi cuenta',
                        'url' : 'mi-cuenta/pedidos.html'
                    },
                    {
                        'name' : 'Mis Pedidos',
                        'url' : 'mi-cuenta/pedidos.html'
                    }
                ]
            }
        }
    }
</script>
