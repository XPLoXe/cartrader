<template>
  <div>
    <CarDetailPage :car="car" />
  </div>
</template>

<script setup>
const { cars } = useCars();

const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
  title: `${toTitleCase(route.params.name)} in ${route.params.id}`,
});

//computed property that will take the id from the route and find the car with that id
const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  });
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id of ${route.params.id} not found.`,
  });
}

definePageMeta({
  layout: "custom",
});
</script>
