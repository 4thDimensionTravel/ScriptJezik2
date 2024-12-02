<template>
    <div>
      <div class="RegisterContainer">
        <h1>Create your account</h1>
        <h5>Enter your username and password below.</h5>
        <form @submit.prevent="submit">
        <input 
          v-model="data.username" 
          class="usr" 
          placeholder="Username"
          @input = "validateUsername"
        />
        <p v-if="error.username">{{ error.username }}</p>
        <input 
          v-model="data.password" 
          class="psw" 
          placeholder="Password" 
          type="password"
          @input="validatePassword"
        />
        <p v-if="error.password">{{ error.password }}</p>
        <input 
          v-model="data.passwordConfirm"
          class="pswCon" 
          placeholder="Confirm Password" 
          type="password"
          @input="passwordConfirm"
        />
        <p v-if="error.passwordConfirm">{{error.passwordConfirm }}</p>

        <button id="registerBtn" type="submit">Register</button>
       </form>
      </div>
    </div>
  </template>
  
<script>
import { reactive } from "vue";
import "@/views/css/RegisterPage.css"
import { useRouter } from "vue-router";
  
  export default {
    name: "Register",
    setup() {
      const data = reactive({
        username: '',
        password: '',
        passwordConfirm: ''
      });
      const error = reactive({
        username: '',
        password: '',
        passwordConfirm: ''
      })
  
      const router = useRouter();

      const validateUsername = () => {
        if(!data.username || data.username.length < 2 || data.username.length > 32){
          error.username = "Username must be between 2 and 32 characters.";
        }else{
          error.username = "";
        }
      };

      const validatePassword = () => {
        if(!data.password || data.password.length < 8 || data.password.length > 32){
          error.password = "Password must be between 8 and 128 characters.";
        }else{
          error.password = "";
        }
      };

      
      const passwordConfirm = () => {
        if(!data.passwordConfirm || (data.password !== data.passwordConfirm)){
          error.passwordConfirm = "Passwords must match.";
        }else {
          error.passwordConfirm = "";
        }
      };

  
      const submit = async () => {
        validatePassword();
        validateUsername();
        passwordConfirm();
        if(error.username || error.password || error.passwordConfirm) return;
  
        try {
          const response = await fetch('https://raf-pixeldraw.aarsen.me/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: data.username,
              password: data.password
            })
          });
  
          const result = await response.json();
  
          if (response.ok) {
            await router.push('/login');
          } else {
            alert(`Error: ${result.code} - ${result.extra.map((e) => e.message).join(", ")}`);
          }
        } catch (error) {
          console.error("Registration failed:", error);
          alert("Registration failed. Please try again.");
        }
      };
  
      return {
        data,
        error,
        submit,
        validateUsername,
        validatePassword,
        passwordConfirm,
      };
    },
  };
  </script>
  
  
  <style scoped>
  /* Your CSS styles go here */
  div {
    text-align: center;
  }
  </style>
  
  