<template>
  <section class="agenda">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Produtos</h2>
        </div>
        <div class="col-md-6">
          <input type="text" placeholder="Pesquisar ..." v-model="search" />
        </div>
      </div>
      <div class="row">
        <div v-for="event in eventsFiltered" :key="event.id" class="col-md-4">
          <Cardnew :title="event.title" :description="event.description" />         
        </div>
      </div>
      
    </div>
   
  </section>
</template>
<script>
import Cardnew from "./Cardnew.vue";

export default {
  name: "Agenda",
  components: {
    Cardnew,
  },
  data: function () {
    return {
      search: "",
      events: [
        {
          id: 1,
          title: "Mouse Gamer Redragon Cobra, 10000DPI, Chroma, Preto - M711",
          description: `Por: R$ 127,67`,
          img: require("../assets/logop.png"),
        },
        {
          id: 2,
          title:
            "Mouse Gamer Redragon Nothosaur, 3200DPI, Com LED, Preto - M606",
          description: `R$ 63,90`,
          img: require("../assets/teclado1.jpg"),
        },
        {
          id: 3,
          title: "Mouse Logitech M90 Preto 1000DPI - 910-004053",
          description: `R$ 23,90`,
        },
        {
          id: 4,
          title:
            "Teclado Mecânico Gamer HyperX Mars, RGB, Switch Outemu Blue, US - HX-KB3BL3-US/R4",
          description: `R$ 379,90`,
        },
        {
          id: 5,
          title:
            "Teclado e Mouse Microsoft Wired Desktop 600 Multimídia ABNT2 - APB00005",
          description: `R$ 99,90`,
        },
        {
          id: 6,
          title:
            "Teclado Mecânico Gamer T-Dagger Bora Single, LED White, Switch Blue, ABNT2 - T-TGK313-BL",
          description: `R$ 169,00`,
        },
        {
          id: 7,
          title:
            "Monitor Brazil PC 19, LED Widescreen, HDMI, Bivolt, Preto - BPC-19WE02-B",
          description: `R$ 599,90`,
        },
        {
          id: 8,
          title:
            "Monitor LG LED 23.8´ Widescreen, Full HD, IPS, HDMI - 24MK430H",
          description: `R$ 919,90`,
        },
        {
          id: 9,
          title: "Monitor AOC LED 21.5´ Widescreen, Full HD, HDMI/VGA - 22B1H",
          description: `R$ 845,26`,
        },
      ],
    };
  },
  computed: {
    eventsFiltered: function () {
      return this.events.filter(
        (event) =>
          event.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
  },
};
</script>
<style>
.agenda {
  padding: 56px 0px;
  background-color: #e2e2e2;
  width: 100%;
  height: 800px;
}
.agenda .row {
  align-items: flex-start;
}
.agenda .agenda__title {
  font-size: 36px;
  padding: 0;
  margin: 0;
}
.agenda input {
  border-radius: 50px;
  background-color: #f1f1f1;
  border: none;
  width: 70%;
  height: 30px;
  padding: 4px 14px;
  float: right;
}




</style>
