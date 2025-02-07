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
  "/img/Pages FR/Manuel_p5.jpg",
  "/img/Pages FR/Manuel_p6.jpg",
];
let id_image = ref(0);
let rajout = ref(0);

let nbr_tableaux = ref(tableaux_img.length - 1);

function click(quantity) {
  // console.log(id_image.value);

  rajout.value = 0;
  if (quantity) {
    id_image.value += quantity;
    if (id_image.value > tableaux_img.length) {
      // console.log("tableauxlongueur = id_image");
      id_image.value = 0;
    }
    if (id_image.value < nbr_tableaux.value) {
      // console.log("rajout +1 pour difference");
      rajout.value += 1;
    }
    if (id_image.value < 0) {
      // console.log("passe 0 + longueur tableaux");
      id_image.value = 0;
      id_image.value = tableaux_img.length - 2;
    }
    // console.log(id_image.value);
  }
  return [
    () => tableaux_img[id_image.value], // Fonction pour image_gauche
    () => tableaux_img[id_image.value + rajout.value], // Fonction pour image_droite
  ];
}
let [image_gauche, image_droite] = click();
</script>
<template>
  <div id="partie" class="grid">
    <main class="col-span-5 mx-2 text-center">
      <h1 class="text-center border-4 border-dashed my-2">
        Traduction du manuel japonais
      </h1>

      <h3>
        Voici la traduction du manuel japonais de Pokémon
        <span>Version Verte</span>
      </h3>
      .
      <figure class="flex flex-row justify-center">
        <!-- diminuer -->
        <button
          @click="click(id_image === 1 ? -1 : -3)"
          id="button-1"
          class="bg-red-600 mr-1 p-2 h-12 self-center rounded-full cursor-pointer"
        >
          <ArrowLeftIcon
            class="w-6 h-6 font-extrabold text-white cursor-pointer"
          />
        </button>
        <!-- IMAGE GAUCHE -->
        <button
          v-if="id_image < nbr_tableaux"
          class="cursor-pointer"
          @click="click(id_image === 0 ? +1 : +3)"
          id="button+1"
        >
          <img
            :src="`/storage/${image_gauche()}`"
            alt="Manuel"
            id="image_gauche"
            class=""
          />
        </button>
        <!-- IMAGE droite -->

        <button
          v-if="id_image != 0"
          class="cursor-pointer"
          @click="click(id_image === 0 ? +1 : +3)"
          id="button+1"
        >
          <img
            :src="`/storage/${image_droite()}`"
            alt="Manuel"
            id="image_droite"
            class=""
          />
        </button>
        <button
          type="button"
          class="bg-green-600 ml-1 p-2 h-12 self-center rounded-full text-white cursor-pointer"
          @click="click(id_image === 0 ? +1 : +3)"
        >
          <ArrowRightIcon class="w-6 h-6" />
        </button>
      </figure>
    </main>
  </div>
</template>
<style>
img {
  /* box-shadow: 0px 5px 9px 5px rgba(0, 0, 0, 0.75); */
  height: 74.5vh;
}
#image_gauche {
  border-top-left-radius: 1em 1em;
  border-bottom-left-radius: 1em 1em;
  border-top: solid 0.2em;
  border-left: solid 0.2em;
  border-right: solid 0.1em;
  border-bottom: solid 0.2em;
}
#image_droite {
  border-top-right-radius: 1em 1em;
  border-bottom-right-radius: 1em 1em;
  border-top: solid 0.2em;
  border-right: solid 0.2em;
  border-left: solid 0.1em;

  border-bottom: solid 0.2em;
}
h1 {
  border-top-color: rgb(63, 163, 100);
  border-left-color: rgb(63, 163, 100);
  border-bottom-color: rgb(246, 76, 96);
  border-right-color: rgb(246, 76, 96);
}
span {
  color: rgb(63, 163, 100);
}
</style>
