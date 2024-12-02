<template>
  <div>
    <div class="LoginContainer">
      <h1>Login to your account</h1>
      <h5>Enter your username and password below.</h5>
      <form @submit.prevent="submit">
        <input
          v-model="data.username"
          class="usr"
          placeholder="Username"
          @input="validateUsername"
        />
        <p v-if="errors.username">{{ errors.username }}</p>

        <input
          v-model="data.password"
          type="password"
          class="psw"
          placeholder="Password"
          @input="validatePassword"
        />
        <p v-if="errors.password">{{ errors.password }}</p>

        <button id="loginBtn" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import "@/views/css/LoginPage.css";

export default {
  name: "LoginPage",
  setup() {
    const data = reactive({
      username: '',
      password: ''
    });

    const errors = reactive({
      username: '',
      password: ''
    });

    const router = useRouter();

    const validateUsername = () => {
      if (!data.username || data.username.length < 2 || data.username.length > 32) {
        errors.username = "Username must be between 2 and 32 characters.";
      } else {
        errors.username = ""; // Clear the error if validation passes
      }
    };

    const validatePassword = () => {
      if (!data.password || data.password.length < 8 || data.password.length > 128) {
        errors.password = "Password must be between 8 and 128 characters.";
      } else {
        errors.password = ""; // Clear the error if validation passes
      }
    };

    const submit = async () => {
      validateUsername();
      validatePassword();
      if (errors.username || errors.password) return;

      try {
        const response = await fetch("https://raf-pixeldraw.aarsen.me/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Login successful:", result);
          await router.push("/");
        } else {
          errors.password = "Invalid username or password.";
          console.error("Login failed:", response.status);
        }
      } catch (error) {
        errors.password = "An error occurred. Please try again later.";
        console.error("Error during login:", error);
      }
    };

    return {
      data,
      errors,
      submit,
      validateUsername,
      validatePassword,
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
