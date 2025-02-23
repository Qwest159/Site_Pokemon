<script setup>
import { defineProps, ref, onMounted } from "vue";
import pokemon from "../../../public/storage/generation1/pokemon.json";
let pokemonList = ref([]);
const isLoading = ref(true);
const error = ref(null);

function fetchPokemonList() {
  try {
    pokemonList.value = pokemon;
    console.log(pokemonList.value);
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
  <main id="partie" class="mx-5">
    <h1 class="border-4 border-dashed">Pokémon</h1>
    <div v-if="isLoading"></div>
    <div v-else-if="error">Une erreur est survenue : {{ error.message }}</div>
    <article v-else>
      <!-- Lieu -->
      <table class="text-center m-auto mb-9">
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Nom japonais</th>
          <th>Nom francisé</th>
          <th>Type</th>
        </tr>
        <tr v-for="pokemon in pokemonList.pokemons" :key="pokemon.id" class="">
          <td>{{ pokemon.id_pokemon }}</td>
          <td>
            <figure class="w-16" v-if="pokemon.image">
              <img
                class="m-auto"
                :src="`/storage/${pokemon.image}`"
                :alt="`${pokemon.nom_francise}`"
              />
            </figure>
          </td>
          <td class="italic">{{ pokemon.nom_japonais }}</td>
          <td class="italic">{{ pokemon.nom_francise }}</td>
          <td>{{ pokemon.type }}</td>
        </tr>
      </table>
    </article>
  </main>
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
