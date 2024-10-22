import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router); // Используем Router только один раз

import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import AuthorPage from './components/AuthorPage.vue';
import TableRequests from '@/components/TableRequests.vue';

const router = new Router({
    mode: 'history', // Добавьте, если хотите использовать чистые URL
    routes: [
        {
            path: '/home',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage,
        },
        
        {
            path: '/auth', 
            component: AuthorPage 
        },
        {
            path: '/table-requests',
            name: 'TableRequests',
            component: TableRequests,
          }
    ]
});

export default router;