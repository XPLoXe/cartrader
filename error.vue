<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">{{ error?.statusCode }}</h1>
    <p class="mt-7 text-2xl">{{ error?.statusMessage }}</p>
    <button
      @click="goBack"
      class="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go back
    </button>
  </div>
</template>

<script setup>
const error = useError();

const goBack = () => {
  navigateTo("/");
};
</script>
