<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      username: "",
    };
  },
  methods: {
    submit() {
      if (this.username.length > 0) {
        sessionStorage.setItem("username", this.username);
        this.$router.replace("/chat");
      }
    },
  },
  mounted() {
    if (sessionStorage.getItem("username")) {
      this.$router.replace("/chat");
    }
  },
});
</script>
<template>
  <div>
    <label for="username">Nazwa użytkownika</label><br />
    <input type="text" name="username" v-model="username" /><br /><br />
    <label for="password">Hasło</label><br />
    <input type="password" name="password" v-model="password" /><br /><br />
    <div class="box">
      <button @click="submit">Zaloguj się</button>
      <button type="button">Zarejestruj się</button>
    </div>
  </div>
  <div>
    <label for="username">Nazwa użytkownika</label><br />
    <input type="text" name="username" v-model="username" required /><br /><br />
    <label for="email">Adres e-mail</label><br />
    <input type="email" name="email" v-model="email" required /><br /><br />    
    <label for="password">Hasło</label><br />
    <input type="password" name="password" v-model="password" required/><br /><br />
    <div class="box" style="column-gap: 20px;">
      <div>
        <label for="firstname">Imię (*)</label><br />
        <input type="text" name="firstname" v-model="firstname" style="width: 100%"/>
      </div>    
      <div>
        <label for="lastname">Nazwisko (*)</label><br />
        <input type="text" name="lastname" v-model="lastname" style="width: 100%"/>
      </div>       
    </div><br /><br />
    <button type="button" style="border-radius: 5px; width: 50%;">Zarejestruj się</button>
  </div>  
</template>
<style scoped>
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  width: 50%;
}
input {
  outline: 0;
  background: #282a32;
  border: 0;
  resize: none;
  padding: 0.65em 1.75em;
  border-radius: 5px;
  color: #fff;
  overflow: hidden;
  border-radius: 5px;
  width: 50%;
}
input::placeholder {
  color: rgb(226, 215, 215);
}
button {
  background: #5934a2;
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  transition: 0.5s;
  padding: 8px 20px;
}
button:hover {
  background: #5f4c85;
}
button:nth-child(2) {
  background: #ccc;
  color: #5934a2;
  border: 0;
  outline: 0;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: 0.5s;
  padding: 8px 20px;
}
button:nth-child(2):hover {
  background: #7e6aa7 !important;
  color: #fff;
}
</style>
