import VueRouter from "vue-router";
import Homep from "./pages/Homep.vue";
import detalheproduto from "./pages/detalheproduto.vue";

const routes = [
    {
        path: "/", component: Homep
    },{
        path: "/produto",component: detalheproduto
    }
]

const router  = new VueRouter({
    routes,
    mode: 'history'
})

export default router