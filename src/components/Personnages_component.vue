<script setup>
// import Personnages from "../stockage/generation1/generation1.json";

// let personnagesList = ref([]);

// personnagesList.value = Personnages;
</script>
<template>
  <ul class="border-2 m-2">
    <h1>{{ personnagesList.Personnages.nomtitre }}</h1>
    <!--  perso_rencontre -->
    <li
      class="p-3"
      v-for="perso_rencontre in personnagesList.Personnages.perso_rencontre"
      :key="perso_rencontre"
    >
      <h3>Nom: {{ perso_rencontre.nom }}</h3>
      <p>Description : {{ perso_rencontre.informations }}</p>
    </li>
  </ul>
  <!-- Chefs -->
  <ul class="border-2 m-2">
    <h1>{{ personnagesList.chefs.nomtitre }}</h1>
    <li
      class="p-3"
      v-for="chefs in personnagesList.chefs.perso_chefs"
      :key="chefs"
    >
      <h3>Nom: {{ chefs.nom }}</h3>
      <!-- <p>Description : {{ chefs.informations }}</p> -->
    </li>
  </ul>
</template>
