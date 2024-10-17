import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router); // Используем Router только один раз

import Home from './components/HomePage.vue';
import About from './components/AboutPage.vue';
import AuthorPage from './components/AuthorPage.vue';

const router = new Router({
    mode: 'history', // Добавьте, если хотите использовать чистые URL
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/auth', 
            component: AuthorPage 
        }
    ]
});

export default router;