import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
// 引入公共样式
import "./style/index.scss";

const app = createApp(App);

import VueDragReSize from "./components/vue-drag-resize/index.vue";

// success
// import VueDragReSize from "../lib/bundle.esm.js";
// import  "../lib/bundle.esm.css";

// failure
// import VueDragReSize from "../lib/bundle.umd.js";

app.component("VueDragReSize", VueDragReSize);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(ElementPlus);
app.mount("#app");
