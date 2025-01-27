<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="flex space-x-4 bg-amber-500">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/green">Green</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  font-weight: 600;
}
</style>
