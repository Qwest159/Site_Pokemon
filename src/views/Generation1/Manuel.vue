<script setup>
import { defineProps, ref, onMounted } from "vue";

//EN FUNCTION
// 1) faire un tableau des immages qu'on souhaite
// 2) afficher id un par un
// 3) avoir un button pour cliquer dessus => id +1 pour afficher l'index suivant

let tableaux_img = [
  "/img/Pages FR/Manuel_p1.bmp",
  "/img/Pages FR/Manuel_p2.bmp",
  "/img/Pages FR/Manuel_précautions_p1.bmp",
  "/img/Pages FR/Manuel_précautions_p2.bmp",
];
let id_image = ref(0);

function click(quantity) {
  //rajout de if si l'index depasse un count, alors va a 0 ou va a count
  // ATTENTION REGARDE COUNT CAR TABLEAUX INDEX EST DIFFERENT

  if (quantity) {
    id_image.value += quantity;

    if (id_image.value == tableaux_img.length) {
      id_image.value = 0;
    } else if (id_image.value < 0) {
      id_image.value = tableaux_img.length - 1;
    }
    console.log(id_image.value);
  }
  //   console.log(id_image.value);

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
      <p class="text-xl text-center">Ceci est le manuel</p>
      <figure>
        <button @click="click(-1)" id="button-1" class="bg-red-600 p-2">
          -1
        </button>
        <img :src="`/storage/${click()}`" alt="" />
        <button type="button" class="bg-green-600 p-2" @click="click(+1)">
          +1
        </button>
      </figure>
    </main>
  </div>
</template>
