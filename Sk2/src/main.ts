import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // If you're using Vue Router 
//import './assets/main.css';     // Optional: if you have global CSS

createApp(App)
  .use(router)   // If using router
  .mount('#app');
