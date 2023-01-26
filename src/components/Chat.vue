<script lang="ts">
import { defineComponent } from "vue";
import ChatInput from "./ChatInput.vue";
import MessageList from "./MessageList.vue";
import io from "socket.io-client";
import { useUserStore } from "../store";

export default defineComponent({
  components: { ChatInput, MessageList },
  data() {
    return {
      messages: [],
      socket: {},
    };
  },
  methods: {
    updateData() {
      fetch("/api/message", { method: "GET" }).then((res) =>
        res.json().then((jsn) => (this.messages = jsn))
      );
    },
    scrollList() {
      this.$refs.list.scrollTo(0, this.$refs.list.scrollHeight);
    },
    logout() {
      const store = useUserStore();
      store.$patch({
        isLoggedIn: false,
        user: { id: undefined },
      });
      document.cookie = "";
      this.$router.replace("/login");
    }
  },
  mounted() {
    this.updateData();

    this.socket.on("msgRecive", (data: {}) => {
      this.messages.push(data);
    });
  },
  created() {
    this.socket = io("/", { path: "/api/socket.io" });
  },
});
</script>
<template>
  <div class="chat">
    <div class="message-list" ref="list">
      <MessageList :messages="messages" @list-updated="scrollList" />
    </div>
    <div>
      <ChatInput />
    </div>
    <div class="box" @click="logout">
      <button type="button">Wyloguj się</button>
    </div>
  </div>
</template>

<style scoped>
.chat {
  width: 100%;
  height: calc(100vh - 4%);
  padding: 10% 0;
}
.message-list {
  overflow-y: scroll;
  max-height: 100%;
  padding: 1em 0;
}
.box {
  display: block;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  width: fit-content;
  float: right;
}
button {
  background: #5a5858;
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  transition: 0.5s;
  padding: 4px 10px;
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
  padding: 4px 10px;
}
button:nth-child(2):hover {
  background: #7e6aa7 !important;
  color: #fff;
}
</style>
