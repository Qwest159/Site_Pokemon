<script setup>
import { defineProps, ref, onMounted } from "vue";
import competence from "../../../public/storage/generation1/techniques.json";
let competenceList = ref([]);
const isLoading = ref(true);
const error = ref(null);

function fetchPokemonList() {
  try {
    competenceList.value = competence;
    console.log(competenceList.value.competences);
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
      <h1 class="text-justify border-4 border-dashed my-2">
        Liste des techniques
      </h1>
      <h3>
        Il existe plusieurs techniques. Chacune est caractérisée par un nombre
        de Points de Pouvoirs (PP), c’est à dire le nombre de fois qu’un Pokémon
        peut l’utiliser :
      </h3>
      <div v-if="isLoading"></div>
      <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
      <article v-else>
        <!-- Lieu -->
        <table class="text-center m-auto">
          <tr>
            <th>Nom japonais</th>
            <th>Nom francisé</th>
            <th>PP</th>
          </tr>
          <tr
            v-for="competence in competenceList.competences"
            :key="competence.id"
            class=""
          >
            <td class="" v-html="competence.nom_japonais"></td>
            <td class="">{{ competence.nom_francise }}</td>
            <td>{{ competence.PP }}</td>
          </tr>
        </table>
      </article>
    </main>
  </div>
</template>
<style scoped>
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
</style>
