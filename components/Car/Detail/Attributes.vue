<template>
  <div class="mr-10 mt-5 box-border pb-5">
    <!-- iterate the features -->
    <div v-for="feature in features" class="flex text-lg mt-2">
      <p class="rounded text-lime-800 mr-3">✓</p>
      <p>{{ feature }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  features: Array,
});
</script>
