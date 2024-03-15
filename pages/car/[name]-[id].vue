<template>
  <div>
    <CarDetailPage />
  </div>
</template>

<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
  title: `${toTitleCase(route.params.name)} in ${route.params.id}`,
});

definePageMeta({
  layout: "custom",
});
</script>
