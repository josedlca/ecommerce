<template>
  <div>
    <header class="w-full">
      <CabeceraBarraUtilidades />
      <!-- <CabeceraBarraNav/> -->
    </header>
    <main>
      <BanerSlider />
      <section class="container mx-auto px-3 sm:px-20">
        <BanerCategorias />
        <BarraVerMas />
        <ProductSlider />
        <BarraVerMas />
        <ProductSlider />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import "@/assets/css/style.css";
import CabeceraBarraUtilidades from "@/components/cabecera/CabeceraBarraUtilidades.vue";
import BanerSlider from "@/components/home/BanerSlider.vue";
import BanerCategorias from "@/components/home/BanerCategorias.vue";
import BarraVerMas from "@/components/BarraVerMas.vue";
import ProductSlider from "@/components/comun/ProductSlider.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "Home",
  components: {
    CabeceraBarraUtilidades,
    BanerSlider,
    BanerCategorias,
    BarraVerMas,
    ProductSlider,
    Footer
  }
};
</script>
