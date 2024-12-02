import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import GalleryPage from '@/views/GalleryPage.vue';
import ImagePage from '@/views/ImagePage.vue';
import DrawPage from '@/views/DrawPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage},
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/gallery', component: GalleryPage },
  { path: '/gallery/:id', component: ImagePage },
  { path: '/draw', component: DrawPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
