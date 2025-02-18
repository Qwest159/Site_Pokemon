<script setup>
import { defineProps, ref, onMounted } from "vue";
import personnage from "../../../public/storage/generation1/personnages.json";
let personnageList = ref([]);
const isLoading = ref(true);
const error = ref(null);

function fetchPokemonList() {
  try {
    personnageList.value = personnage;
    console.log(personnageList.value.personnage);
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
}
onMounted(() => {
  fetchPokemonList();
});
// if index pair = droite, si index impair alors gauche
</script>
<template>
  <div id="partie" class="grid">
    <main class="col-span-5 mx-5 m-auto">
      <h1 class="text-justify border-4 border-dashed my-2">Personnages</h1>
      <div v-if="isLoading"></div>
      <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
      <article v-else>
        <!-- Lieu -->
        <section
          v-for="personnage in personnageList.personnages"
          :key="personnage"
          class="grid grid-cols-3"
        >
          <div class="col-span-2 border-2">
            <h2>{{ personnage.nom_perso }}</h2>
            <p v-html="personnage.nom_description"></p>
          </div>
          <figure class="col-span-1 border-t-2 border-r-2 border-b-2">
            <img src="" alt="" /> bonjour
          </figure>
        </section>
      </article>
    </main>
  </div>
</template>
<style scoped>
table tr:first-child {
  font-weight: 700;
}
h3 {
  font-weight: 700;
}
h2 {
  font-weight: 700;
}
.lien_habitants {
  border: none;
}
</style>
