<script setup>
// import gen1 from "../../stockage/generation1.json";
import { RouterLink, RouterView } from "vue-router";

import Personnages from "../../public/storage/generation1/personnages.json";

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
  <div class="col-span-5 m-auto mx-2">
    <h1>Pocket Monsters Rouge (Aka) & Vert (Midori)</h1>

    <figure class="m-auto">
      <img
        src="/storage/img/Accueil/jaquette_rv.jpg"
        alt="jaquette rouge et vert"
      />
    </figure>
    <h2><span>Développeur :</span> Game Freak</h2>
    <h2><span>Éditeur :</span> Nintendo</h2>
    <h2><span>Console :</span> Game Boy</h2>
    <h2><span>Genre :</span> RPG</h2>
    <h2><span>Date de sortie :</span> 27/02/1996</h2>
    <h2>
      <span>Noms japonais :</span>
      <ul class="pl-12">
        <li>ポケットモンスター赤 (Pocket Monsters Aka (Rouge))</li>
        <li>ポケットモンスター緑 (Pocket Monsters Midori (Vert))</li>
      </ul>
    </h2>

    <p>
      Résumé : Le jeu met en scène un garçon de onze ans nommé Red (dans la
      version Rouge) ou Green (dans la version Verte), qui part à l’aventure le
      jour où le Professeur Okido lui offre son premier Pokémon. Un Pokémon ? Il
      s’agit de créatures vivant dans la nature. Ceux-ci peuvent combattre, ce
      qui leur fait gagner de l’expérience. Cette expérience leur permet
      d’acquérir de nouvelles techniques et même éventuellement d’évoluer et de
      changer de forme ! Votre objectif est double : compléter l’encyclopédie
      Pokémon que vous a fourni le Professeur Okido et vaincre les huits Chefs
      de Gymnase.
    </p>
  </div>
</template>
<style>
li {
  @apply list-disc;
}
span {
  font-weight: 700;
}
h1 {
  text-align: center;
  font-weight: 700;
  font-size: x-large;
  margin: 0.5em 0em;
}
h2 {
}
h3 {
  white-space: pre-line !important;
  font-weight: 500;
  font-size: large;
}
a {
  @apply border-b-2;

  padding: 0.5em 0.4em;
  font-weight: 700;
}
</style>
