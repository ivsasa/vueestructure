<template>
  <!-- Menu principal -->
  <the-menu></the-menu>
  <!-- Contenido principal -->
  <div>
    <router-view />
  </div>
  <!-- Footer -->
  <the-footer></the-footer>
</template>

<script setup>
//Dependencias
import TheMenu from "./components/TheMenu";
import TheFooter from "./components/TheFooter.vue";
//Importacion de ficheros scss con nodejs
require("@/assets/scss/_reset.scss");
require("@/assets/scss/estructure.scss");

</script>
