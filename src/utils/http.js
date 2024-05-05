import axios from "axios";
import { ElMessage } from "element-plus";
import { useUseStore } from "@/stores/user";
import router from "@/router";
//axios基础封装
const hpptInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000, //配置超时时间
});
//拦截器
// axios请求拦截器
hpptInstance.interceptors.request.use(
  (config) => {
    //获取token数据
    const userStore = useUseStore();
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
hpptInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUseStore();
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    // token失效
    if (e.response.status === 401) {
      userStore.clearUserinfo();
      router.push("/login");
    }
    return Promise.reject(e);
    //统一错误提示
  }
);

export default hpptInstance;
