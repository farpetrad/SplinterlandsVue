import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/home/Home.vue';
import store from '@/store/index.js';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            props: false,
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            props: false,
            name: 'About',
            component: () => import (/*webpackChunkName: "about" */ '@/views/About.vue'),
        }
    ],
});

router.beforeEach(async (to, from, next) => {
    document.title = `${store.getters.siteName} - ${String(to.name)}`;

    return await next();
});


export default router;
