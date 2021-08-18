<template>
  <header class="class-header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="logo">
            <img class="logo_img" src="../assets/logop.png" />
          </h1>
        </div>
        <div class="col-md-6 header__right">
          <p class="header-text">
            <router-link to="/produto">
              Cliente Pedidos
            </router-link>
          </p>
        </div>
      </div>
      <footer class="footer">Todos os direitos reservados
        <router-link>         
        </router-link>        
        </footer>   
    </div>
  </header>
  
</template>

<script>
export default {
  name: "Headerp",
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
 display: block; 
}


</style>