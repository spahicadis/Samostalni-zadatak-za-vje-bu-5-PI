<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
const router = useRouter();


const username = ref("");
const email = ref("");
const password = ref("");
const repeatedPassword = ref("");

const userStore = useUserStore();

const handleRegistrationAction = () => {
  const userObj = {
    username: username.value,
    email: email.value,
    password: password.value
  }

  const registration = userStore.registration(userObj);

  if (registration === 200) {
    router.push("/userview")
  }
  else if (registration === 500) {
    alert("Korisnik sa usernameom i emailom već postoji!")
  }


}


//TO DO button disabled ako sve nije ispunjeno i ako lozinka i ponovljena lozinka nisu iste

</script>

<template>
  <div class="w-full flex flex-col justify-center items-center p-5 h-screen">
    <div class="flex flex-col w-md gap-1.5">
      <h1 class="">Registracijska forma</h1>
      <RouterLink to="/login" class="text-blue-600 underline cursor-pointer">Idi na prijavu</RouterLink>
    </div>
    <div class="w-md border-gray-500 p-5 h-auto shadow-md border-md flex flex-col gap-2.5">
      <div class="w-full flex flex-col gap-1">
        <label>Username</label>
        <input type="text" class="border rounded-md h-8 pl-2" placeholder="Vaš username" v-model="username" />
      </div>
      <div class="w-full flex flex-col gap-1">
        <label>Email</label>
        <input type="text" class="border rounded-md h-8 pl-2" placeholder="Vaš email" v-model="email" />
      </div>
      <div class="w-full flex flex-col gap-1">
        <label>Lozinka</label>
        <input type="text" class="border rounded-md h-8 pl-2" placeholder="Vaša lozinka" v-model="password" />
      </div>
      <div class="w-full flex flex-col gap-1">
        <label>Ponovi lozinku</label>
        <input type="text" class="border rounded-md h-8 p-2" placeholder="Ponovi lozinku" v-model="repeatedPassword" />
      </div>
      <button class="w-full rounded-md bg-blue-600 text-white text-bold p-2 cursor-pointer"
        @click="handleRegistrationAction()">Registriraj se</button>
    </div>
  </div>

</template>
