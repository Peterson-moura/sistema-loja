import VueRouter from "vue-router";
import Homep from "./pages/Homep.vue";
import Newp from "./pages/Newp.vue";

const routes = [
    {
        path: "/", component: Homep
    },
    {
        path: "/produto", component: Newp
    }
   
]

const router  = new VueRouter({
    routes,
    mode: 'history'
})

export default router