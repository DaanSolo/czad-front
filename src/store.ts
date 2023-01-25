import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      // for initially empty lists
      user: { username: "test "} as User,
      // for data that is not yet loaded
      isLoggedIn: false,
    };
  },
});

interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}
