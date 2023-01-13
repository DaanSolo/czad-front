<script lang="ts">
import { defineComponent } from "vue";
import Chat from "../components/Chat.vue";

export default defineComponent({
  components: {Chat},
  mounted() {
    if(!sessionStorage.getItem('username')) {
      this.$router.replace('/');
    }
  }
})

</script>

<template>
  <main>
    <Chat />
  </main>
</template>
