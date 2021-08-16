<template>
  <div class="home">
    <Headerp></Headerp>
    <Agendanew></Agendanew>
    <detalheproduto></detalheproduto>
  </div>
</template>

<script>
import Agendanew from '../components/Agendanew.vue';
import Headerp from "../components/Headerp.vue";
import detalheproduto from '../components/detalheproduto.vue';

export default {
  name: "Home",
  components: {
    Headerp,
    Agendanew,
    detalheproduto,
   
    },
};
</script>


<style>
</style>
   
