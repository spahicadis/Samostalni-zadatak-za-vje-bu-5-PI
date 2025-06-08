import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/userStore";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/signup",
    },
    {
      path: "/signup",
      component: () => import("@/views/SignUpView.vue"),
      name: "SignUp",
    },
    {
      path: "/login",
      component: () => import("@/views/LogInView.vue"),
      name: "Login",
    },
    {
      path: "/userview",
      component: () => import("@/views/UserView.vue"),
      name: "UserView",
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (userStore.currentUser === null && to.name === "UserView") {
    return next({ name: "Login" });
  }
  return next();
});
