<template>
  <!-- Menu principal -->
  <the-menu></the-menu>
  <router-view />
  <!-- Contenido principal -->
  <div>

  </div>
  <!-- Footer -->
  <the-footer></the-footer>
</template>

<script setup>
//Dependencias
import TheMenu from "./components/TheMenu";
import TheFooter from "./components/TheFooter.vue";

</script>

<style lang="scss">

body{
  margin: 0;
  padding: 0;
}


#app {
  margin: 0;
  padding:0 ;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
