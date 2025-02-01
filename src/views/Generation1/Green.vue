<script setup>
// import gen1 from "../../stockage/generation1.json";
import Personnages from "../../stockage/generation1/personnages.json";

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
  <div>
    <div v-if="isLoading"></div>
    <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
    <main v-else>
      <h1 class="font-bold"></h1>
      <article>
        <!-- Personnages -->
        <section id="Personnages">
          <ul class="border-2 m-2">
            <h1>{{ personnagesList.Personnages.nomtitre }}</h1>
            <!--  perso_rencontre -->
            <li
              class="p-3"
              v-for="perso_rencontre in personnagesList.Personnages
                .perso_rencontre"
              :key="perso_rencontre"
            >
              <h3>Nom: {{ perso_rencontre.nom }}</h3>
              <p>Description : {{ perso_rencontre.informations }}</p>
            </li>
          </ul>
          <!-- Chefs -->
          <ul class="border-2 m-2">
            <h1>{{ personnagesList.chefs.nomtitre }}</h1>
            <li
              class="p-3"
              v-for="chefs in personnagesList.chefs.perso_chefs"
              :key="chefs"
            >
              <h3 class="white-space: pre-line">Nom: {{ chefs.nom }}</h3>
              <!-- <p>Description : {{ chefs.informations }}</p> -->
            </li>
          </ul>
        </section>
        <section>
          <h1>Pokedex</h1>
        </section>
        <section>Objetdex</section>
        <section>Geodex</section>
      </article>
    </main>
  </div>
</template>
<style>
h3 {
  white-space: pre-line !important;
}
</style>
