<template>
 <div>
   <Headerp></Headerp>
   <Bannerp></Bannerp>
 </div>
</template>

<script>
import Headerp from "../components/Headerp.vue"; 
import Bannerp from "../components/Bannerp.vue";

export default {
  name: "Newp",
  components: {
    Headerp,
    Bannerp,
    
  },
};

</script>

<style>
.class-header {
  background-color: #6b70de;
  height: 80px;
  width: 100x;
  color: white;
}

.header_right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.logo {
  width: 100px;
  padding: 0;
  margin-top: 5px;
}

.logo_img {
  width: 75%;
}

.header-text {
  color: #eead2d;
  font-size: 20px;
  font-style: italic;
  margin: 0px;
  font-weight: 100;
}
footer {
 width: 100%;
 position: fixed;
 bottom: 0;
 right: 0;
 background: #6b70de;
 color: white;
 text-align: center;
 height: 40px;
 display: flex;
}


</style>