<template>
<section class="gallery">
    <h1>
        {{title}}
    </h1>
    <div class="contenedor-galeria">
        <MiImagen></MiImagen>
        <MiImagen></MiImagen>
        <MiImagen/>
        <mi-imagen></mi-imagen>
        <MiImagen></MiImagen>
        <MiImagen></MiImagen>
        <MiImagen/>
        <mi-imagen></mi-imagen>
    </div>
</section>

</template>

<script setup>
//Cargar dependencias
import {useStore} from "vuex";
import {computed} from "vue";
import MiImagen from "@/components/MiImagen.vue";

//Cargar el store
const store = useStore();
const title = computed (
    ()=>{
        return store.state.tituloPrincipal
    }
);

</script>

<style>
.contenedor-galeria{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}



</style>