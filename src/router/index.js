import { createRouter, createWebHistory } from "vue-router";

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
      naem: "SignUp",
    },
    {
      path: "/login",
      component: () => import("@/views/LogInView.vue"),
      naem: "Login",
    },
    {
      path: "/userview",
      component: () => import("@/views/UserView.vue"),
      naem: "UserView",
    },
  ],
});
