import { createRouter, createWebHistory } from "vue-router";
import Green from "../views/Generation1/Green.vue";
import Accueil from "../views/Accueil.vue";
import Manuel from "../views/Generation1/Manuel.vue";
import Versions from "../views/Generation1/Versions.vue";

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
    {
      path: "/Manuel",
      name: "Traduction du manuel japonais",
      component: Manuel,
    },
    {
      path: "/Versions",
      name: "Différences entre les deux versions",
      component: Versions,
    },
  ],
});

export default router;
