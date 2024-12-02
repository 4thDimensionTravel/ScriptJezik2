<template>
  <div class="navbar">
    <button class="home-button" @click="goToHome">
      <img src="@/assets/logo.png" alt="logo_image" id="logo" />
    </button>
    <nav>
      <ul>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/draw">New</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Tiny5&display=swap');
</style>



<style scoped>
.navbar {
  display: flex;              
  align-items: center;       
  justify-content: space-between; 
  padding: 10px;  
  font-family: "Tiny5", sans-serif;
  font-weight: 500;
  font-style: normal;       
  font-size: large;     
}

.home-button {
  background: transparent;   
  border: none;              
  cursor: pointer;           
}

nav ul {
  list-style: none;        
  display: flex;             
  gap: 10px;                
}

nav a {
  text-decoration: none;      
  color: inherit;            
  padding: 5px 10px;         
  border-radius: 5px;        
  transition: background 0.3s;
}

nav a:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>
