// 引入初始化样式文件
import "@/styles/common.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { lazyPiugin } from "@/directives/index";
import App from "./App.vue";
import router from "./router";
import { componentPlugin } from "@/components";
//测试接口函数
// import { getCategoryAPI } from "@/apis/testAPI";
// getCategoryAPI().then((res) => {
//   console.log(res);
// });
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
//懒加载
app.use(lazyPiugin);
app.use(componentPlugin);
app.mount("#app");
