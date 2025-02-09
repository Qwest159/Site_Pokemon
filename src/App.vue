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
          class="flex flex-col border-4 m-auto w-full text-center"
        >
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/Manuel">Traduction du manuel japonais</RouterLink>
          <RouterLink to="/Versions"
            >Différences entre les deux versions</RouterLink
          >
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
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style>
/* partie gsm */
@media (min-width: 100px) {
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
  #text-accueil {
    margin: 0;
  }
}
/* partie ORDINATEUR */
@media (min-width: 500px) {
  #nav_gsm,
  #nav_gsm_lien {
    display: none;
  }
  #text-accueil {
    margin: 2em 7em;
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
}
nav {
  font-weight: 600;
}
</style>
