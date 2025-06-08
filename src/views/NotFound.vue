<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()



</script>



<template>
  <div class="w-full p-5">
    <h1>Stranica ne postoji</h1>
    <span class="text-blue-500 underline cursor-pointer" @click="router.back()">Nazad</span>
    <br />
    <RouterLink to="/login" class="text-blue-500 underline cursor-pointer">Natrag na prijavu</RouterLink>
  </div>
</template>