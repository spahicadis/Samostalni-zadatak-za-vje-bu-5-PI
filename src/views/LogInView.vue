<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const router = useRouter();

const email = ref("")
const password = ref("")

const handleSignInAction = () => {
  const userObject = {
    email: email.value,
    password: password.value,
  }
  const login = userStore.login(userObject);

  if (login === 200) {
    router.push("/userview")
  }
  else if (login === 500) {
    alert("Korisnički račun ne postoji")
  }

}
</script>

<template>

  <div class="w-full h-screen flex flex-col p-5 items-center justify-center gap-2">
    <div class="w-md flex flex-col gap-1.5">
      <h1>Forma za prijavu</h1>
      <RouterLink to="/signup" class="text-blue-600 underline cursor-pointer">Idi na registraciju</RouterLink>
    </div>
    <div class="w-md p-5 border-gray-500 rounded-md shadow-md h-auto flex flex-col gap-2.5">
      <div class="w-full flex flex-col gap-1">
        <label>Email</label>
        <input type="text" class="border rounded-md h-8 pl-2" placeholder="Vaš email" v-model="email" />
      </div>
      <div class="w-full flex flex-col gap-1">
        <label>Lozinka</label>
        <input type="text" class="border rounded-md h-8 pl-2" placeholder="Vaša lozinka" v-model="password" />
      </div>
      <button class="w-full rounded-md bg-blue-600 text-white text-bold p-2 cursor-pointer"
        @click="handleSignInAction()">Prijavi se</button>
    </div>
  </div>

</template>
