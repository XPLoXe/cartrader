<template>
  <!-- CAR DETAIL PAGE -->
  <div>
    <CarDetailHero
      :seats="seats"
      :miles="miles"
      :price="price"
      :name="name"
      :url="url"
    />
    <CarDetailAttributes :features="features" />
    <CarDetailDescription :description="description" />
    <CarDetailContact />
  </div>
</template>

<script setup lang="ts">
// Define a type for the car prop to be more specific than just Object
type Car = {
  id: string;
  name: string;
  price: string;
  url: string;
  seats: number;
  miles: string;
  features: string[];
  description: string;
};

// Receive props from the parent with a type
const props = defineProps({
  car: {
    type: Object as PropType<Car>,
    required: true, // Only add this if the prop is always required
  },
});

// Now TypeScript knows the structure of car, and it shouldn't complain
const { id, name, price, url, seats, miles, features, description } = props.car;
</script>
