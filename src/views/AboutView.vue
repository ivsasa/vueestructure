<template>
  <div class="about">
    <h1>{{title}}</h1>
  </div>
</template>

<script setup>
//Importacion de dependencias
import {useStore} from "vuex";
import {computed} from "vue";
// import { callbackify } from "util";


//Cargo el store/datos centralizados
const store = useStore();


const title = computed(
  ()=>{
    return store.state.tituloPrincipal
    }
  );

</script>