<script lang="ts">
import { defineComponent } from "vue";
import ChatInput from "./ChatInput.vue";
import MessageList from "./MessageList.vue";
import io from "socket.io-client";

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
      console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
    },
  },
  mounted() {
    this.updateData();

    this.socket.on("msgRecive", (data: {}) => {
      this.messages.push(data);
    });
  },
  created() {
    this.socket = io("http://localhost:5173", { path: "/api/socket.io" });
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
  </div>
</template>

<style>
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
</style>
