<script setup>
import { RouterLink, RouterView } from "vue-router";
import { defineProps, ref, onMounted } from "vue";

import { Bars3Icon } from "@heroicons/vue/24/solid";
let change = ref(false);
function responsive() {
  console.log(change.value);

  if (change.value) {
    return (change.value = false);
  } else {
    return (change.value = true);
  }
}
</script>

<template>
  <div id="partie_body">
    <header>
      <div
        id="nav_gsm"
        class="hidden w-full items-end flex-col bg-linear-to-l from-green-500 to-red-500"
      >
        <Bars3Icon
          @click="responsive()"
          class="cursor-pointer text-black w-16 h-16"
        />
        <div
          id="nav_gsm_lien"
          v-if="change"
          class="flex flex-col border-2 border-white m-auto w-full text-center"
        >
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/Manuel">Traduction du manuel japonais</RouterLink>
          <RouterLink to="/Versions"
            >Différences entre les deux versions</RouterLink
          >
          <RouterLink to="/Histoire">Histoire</RouterLink>
          <RouterLink to="/Lieux">Lieux</RouterLink>
          <RouterLink to="/Personnages">Personnages</RouterLink>
          <RouterLink to="/Techniques">Techniques</RouterLink>
          <RouterLink to="/Pokemons">Pokémon</RouterLink>
          <RouterLink to="/Objets">Objets</RouterLink>
          <RouterLink to="/Gymnases">Gymnases</RouterLink>
          <RouterLink to="/Controles">Mécaniques de jeu</RouterLink>
        </div>
      </div>

      <nav
        id="nav_ordi"
        class="nav_ordi col-span-1 flex-col flex-wrap bg-linear-to-t from-green-500 to-red-500 text-white h-full"
      >
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/Manuel">Traduction du manuel japonais</RouterLink>
        <RouterLink to="/Versions"
          >Différences entre les deux versions</RouterLink
        >
        <RouterLink to="/Histoire">Histoire</RouterLink>
        <RouterLink to="/Lieux">Lieux</RouterLink>
        <RouterLink to="/Personnages">Personnages</RouterLink>
        <RouterLink to="/Techniques">Techniques</RouterLink>
        <RouterLink to="/Pokemons">Pokémon</RouterLink>
        <RouterLink to="/Objets">Objets</RouterLink>
        <RouterLink to="/Gymnases">Gymnases</RouterLink>
        <RouterLink to="/Controles">Mécaniques de jeu</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style>
#nav_ordi a,
#nav_gsm_lien a {
  @apply border-b-2;
  padding: 0.5em 0.4em;
  font-weight: 700;
  color: white;
}
a {
  color: blue;
}
/* partie gsm */
@media (min-width: 0px) {
  nav {
    display: none;
  }
  #nav_gsm {
    display: flex;
  }
  #partie_droite {
    @apply col-span-6;
  }
  #image_gauche {
    height: 18em;
  }
  #image_droite {
    height: 18em;
  }
  .img_gsm img,
  .img_gsm figcaption {
    margin: auto;
    padding: 0;
    text-align: center;
  }
  /* -------Mécanique de jeu --------- */
  .gsm_th {
    font-size: 0.9rem !important;
  }
}
/* partie ORDINATEUR */
@media (min-width: 760px) {
  #nav_gsm,
  #nav_gsm_lien {
    display: none;
  }

  #partie_body {
    display: grid;
    @apply grid-cols-6;
  }
  #nav_ordi {
    display: flex;
  }
  header {
    @apply col-span-1;
  }
  #partie {
    @apply col-span-5;
  }
  #image_gauche {
    height: 35em;
    margin-bottom: 5em;
  }
  #image_droite {
    height: 35em;
    margin-bottom: 5em;
  }
  #text-accueil {
    margin: 2em 7em;
  }
  .img_gsm img {
    margin: 0;
  }
  .img_gsm .menu1 {
    text-align: left;
    padding-left: 3em;
  }
  .img_gsm .menu2 {
    text-align: left;
    padding-left: 1em;
  }
}
/* adaptation pour accueil */
@media (max-width: 1120px) {
  #description-accueil {
    grid-template-columns: 1fr;
  }
  #text-accueil {
    margin: 2em 2em;
  }
  .info-accueil {
    margin: 2em 2em 0em 2em;
  }
}
nav {
  font-weight: 600;
}
h1,
h2,
h3,
p {
  margin: 1em 0em;
}
h2 {
  font-weight: 700;
  font-size: larger;
}
h3 {
  color: rgb(145, 145, 145);
  margin-left: 3em;
}
</style>
