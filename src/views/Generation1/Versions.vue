<script setup>
import { defineProps, ref, onMounted } from "vue";

let change = ref(false);
</script>
<template>
  <div class="grid grid-cols-6">
    <div
      id="partie droite"
      class="col-span-5 m-auto mx-2 font-extrabold text-9xl text-center"
    >
      Ceci sont les versions
    </div>
  </div>
</template>
