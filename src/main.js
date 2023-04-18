import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import About from "./components/About.vue";
import WorkPoster from "./components/Work_Poster.vue";
import WorkManip from "@/components/Work_Manip.vue";
import WorkApparel from "@/components/Work_Apparel.vue";
import Contact from "@/components/Contact.vue";

const routes = [
    {
        path: "/",
        name: "About",
        component: About
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/workPoster",
        name: "Work_Poster",
        component: WorkPoster
    },
    {
        path: "/workManip",
        name: "Work_Manip",
        component: WorkManip
    },
    {
        path: "/workApparel",
        name: "Work_Apparel",
        component: WorkApparel
    },
];

const router= createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes
});


export default router;


createApp(App).use(router).mount('#app')