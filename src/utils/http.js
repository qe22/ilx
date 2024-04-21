import axios from "axios";
//axios基础封装
const hpptInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000, //配置超时时间
});
//拦截器
// axios请求拦截器
hpptInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
hpptInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e);
  }
);

export default hpptInstance;
