import VueDragReSize from "./components/vue-drag-resize/index.vue";

// esm
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueDragReSize", VueDragReSize);
}

const plugin = {
  install
};

// script 
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default VueDragReSize;
