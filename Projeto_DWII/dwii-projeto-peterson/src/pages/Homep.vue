<template>
  <div class="home">
    <Headerp></Headerp>
    <Agendanew></Agendanew>
    
  </div>
</template>

<script>
import Agendanew from '../components/Agendanew.vue';
import Headerp from "../components/Headerp.vue";


export default {
  name: "Home",
  components: {
    Headerp,
    Agendanew,   
    },
};
</script>


<style>
</style>
   
