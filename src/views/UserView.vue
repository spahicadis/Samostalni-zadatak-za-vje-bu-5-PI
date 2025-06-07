<script setup>
import { useUserStore } from '@/stores/userStore';
const userStore = useUserStore()
</script>

<template>

  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="w-md h-auto p-5 border border-gray-300 shadow-md rounded-md flex flex-col gap-2">
      <div class="w-full flex items-center justify-between">
        <h1>Pozdrav korisnik: {{ userStore.currentUser.username }}</h1>
        <span class="text-blue-500 underline cursor-pointer">Odjavi se</span>
      </div>
      <hr />
      <div class="w-full flex flex-col gap-2">
        <div class="flex flex-col gap-1.5">
          <label>Email</label>
          <input type="text" disabled class="border rounded-md shadow-sm border-gray-200 h-8 p-2"
            :placeholder="userStore.currentUser.email" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label>Trenutna lozinka</label>
          <input type="text" disabled class="border rounded-md shadow-sm border-gray-200 h-8 p-2"
            :placeholder="userStore.currentUser.password" />
        </div>
      </div>
    </div>
  </div>

</template>
