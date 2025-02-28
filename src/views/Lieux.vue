<script setup>
import { defineProps, ref, onMounted } from "vue";
import lieux from "../../../public/storage/generation1/Lieux.json";
let lieuList = ref([]);
const isLoading = ref(true);
const error = ref(null);

function fetchPokemonList() {
  try {
    lieuList.value = lieux;
    console.log(lieuList.value.lieux);
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
}
onMounted(() => {
  fetchPokemonList();
});
let text = "";
function span(text) {}
</script>
<template>
  <div id="partie" class="grid">
    <main class="col-span-5 mx-5 m-auto">
      <h1 class="text-justify border-4 border-dashed my-2">Lieux</h1>
      <div v-if="isLoading"></div>
      <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
      <article v-else>
        <!-- Lieu -->
        <section v-for="lieu in lieuList.lieux" :key="lieu">
          <h1>{{ lieu.nom_titre }}</h1>

          <h2 v-html="lieu.nom_description"></h2>
          <h3>Personnages qui y vivent :</h3>
          <ul v-for="habitants in lieu.habitants">
            <li>
              <a
                class="lien_habitants"
                :href="habitants.lien"
                rel="noopener noreferrer"
              >
                {{ habitants.nom }}</a
              >
            </li>
          </ul>

          <h3>Bâtiments :</h3>
          <ul v-for="batiments in lieu.batiments">
            <li>
              {{ batiments.nom }}
            </li>
          </ul>
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
.lien_habitants {
  border: none;
}
</style>
