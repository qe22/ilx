import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { ref } from "vue";
export const useUseStore = defineStore(
  "user",
  () => {
    const userInfo = ref({});
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });

      userInfo.value = res.result;
      console.log(userInfo);
    };
    //用户退出
    const clearUserinfo = () => {
      userInfo.value = {};
    };
    return {
      userInfo,
      getUserInfo,
      clearUserinfo,
    };
  },
  {
    persist: true,
  }
);
