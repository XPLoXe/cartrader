<script setup>
const route = useRoute();
const maxPrice = computed(() => route.query.maxPrice);
const minPrice = computed(() => route.query.minPrice);
const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPrice,
  maxPrice,
  make: route.params.make,
});
watch(
  () => route.query,
  () => refresh()
);
</script>

<template>
  <div>
    <CarCards v-if="cars.length" :cars="cars" />
    <div v-else>
      <h1 class="text-2xl text-center mt-10 text-red-700 font-bold">
        No cars found
      </h1>
    </div>
  </div>
</template>
