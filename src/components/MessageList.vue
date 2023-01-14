<script lang="ts">
import { defineComponent } from "vue";
import Message from "./Message.vue";

export default defineComponent({
  components: { Message },
  emits: ["list-updated"],
  props: {
    messages: { type: Array },
  },
  updated() {
    this.$emit("list-updated");
  },
});
</script>

<template>
  <div v-for="message in messages" :key="message.id">
    <Message :message="message" />
  </div>
</template>
