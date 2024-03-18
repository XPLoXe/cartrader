<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Log In</h1>
    <button @click="login" class="btn">Login</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const supabase = useSupabaseClient();

const user = useSupabaseUser();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) {
    console.log(error, "error with login function");
  }
};
</script>
