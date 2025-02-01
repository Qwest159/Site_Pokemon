<script setup>
// import gen1 from "../../stockage/generation1.json";
import { RouterLink, RouterView } from "vue-router";

import Personnages from "../stockage/generation1/personnages.json";

import { defineProps, ref, onMounted } from "vue";

// https://pokeapi.co/api/v2/pokemon/1/

// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? 'is' : 'is not'
//   }

// let count_uptade = 1025

// DOIS FAIRE ATTENTION POUR LA MISE A JOUR => SI LOCAL STORAGE COUNT == COUNT DU donnees_localstorage[0].id === "1"

// ATTENTION ID -1 (met +1 par rapport au lien)

// boucle en remplacant les /n par <br>

let personnagesList = ref([]);
const isLoading = ref(true);
const error = ref(null);

function fetchPokemonList() {
  try {
    personnagesList.value = Personnages;
    console.log(personnagesList.value);
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  fetchPokemonList();
});

// /image/types/plante.png
</script>

<template>
  <div class="grid grid-cols-6">
    <nav
      class="col-span-1 flex flex-col h-screen bg-linear-to-t from-red-500 to-green-500 text-white"
    >
      <RouterLink d to="/">Accueil</RouterLink>
      <RouterLink d to="/Manuel">Traduction du manuel japonais</RouterLink>
      <RouterLink to="/Versions"
        >Différences entre les deux versions</RouterLink
      >
    </nav>

    <div class="col-span-5 m-auto mx-2 font-extrabold text-9xl text-center">
      Ceci est l'accueil
    </div>
  </div>
</template>
<style>
h3 {
  white-space: pre-line !important;
}
a {
  @apply border-b-2;

  padding: 0.5em 0.4em;
  font-weight: 700;
}
</style>
