<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">{{ error?.statusCode }}</h1>
    <p class="mt-7 text-2xl">{{ error?.statusMessage }}</p>
    <button @click="goBack" class="btn">Go back</button>
  </div>
</template>

<script setup>
const error = useError();

const goBack = () => {
  navigateTo("/");
};
</script>
