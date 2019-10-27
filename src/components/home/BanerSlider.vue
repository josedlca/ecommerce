<template>
  <section id="slider"
class="w-full h-69 sm:h-112 relative">
    <carousel class="w-full h-full"
:autoplay="true" :items="1" :nav="false">
      <img src="https://placeimg.com/200/200/any?1" >

      <img src="https://placeimg.com/200/200/any?2" >

      <img src="https://placeimg.com/200/200/any?3" >

      <img src="https://placeimg.com/200/200/any?4" >
    </carousel>
  </section>
</template>

<script>
import "@/assets/css/style.css";
import carousel from "vue-owl-carousel";

export default {
  name: "BanerSlider",
  components: {
    carousel
  }
};
</script>
