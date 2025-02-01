<script></script>
<template>
  <div class="grid grid-cols-6">
    <nav
      id="partie gauche"
      class="col-span-1 flex flex-col h-screen bg-linear-to-t from-green-500 to-red-500 text-white"
    >
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/Manuel">Traduction du manuel japonais</RouterLink>
      <RouterLink to="/Versions"
        >Différences entre les deux versions</RouterLink
      >
    </nav>

    <div
      id="partie droite"
      class="col-span-5 m-auto mx-2 font-extrabold text-9xl text-center"
    >
      Ceci sont les versions
    </div>
  </div>
</template>
