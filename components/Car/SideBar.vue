<template>
  <div class="shadow border w-72 mr-10 z-30 h-full">
    <!-- LOCATION -->
    <div
      class="p-5 flex justify-between relative cursor-pointer border-b space-x-4"
    >
      <h3>Location</h3>
      <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute border rounded shadow-lg left-44 p-5 top-1 -m-1 bg-white"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          @click="onChangeLocation"
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
        >
          Apply
        </button>
      </div>
    </div>
    <!-- MAKE -->
    <div
      class="p-5 flex justify-between relative cursor-pointer border-b space-x-4"
    >
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
        {{ route.params.make || "Any" }}
      </h3>
      <div
        class="absolute border rounded shadow-lg left-44 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
        v-if="modal.make"
      >
        <h4
          v-for="make in makes"
          :key="make"
          class="w-1/3"
          @click="onChangeMake(make)"
        >
          {{ make }}
        </h4>
      </div>
    </div>

    <!-- PRICE -->
    <div
      class="p-5 flex justify-between relative cursor-pointer border-b space-x-4"
    >
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('price')">
        {{ priceRangeText }}
      </h3>
      <div
        class="absolute border shadow left-44 p-5 top-1 -m-1 bg-white rounded space-y-4"
        v-if="modal.price"
      >
        <input
          class="border p-1 rounded"
          type="number"
          placeholder="Min"
          v-model="priceRange.min"
        /><input
          class="border p-1 rounded"
          type="number"
          placeholder="Max"
          v-model="priceRange.max"
        />
        <button class="btn" @click="onChangePrice">Apply</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { makes } = useCars();
const modal = ref({
  make: false,
  location: false,
  price: false,
});
const city = ref("");
const priceRange = ref({ min: "", max: "" });
const route = useRoute();
const router = useRouter();

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;
  if (!minPrice && !maxPrice) return "Any";
  else if (!minPrice) return `Up to ${maxPrice}`;
  else if (!maxPrice) return `Above ${minPrice}`;
  else return `${minPrice} - ${maxPrice}`;
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format. Please enter a valid city name.",
    });
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};

const onChangeMake = (make) => {
  updateModal("make");
  navigateTo(`/city/${route.params.city}/car/${make}`);
};

const onChangePrice = () => {
  updateModal("price");

  if (
    priceRange.value.min !== "" &&
    priceRange.value.max !== "" &&
    priceRange.value.min > priceRange.value.max
  ) {
    throw createError({
      statusCode: 400,
      message: "Invalid price range. Please enter a valid range.",
    });
  }

  // navigateTo(
  //   `/city/${route.params.city}/car/${route.params.make}?minPrice=${priceRange.value.min}&maxPrice=${priceRange.value.max}`
  // );

  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};
</script>
