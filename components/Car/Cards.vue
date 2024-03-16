<template>
  <div class="w-full">
    <!-- CAR CARD-->
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup>
const { cars } = useCars();
</script>
