import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore(
  "userStore",
  () => {
    const registeredUsers = ref([]);
    const currentUser = ref(null);

    const registration = (userObject) => {
      //Provjera da li postoji prvo
      const check = registeredUsers.value.find(
        (user) =>
          user.username === userObject.username &&
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

    const login = (userObject) => {
      const check = registeredUsers.value.find(
        (user) =>
          user.email === userObject.email &&
          user.password === userObject.password
      );

      if (!check) {
        return 500;
      } else {
        currentUser.value = {
          ...check,
        };
        return 200;
      }
    };

    const logout = () => {
      currentUser.value = null;
      return 200;
    };

    const changePassword = (newPassword) => {
      let index;
      if (currentUser.value) {
        index = registeredUsers.value.findIndex(
          (user) =>
            user.email === currentUser.value.email &&
            user.password === currentUser.value.password
        );
      }

      if (index !== -1) {
        registeredUsers.value[index].password = newPassword;
        return 200;
      }
    };

    const deleteUser = () => {
      let index;
      if (currentUser.value) {
        index = registeredUsers.value.findIndex(
          (user) =>
            user.email === currentUser.value.email &&
            user.password === currentUser.value.password
        );
      }

      if (index !== -1) {
        registeredUsers.value.splice(index, 1);
        return 200;
      }
    };

    return {
      registeredUsers,
      currentUser,
      registration,
      login,
      logout,
      changePassword,
      deleteUser,
    };
  },
  {
    persist: true,
  }
);
