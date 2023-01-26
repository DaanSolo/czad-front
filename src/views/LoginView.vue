<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "../store";

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
      email: "",
      errorMessage: "",
      isError: true,
    };
  },
  methods: {
    submit() {
      if (this.username.length > 0 && this.password.length > 0) {
        const payload = JSON.stringify({
          username: this.username,
          password: this.password,
        });

        fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload,
        }).then((res) =>
          res.json().then((jsn) => {
            if (jsn.id) {
              const store = useUserStore();
              store.$patch({
                user: jsn,
                isLoggedIn: true,
              });
              this.$router.replace("/");
            } else {
              if (jsn.error) {
                this.errorMessage = jsn.error;
                this.isError = true;
              }
            }
          })
        );
      }
    },
  },
  mounted() {
    const store = useUserStore();
    if (store.isLoggedIn) {
      this.$router.replace("/");
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
      <router-link to="/register"
        ><button type="button" class="btn-register">Zarejestruj się</button></router-link
      >
    </div>
    <div class="error-message" v-if="isError">
      {{ errorMessage }}
    </div>
  </div>
</template>
<style scoped>
a:hover {
  background-color: unset !important;
}
.error-message {
  color: #5934a2;
}
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
.btn-register {
  background: #ccc;
  color: #5934a2;
  border: 0;
  outline: 0;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: 0.5s;
  padding: 8px 20px;
}
.btn-register:hover {
  background: #7e6aa7 !important;
  color: #fff;
}
</style>
