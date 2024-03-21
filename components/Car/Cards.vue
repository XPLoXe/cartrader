<template>
  <div class="w-full">
    <!-- CAR CARD-->
    <CarCard
      v-for="car in cars"
      :key="car.id"
      :car="car"
      @favor="handleFavorite"
      :favored="car.id in favorite"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  cars: Array,
});

const favorite = useLocalStorage("favorite", {}); //this acts as a global state

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>
