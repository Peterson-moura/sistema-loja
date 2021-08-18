<template>
  <section class="news">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="news__title">Detalhes do Produto</h2>
        </div>
      </div>
      
      <div class="row">
        
        <div
          v-for="myNew in news"
          :key="myNew.id"
          :class="{ 'col-md-6': myNew.id === 1, 'col-md-6': myNew.id !== 1 }">
          <div class="news__box">
            
            <img :src="myNew.img" />
            
                     
            <h3>{{ myNew.title }}</h3>

            <div class="row col-md-6"> R$ 127,67 </div>
            <div class="quantidade_produto">Quantidade</div> 
              <input type="number col-md-6" class="quantidade_produto"/>
              
            
            
                       
            <div class="">Descrição</div>
               
            <p>{{ myNew.text }}</p>                
          </div>
        </div>
        
        <div class="col-md-12">
           <button class="news__btn"> Fazer Pedido</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NewsComponent",
  data: function () {
    return {
      news: [
        {
          id: 1,
          title: "Mouse Gamer Redragon Cobra, 10000DPI, Chroma, Preto - M711",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          img: require("../assets/mouse1.jpg"),
        },        
        
      ],
    };
  },
};
</script>

<style>
.news {
  background-color: #212121;
  padding: 56px 0;
  color: #e2e2e2;
}
.news__title {
  font-size: 36px;
}
.news h3 {
  font-size: 26px;
}
.news p {
  font-size: 16px;
}
.news span {
  color: #c3121c;
  font-size: 14px;
}
.news img {
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto ;
}
.news__box {
  margin-bottom: 30px;
}
.news button {
  width: 170px;
  height: 40px;
  background: #c3121c;
  color: #212121;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  margin: 30px auto;
}

.news__btn {
  display: inherit;
  text-align: center;
}


.quantidade_produto{
width: 10%;
display: block;
margin-left: auto;
}

</style>
