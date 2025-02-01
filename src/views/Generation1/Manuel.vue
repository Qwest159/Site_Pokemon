<script setup>
import { defineProps, ref, onMounted } from "vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid";
let tableaux_img = [
  "/img/Pages FR/Manuel_p1.bmp",
  "/img/Pages FR/Manuel_précautions_p1.bmp",
  "/img/Pages FR/Manuel_précautions_p2.bmp",
  "/img/Pages FR/Manuel_p2.bmp",
  "/img/Pages FR/Manuel_p3.bmp",
  "/img/Pages FR/Manuel_p4.jpg",
];
let id_image = ref(0);

function click(quantity) {
  if (quantity) {
    id_image.value += quantity;
    if (id_image.value == tableaux_img.length) {
      id_image.value = 0;
    } else if (id_image.value < 0) {
      id_image.value = tableaux_img.length - 1;
    }
  }
  return tableaux_img[id_image.value];
}
</script>
<template>
  <div class="grid grid-cols-6">
    <nav
      id="partie gauche"
      class="col-span-1 flex flex-col flex-wrap h-full bg-linear-to-t from-green-500 to-red-500 text-white"
    >
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/Manuel">Traduction du manuel japonais</RouterLink>
      <RouterLink to="/Versions"
        >Différences entre les deux versions</RouterLink
      >
    </nav>

    <main id="partie droite" class="col-span-5 mx-2 font-extrabold">
      <figure class="flex flex-row justify-center">
        <button
          @click="click(-1)"
          id="button-1"
          class="bg-red-600 p-2 h-12 self-center rounded-full"
        >
          <ArrowLeftIcon class="w-6 h-6 font-extrabold text-white" />
        </button>
        <button @click="click(-1)" id="button+1">
          <img
            :src="`/storage/${click()}`"
            alt="Manuel"
            class="min-w-28 h-screen rounded-2xl"
          />
        </button>

        <button
          type="button"
          class="bg-green-600 p-2 h-12 self-center rounded-full text-white"
          @click="click(+1)"
        >
          <ArrowRightIcon class="w-6 h-6" />
        </button>
      </figure>
    </main>
  </div>
</template>
