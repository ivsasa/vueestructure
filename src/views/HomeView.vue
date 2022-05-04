<template>
  <div class="home">
    <h1>
      {{title}}
    </h1>
  <img  alt="Carballo" src="../assets/hoja.jpg">
   <saludo></saludo>
   
   
  
  </div>
  </template>




<script setup>
//Carga de dependencias
import saludo from "../components/ElSaludo.vue"
//import datos from "../assets/senlleiras.json"

//Importar el store de vuex
import {useStore} from "vuex";
import { computed } from "vue";

//Inicializar/cargar store
const store = useStore();
const title = computed(
  ()=>{
    return store.state.tituloPrincipal
  }
)

//Variables
//let titulo = "Datos de Senlleiras"

//console.log(datos,titulo);






</script>

<style>
img{
  width: 300px;
}
</style>


