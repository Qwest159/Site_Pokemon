<script setup>
import { defineProps, ref, onMounted } from "vue";
import pokemon from "../../../public/storage/generation1/pokemon.json";
let pokemonList = ref([]);
const isLoading = ref(true);
const error = ref(null);

function fetchPokemonList() {
  try {
    pokemonList.value = pokemon;
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
          <td>
            a
            <a :href="`/Pokemons_id/${pokemon.id}`">click 4</a>
            <router-link :to="`/Pokemons_id/${pokemon.id}`">{{
              pokemon.id_pokemon
            }}</router-link>
          </td>
          <td>
            <router-link :to="`/Pokemons_id/${pokemon.id}`"
              ><figure class="w-16" v-if="pokemon.image">
                <img
                  class="m-auto"
                  :src="`/storage/${pokemon.image}`"
                  :alt="`${pokemon.nom_francise}`"
                /></figure
            ></router-link>
          </td>
          <td class="italic">
            <router-link :to="`/Pokemons_id/${pokemon.id}`">
              {{ pokemon.nom_japonais }}
            </router-link>
          </td>
          <td class="italic">
            <router-link :to="`/Pokemons_id/${pokemon.id}`">
              {{ pokemon.nom_francise }}
            </router-link>
          </td>
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
a {
  color: black;
}
a:hover {
  color: red;
}
</style>
