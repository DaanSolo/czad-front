<script lang="ts">
import { mapState } from 'pinia'
import {useUserStore} from "../store";

export default {
  computed: {
    ...mapState(useUserStore, ['user', 'isLoggedIn'])
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="purple">You did it!</h1>
    <h3>Connecting you to the world, one chat at a time.</h3>
    <div v-if="!isLoggedIn">
      {{ user.username }}
    </div>

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
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
