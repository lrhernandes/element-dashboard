import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../style.css'
import './style/theme/index.css'
import './style/element.css'

const app = createApp(App);

app.use(router);
app.use(ElementPlus)
app.mount("#app");
