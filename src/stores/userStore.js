import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore(
  "userStore",
  () => {
    const registeredUsers = ref([]);
    const currentUser = ref(null);

    console.log(registeredUsers);

    const registration = (userObject) => {
      //Provjera da li postoji prvo
      const check = registeredUsers.value.find(
        (user) =>
          user.username === userObject.username ||
          user.email === userObject.email
      );

      if (check) {
        return 500;
      } else {
        registeredUsers.value.push(userObject);
        currentUser.value = {
          ...userObject,
        };
        return 200;
      }
    };

    return {
      registeredUsers,
      currentUser,
      registration,
    };
  },
  {
    persist: true,
  }
);
