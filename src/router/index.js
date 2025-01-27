import { createRouter, createWebHistory } from "vue-router";
import Green from "../views/Generation1/Green.vue";
import Accueil from "../views/Accueil.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: Accueil,
    },
    {
      path: "/green",
      name: "green",
      component: Green,
    },
  ],
});

export default router;
