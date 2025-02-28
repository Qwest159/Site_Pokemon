import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../views/Accueil.vue";
import Manuel from "../views/Manuel.vue";
import Versions from "../views/Versions.vue";
import Histoire from "../views/Histoire.vue";
import Lieux from "../views/Lieux.vue";
import Personnages from "../views/Personnages.vue";
import Techniques from "../views/Techniques.vue";
import Pokemons from "../views/Pokemon.vue";
import InfoPokemon from "../views/InfoPokemon.vue";
import Objets from "../views/Objets.vue";
import Gymnases from "../views/Gymnases.vue";
import Controles from "../views/Controles.vue";

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
