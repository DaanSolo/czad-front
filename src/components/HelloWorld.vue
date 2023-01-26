<script setup lang="ts">
import {useUserStore} from "../store";

const store = useUserStore();
</script>

<template>
  <img
    v-if="!store.isLoggedIn"
    alt="Gigachad"
    class="logo"
    src="@/assets/logo2.png"
    width="128"
    height="128"
  />   
  <img
    v-if="store.isLoggedIn"
    alt="Gigachad"
    class="logo"
    src="@/assets/logo.png"
    width="128"
    height="128"
  />  
  <div class="greetings">
    <h1 class="purple" v-if="store.isLoggedIn">You did it, {{ store.user.username }}!</h1>
    <h1 class="purple" v-if="!store.isLoggedIn">Please, log in!</h1>
    <h3 v-if="store.isLoggedIn">Connecting you to the world, one chat at a time.</h3>
    <h3 v-if="!store.isLoggedIn">Connect with like-minded individuals.</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  word-wrap: break-word;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
