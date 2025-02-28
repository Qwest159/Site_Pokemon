import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Manuel from "../views/Generation1/Manuel.vue";
import Versions from "../views/Generation1/Versions.vue";
import Histoire from "../views/Generation1/Histoire.vue";
import Lieux from "../views/Generation1/Lieux.vue";
import Personnages from "../views/Generation1/Personnages.vue";
import Techniques from "../views/Generation1/Techniques.vue";
import Pokemons from "../views/Generation1/Pokemon.vue";
import InfoPokemon from "../views/Generation1/InfoPokemon.vue";
import Objets from "../views/Generation1/Objets.vue";
import Gymnases from "../views/Generation1/Gymnases.vue";
import Controles from "../views/Generation1/Controles.vue";

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
    {
      path: "/Techniques",
      name: "Techniques",
      component: Techniques,
    },
    {
      path: "/Pokemons",
      name: "Pokemons",
      component: Pokemons,
    },
    {
      path: "/Objets",
      name: "Objets",
      component: Objets,
    },
    {
      path: "/Gymnases",
      name: "Gymnases",
      component: Gymnases,
    },
    {
      path: "/Controles",
      name: "Controles",
      component: Controles,
    },
    {
      path: "/Pokemons_id/:id",
      name: "Pokemons_id",
      component: InfoPokemon,
      props: true,
    },
  ],
});

export default router;
