<script lang="ts">
import { defineComponent } from "vue";
import Chat from "../components/Chat.vue";
import { useUserStore } from "../store";
import { mapState } from "pinia";

export default defineComponent({
  components: { Chat },
  computed: {
    ...mapState(useUserStore, ["user", "isLoggedIn"]),
  },
  mounted() {
    if (!this.isLoggedIn) {
      fetch("/api/auth/check")
        .then((res) =>
          res
            .json()
            .then((jsn) => {
              if (!jsn.id) {
                this.$router.replace("/login");
              } else {
                const store = useUserStore();
                store.$patch({
                  user: jsn,
                  isLoggedIn: true,
                });
                this.$router.replace("/");
              }
            })
            .catch(() => this.$router.replace("/login"))
        )
        .catch(() => this.$router.replace("/login"));
    }
  },
});
</script>

<template>
  <main>
    <Chat />
  </main>
</template>
