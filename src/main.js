import router from './router.js'; 
import Vue from 'vue';
import App from './App.vue';

import './assets/main.scss';


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

