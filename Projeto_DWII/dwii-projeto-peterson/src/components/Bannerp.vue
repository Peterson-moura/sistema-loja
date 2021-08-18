<template>
  <section class="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>Detalhe do produto</div>
        </div>
      </div>
    <div class="banner__imgs">
     
      </div>
    <div class="container banner__content">
      <div class="row">
        <div class="col-md-10">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
    </div>
  </section>
  
</template>

<style>
.banner {
    width: 100%;
    height : 500px;
    background-color : #212121;
    position : relative;
    color : #e2e2e2;
    overflow: hidden;
  }

  .banner__content{
    position: relative
  }

  .banner__content p{
    font-size : 20px;
    line-height: 25px;
  }

  .banner__imgs{
    position : absolute;
    top: 0;
    left: 0;
    width: 100%;
    height : 700px;
  }

  .images{
    width: 30%;
    position : absolute;       
  }
  

  .banner__content .row {
    align-items: flex-end;
  }

  .banner__content p{
    font-size : 20px;
    margin-left : 70px;
    line-height: 25px;
  }

  .banner__content button{
    font-size : 20px;
    margin-left : 70px;
    width : 170px;
    height: 40px;
    background-color: #e2e2e2;
    color: #212121;
    border: none;
    font-size: 18px;
    font-weight: 900;
    border-radius : 6px; 
    margin-bottom : 54px;
  }
  
</style>
