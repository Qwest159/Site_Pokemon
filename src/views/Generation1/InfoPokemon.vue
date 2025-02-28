<script setup>
import { defineProps, ref, onMounted } from "vue";
import pokemon from "../../../public/storage/generation1/pokemon.json";
let pokemonList = ref([]);
const isLoading = ref(true);
const error = ref(null);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

// ATTENTION ID -1 (met +1 par rapport au lien)
const pokemon_id = props.id;

console.log(pokemon_id);

function fetchPokemonList() {
  try {
    pokemonList.value = pokemon.pokemons[pokemon_id - 1];
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
        <tr>
          <td>{{ pokemonList.id_pokemon }}</td>
          <td>
            <figure>
              <img :src="`/storage/${pokemonList.image}`" alt="" />
            </figure>
          </td>
          <td>{{ pokemonList.nom_japonais }}</td>
          <td>{{ pokemonList.nom_francise }}</td>
          <td>{{ pokemonList.type }}</td>
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
