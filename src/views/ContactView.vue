<template>
  <div class="contact">
    <h1>{{title}}</h1>
  </div>
</template>

<script setup>

import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();
const title = computed(
  ()=>{
    return store.state.tituloPrincipal
  }
)

</script>