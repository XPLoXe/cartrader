<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink to="/" class="text-3xl font-mono">Cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <NuxtLink v-else to="/login">Login</NuxtLink>
  </header>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseAuthClient();

//logout function that makes user.value null and removes the JWT from cookie browser, then it will navigate to homepage
const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  navigateTo("/");
};
</script>
