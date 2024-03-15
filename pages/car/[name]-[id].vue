<template>
  <div>
    <NavBar />
    <CarDetailPage />
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
  title: `${route.params.name} in ${route.params.id}`,
});
</script>
