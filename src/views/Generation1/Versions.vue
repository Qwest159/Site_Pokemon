<script setup>
import { defineProps, ref, onMounted } from "vue";

let change = ref(false);
</script>
<template>
  <div id="partie">
    <main class="col-span-5 mx-5 m-auto text-center">
      <h1 class="text-center border-4 border-dashed my-2">
        Différences entre les deux versions
      </h1>

      <p>
        Le jeu Pokémon existe en deux versions : la version Rouge
        <span>(Aka)</span> et la version Verte
        <span class="italic">(Midori)</span>. Certaines espèces de Pokémon sont
        exclusives à une version du jeu.
      </p>
      <p class="font-bold">Pokémon Exclusifs à Pokémon Rouge</p>
      <p class="font-bold">Pokémon Exclusifs à Pokémon Vert</p>
      <p>
        Par ailleurs, le taux d’apparition des Pokémon peut varier entre les
        deux jeux. Voici un tableau comparatif.
      </p>
      <table class="m-auto">
        <tr>
          <td>Pokémon</td>
          <td>Lieu</td>
          <td>Pokémon Rouge</td>
          <td>Pokémon Vert</td>
        </tr>
      </table>
    </main>
  </div>
</template>
<style scoped>
table tr:first-child {
  font-weight: 700;
}
</style>
