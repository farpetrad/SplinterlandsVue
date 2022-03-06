import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
    faTimes,
    faEllipsisVAlt,
    far
} from '@fortawesome/pro-regular-svg-icons';
config.autoAddCss = false;


import Modal from '@/components/modal/Modal.vue';
import Drawer from '@/components/Drawer.vue';
import Navbar from '@/components/nav/Navbar.vue';



import { createApp } from 'vue'

import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store/index.js';



library.add(faTimes, faEllipsisVAlt);

const app = createApp(App)
    .use(router)
    .use(store)
   .component('font-awesome-icon', FontAwesomeIcon)
    .component('font-awesome-layers', FontAwesomeLayers)
    .component('font-awesome-layers-text', FontAwesomeLayersText)
    .component('modal', Modal)
    .component('drawer', Drawer)
    .component(Navbar.name, Navbar);
app.mount('#app');
