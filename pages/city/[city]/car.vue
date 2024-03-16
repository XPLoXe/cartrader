<template>
  <div>
    <!-- CARS PAGE -->

    <div class="mt-32 flex">
      <NuxtErrorBoundary>
        <CarSideBar />
        <NuxtPage />
        <template #error="{ error }">
          <div class="text-center mx-auto flex flex-col">
            <h1 class="text-3xl text-red-600 my-4">
              Sorry, something went wrong :(
            </h1>
            <code>{{ error }}</code>
            <button class="btn max-w-48 mx-auto" @click="error.value = null">
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
