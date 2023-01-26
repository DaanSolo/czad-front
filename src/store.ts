import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: { } as User,
      isLoggedIn: false,
    };
  },
});

interface User {
  id: number,
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}
