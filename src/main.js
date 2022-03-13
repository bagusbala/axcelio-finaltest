import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import axios from 'axios';
import moment from "moment";
import VueAxios from 'vue-axios'
import './index.css'

const app = createApp(App);
app.use(router);
app.use(moment);
app.use(VueAxios, axios);
app.mount("#app");
