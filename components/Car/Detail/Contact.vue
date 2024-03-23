<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input
        v-model="message.name"
        type="text"
        placeholder="Name"
        class="border p-1"
      />
      <input
        v-model="message.email"
        type="text"
        placeholder="Email"
        class="border p-1"
      />
      <input
        v-model="message.phone"
        type="text"
        placeholder="Phone"
        class="border p-1"
      />
    </div>

    <div class="flex mt-4 w-[600px]">
      <textarea
        v-model="message.message"
        class="border p-1 w-full"
        placeholder="Message"
      ></textarea>
    </div>
    <button class="btn" @click="onSubmit" :disabled="disableButton">
      Submit
    </button>
    <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
    <p v-if="successMessage" class="mt-3 text-green-400">
      {{ successMessage }}
    </p>
  </div>
</template>

<script setup>
const route = useRoute();
const message = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const errorMessage = ref("");
const successMessage = ref("");

const disableButton = computed(() => {
  return (
    !message.value.name ||
    !message.value.email ||
    !message.value.phone ||
    !message.value.message
  );
});

const onSubmit = async () => {
  try {
    const response = await $fetch(
      `/api/car/listings/${route.params.id}/message`,
      {
        method: "POST",
        body: message.value,
      }
    );
    message.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    successMessage.value = "Message sent successfully";
    errorMessage.value = "";
  } catch (err) {
    errorMessage.value = err.statusMessage;
    successMessage.value = "";
  }
};
</script>
