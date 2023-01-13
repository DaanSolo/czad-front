<script lang="ts">
import { defineComponent } from 'vue';
import ChatInput from './ChatInput.vue';
import MessageList from './MessageList.vue'
import io from "socket.io-client"; 

export default defineComponent({
    components: { ChatInput, MessageList },
    data() {
        return {
            messages: [],
            socket: {}
        }
    },
    methods: {
        updateData() {
            fetch('/api/message', {method: 'GET'}).then(res => res.json().then(jsn => this.messages = jsn))
        }
    },
    mounted() {
        this.updateData();

        this.socket.on("msgRecive", (data: {}) => {
            this.messages.push(data);
        })
    },
    created() {
        this.socket = io("http://localhost:5173", {path: '/api/socket.io'});
    }
})
</script>
<template>
  <div class="chat">
    <div class="message-list">
      <MessageList :messages="messages" />
    </div>
    <hr />
    <div>
      <ChatInput />
    </div>
  </div>
</template>

<style>
.chat {
  border: 1px solid white;
  width: auto;
  height: 100%;
}
.message-list {
    overflow: scroll;
}
</style>
