<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: {},
  },
});
</script>

<template>
  <div class="chat-message">
    <div class="username">{{ message.username }}</div>
    <div class="content">{{ message.content }}</div>
  </div>
</template>

<style>
.chat-message {
  display: table;
  border-collapse: separate;
  table-layout: fixed;
  width: 100%;
  padding: 0 1em;
  transition: 0.5s;
}
.chat-message:hover {
  background: #222222;
}
.chat-message .username {
  width: 20%;
  display: table-cell;
  overflow: hidden;
  color: hsl(260deg 75% 68%);
  font-weight: bold;
}
.chat-message .content {
  width: 80%;
  display: table-cell;
  line-break: anywhere;
}
</style>
