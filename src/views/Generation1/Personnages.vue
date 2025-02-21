<script setup>
import { defineProps, ref, onMounted } from "vue";
import personnage from "../../../public/storage/generation1/personnages.json";
let personnageList = ref([]);
const isLoading = ref(true);
const error = ref(null);

function fetchPokemonList() {
  try {
    personnageList.value = personnage;
    console.log(personnageList.value.personnages);
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
  <div id="partie">
    <main class="col-span-5 mx-5 m-auto">
      <h1 class="text-justify border-4 border-dashed my-2">Personnages</h1>
      <div v-if="isLoading"></div>
      <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
      <article v-else>
        <!-- Lieu -->
        <table
          v-for="personnage in personnageList.personnages"
          :key="personnage"
          class=""
        >
          <tr class="grid-cols-3" v-if="personnage.id % 2 == 0">
            <td class="col-span-2" :id="personnage.id">
              <h2>{{ personnage.nom_perso }}</h2>
              <p v-html="personnage.nom_description"></p>
            </td>
            <td class="col-span-1">
              <figure class="">
                <img
                  :src="`/storage/${personnage.nom_img}`"
                  :alt="`${personnage.nom_perso}`"
                />
              </figure>
            </td>
          </tr>
          <tr class="grid-cols-3" v-else>
            <td class="col-span-1">
              <figure>
                <img
                  :src="`/storage/${personnage.nom_img}`"
                  :alt="`${personnage.nom_perso}`"
                />
              </figure>
            </td>
            <td class="col-span-2 border-2" :id="personnage.id">
              <h2>{{ personnage.nom_perso }}</h2>
              <p v-html="personnage.nom_description"></p>
            </td>
          </tr>
        </table>
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
