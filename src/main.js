import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import {
  ElContainer,
  ElAside,
  ElMain,
  ElButton,
  ElRow,
  ElCol,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElTable,
  ElTableColumn,
} from "element-plus";

import "element-plus/lib/theme-chalk/index.css";
const components = [
  ElContainer,
  ElAside,
  ElMain,
  ElButton,
  ElRow,
  ElCol,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElTable,
  ElTableColumn,
];
const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router);
app.mount("#app");

app.config.globalProperties.$api = axios;
