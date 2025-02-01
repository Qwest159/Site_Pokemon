<script setup></script>
<template>
  <div class="grid grid-cols-6">
    <nav
      id="partie gauche"
      class="col-span-1 flex flex-col h-screen bg-linear-to-t from-red-500 to-green-500 text-white"
    >
      <RouterLink d to="/">Accueil</RouterLink>
      <RouterLink d to="/Manuel">Traduction du manuel japonais</RouterLink>
      <RouterLink to="/Versions"
        >Différences entre les deux versions</RouterLink
      >
    </nav>

    <div
      id="partie droite"
      class="col-span-5 m-auto mx-2 font-extrabold text-9xl text-center"
    >
      Ceci est le manuel
    </div>
  </div>
</template>
