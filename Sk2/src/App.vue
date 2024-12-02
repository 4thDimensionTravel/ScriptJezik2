<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Tiny5&display=swap');
</style>


<style scoped>

.container {
  display: flex;           
  flex-direction: column; 
  height: 100vh;           
}

router-view {
  flex: 1;                 
  overflow-y: auto;   
}
</style>
