import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
