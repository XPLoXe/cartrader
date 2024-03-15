<template>
  <div>
    <CarDetailPage />
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
  title: `${route.params.name} in ${route.params.id}`,
});

definePageMeta({
  layout: "custom",
});
</script>
