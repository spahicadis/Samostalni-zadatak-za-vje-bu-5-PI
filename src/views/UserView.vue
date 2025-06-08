<script setup>
import { ref, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()

const currentPassword = ref("")
const newPassword = ref("")
const repeatedPassword = ref("")

const disableDeleteEdit = ref(true)


const handleLogout = () => {
  const logout = userStore.logout();

  if (logout === 200) {
    router.push("/login")
  }

}

const handleChangePassword = () => {
  const change = userStore.changePassword(newPassword.value)

  if (change === 200) {
    handleLogout()
  }
}

const handleDeleteAction = () => {
  const deleteUser = userStore.deleteUser();

  if (deleteUser === 200) {
    handleLogout();
  }
}


watch(currentPassword, () => {
  if (currentPassword.value === userStore.currentUser.password) {
    disableDeleteEdit.value = false;
  }
  else if (currentPassword.value !== userStore.currentUser.password) {
    disableDeleteEdit.value = true;
  }
})




</script>

<template>

  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="w-md h-auto p-5 border border-gray-300 shadow-md rounded-md flex flex-col gap-2.5">
      <div class="w-full flex items-center justify-between">
        <h1>Pozdrav korisnik: {{ userStore.currentUser.username }}</h1>
        <span class="text-blue-500 underline cursor-pointer" @click="handleLogout()">Odjavi se</span>
      </div>
      <hr />
      <div class="w-full flex flex-col gap-2.5">
        <div class="flex flex-col gap-1.5">
          <label>Email</label>
          <input type="text" disabled class="border rounded-md shadow-sm border-gray-200 h-8 p-2"
            :placeholder="userStore.currentUser.email" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label>Upišite trenutačnu lozinku za mogućnost mijenjanja lozinke ili brisanja profila</label>
          <input type="text" class="border rounded-md shadow-sm border-gray-200 h-8 p-2"
            placeholder="Upišite trenutnu lozinku" v-model="currentPassword" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label>Nova lozinka</label>
          <input type="text" class="border rounded-md shadow-sm border-gray-200 h-8 p-2"
            placeholder="Unesite novu lozinku" v-model="newPassword" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label>Ponovite lozinku</label>
          <input type="text" class="border rounded-md shadow-sm border-gray-200 h-8 p-2"
            placeholder="Ponovno unesite novu lozinku" v-model="repeatedPassword" />
        </div>
        <div class="w-full flex items-center justify-between">
          <button
            class="border rounded-md p-2 bg-red-500 border-red-500 text-white font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="disableDeleteEdit" @click="handleDeleteAction">Izbriši korisnički
            račun</button>
          <button
            class="border rounded-md p-2 bg-blue-500 border-blue-500 text-white font-bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="disableDeleteEdit" @click="handleChangePassword()">Promjeni
            lozinku</button>
        </div>
      </div>
    </div>
  </div>

</template>
