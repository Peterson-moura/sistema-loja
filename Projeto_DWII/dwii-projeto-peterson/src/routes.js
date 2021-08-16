import VueRouter from "vue-router";
import Homep from "./pages/Homep.vue";


const routes = [
    {
        path: "/", component: Homep
    },
   
]

const router  = new VueRouter({
    routes,
    mode: 'history'
})

export default router