<script setup>
import { defineProps, ref, onMounted } from "vue";
import gymnase from "../../../public/storage/generation1/gymnases.json";
let gymnaseList = ref([]);
const isLoading = ref(true);
const error = ref(null);

function fetchPokemonList() {
  try {
    gymnaseList.value = gymnase;
    console.log(gymnaseList.value.gymnases);
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
      <h1 class="text-justify border-4 border-dashed my-2">
        Les Gymnases et leur Chef
      </h1>
      <p>
        Chaque ville est équipée d’un Gymnase, un lieu d’entraînement pour les
        Dresseurs. Chacune d’elle est dirigée par un Chef, respecté de tous.
      </p>
      <p>
        Il y a huit Gymnases dans le jeu, et il faut battre tous les Chefs pour
        pouvoir compléter l’Encyclopédie Pokémon.
      </p>
      <div v-if="isLoading"></div>
      <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
      <article v-else>
        <!-- Lieu -->

        <table class="text-center m-auto mb-9">
          <tr>
            <th>Image</th>
            <th>Nom japonais</th>
            <th>Nom francisé</th>
            <th>Brève description</th>
          </tr>
          <tr v-for="gymnase in gymnaseList.chef" :key="gymnase">
            <td>
              <figure class="">
                <img
                  class="m-auto"
                  :src="`/storage/${gymnase.img}`"
                  :alt="`${gymnase.nom_francise}`"
                />
              </figure>
            </td>
            <td class="italic">{{ gymnase.nom_japonais }}</td>
            <td class="italic">{{ gymnase.nom_francise }}</td>
            <td>{{ gymnase.description }}</td>
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
