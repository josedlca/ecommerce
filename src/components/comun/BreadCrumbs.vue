<template>
  <div class="w-full py-3 sm:block bg-gray-superLight mb-4 hidden">
    <div class="container mx-auto px-20">
      <ol class="list-reset flex text-grey-dark">
        <li v-for="(item, index) in list" :key="index">
          <a class="text-sm text-blue-600 underline px-1" :href="item.url">{{ item.name }}</a>
          <span v-show="list.length - 1 > index">></span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BreadCrumbs",
    props: {
      list: {
        type: Array,
      }
    }
  };
</script>
