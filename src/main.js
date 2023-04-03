import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';


import Events from './pages/Events.vue';
import Projects from './pages/Projects.vue';
import Team from './pages/Team.vue';
import Home from './pages/Home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/events', component: Events },
    { path: '/projects', component: Projects },
    { path: '/team', component: Team },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');
