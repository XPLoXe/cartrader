<template>
  <div>
    <CarDetailPage :car="car" />
  </div>
</template>

<script setup>
const route = useRoute();
const { data: car } = await useFetchCar(route.params.id);
const { toTitleCase } = useUtilities();
useHead({
  title: `${toTitleCase(route.params.name)} in ${route.params.id}`,
});

definePageMeta({
  layout: "custom",
});
</script>
