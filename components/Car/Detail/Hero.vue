<template>
  <div>
    <div class="mt-10">
      <NuxtImg :src="image" class="w-full" alt="" />
      <h1 class="mt-10 text-4xl">{{ name }}</h1>
      <div
        class="text-slate-500 flex text-lg mt-3 border-b pb-5 items-center justify-between"
      >
        <div class="flex">
          <p class="mr-2">seats: {{ numberOfSeats }}</p>
          <p class="mr-2">|</p>
          <p class="mr-2">{{ miles }} kilometers</p>
        </div>
        <div>
          <p class="font-bold text-2xl">${{ price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//receive props from the parent
const props = defineProps({
  numberOfSeats: Number,
  miles: String,
  price: String,
  name: String,
  image: String,
});
</script>
