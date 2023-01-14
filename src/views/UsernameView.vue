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
    <label for="username">Wpisz swoją nazwę użytkownika:</label><br />
    <div class="box">
      <input type="text" name="username" v-model="username" />
      <button @click="submit">Ustaw</button>
    </div>
  </div>
</template>
<style scoped>
.box {
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin-top: 15px;
  width: 50%;
}
input {
  outline: 0;
  background: #121317;
  border: 0;
  resize: none;
  padding: 0.65em 1.75em;
  border-radius: 5px;
  color: #fff;
  overflow: hidden;
  border-radius: 5px 0 0 5px;
}
input::placeholder {
  color: rgb(226, 215, 215);
}
button {
  background: #5934a2;
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  transition: 0.5s;
}
button:hover {
  background: #5f4c85;
}
</style>
