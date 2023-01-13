import { createRouter, createWebHistory } from "vue-router";
import ChatView from "../views/ChatView.vue";
import UsernameView from "../views/UsernameView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UsernameView,
    },
    {
      path: "/chat",
      name: "chat",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ChatView
    },
  ],
});

export default router;
