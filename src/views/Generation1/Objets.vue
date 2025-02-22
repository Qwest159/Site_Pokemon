<script setup>
import { defineProps, ref, onMounted } from "vue";
// import personnage from "../../../public/storage/generation1/personnages.json";
let personnageList = ref([]);
const isLoading = ref(false);
const error = ref(null);

// function fetchPokemonList() {
//   try {
//     personnageList.value = personnage;
//     console.log(personnageList.value.personnages);
//   } catch (err) {
//     error.value = err;
//   } finally {
//     isLoading.value = false;
//   }
// }
// onMounted(() => {
//   fetchPokemonList();
// });
// if index pair = droite, si index impair alors gauche
</script>
<template>
  <div id="partie">
    <main class="col-span-5 mx-5 m-auto">
      <h1 class="text-justify border-4 border-dashed my-2">Objets</h1>
      <div v-if="isLoading"></div>
      <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
      <article v-else>
        <!-- Lieu -->
        Vous pouvez porter 20 objets maximum à la fois. Le menu objet vous
        permet de les afficher, les utiliser et les jeter. Voici une liste des
        objets. Monster Ball (モンスターボール) : sert à attraper les Pokémon.
        Carte (タウンマップ, Town Map) Antidote (どくけし, Doku Keshi)
        Soigne-Paralysie (まひなおし, Mahi Naoshi).
      </article>
    </main>
  </div>
</template>
<style scoped>
h3 {
  font-weight: 700;
}
h2 {
  font-weight: 700;
}
.lien_lieu {
  border: none;
}
</style>
