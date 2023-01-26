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
    <div class="username" ><span class="at">@</span>{{ message.username }}<span class="tooltip">{{ message.firstname }} {{ message.lastname }}Test</span></div>
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
  position: relative;
}
.chat-message .username .at {
  color: gold;
  font-size: 0.8em;
  padding-right: 5px;
}
.chat-message .content {
  width: 80%;
  display: table-cell;
  line-break: anywhere;
}
.chat-message .username .tooltip {
  visibility: hidden;
  width: fit-content;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 20px;
  border-radius: 6px;
  position: fixed;
  z-index: 1;
}
.chat-message .username:hover .tooltip {
  visibility: visible;
}
</style>
