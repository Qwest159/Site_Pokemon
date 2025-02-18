import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Manuel from "../views/Generation1/Manuel.vue";
import Versions from "../views/Generation1/Versions.vue";
import Histoire from "../views/Generation1/Histoire.vue";
import Lieux from "../views/Generation1/Lieux.vue";
import Personnages from "../views/Generation1/Personnages.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: Accueil,
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
    {
      path: "/Histoire",
      name: "Histoire",
      component: Histoire,
    },
    {
      path: "/Lieux",
      name: "Lieux",
      component: Lieux,
    },
    {
      path: "/Personnages",
      name: "Personnages",
      component: Personnages,
    },
  ],
});

export default router;
