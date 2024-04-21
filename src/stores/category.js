import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  //导航列表数据
  const catgoryList = ref([]);
  //获取数据方法
  const getCategory = async () => {
    const res = await getCategoryAPI();
    catgoryList.value = res.result;
  };
  return {
    catgoryList,
    getCategory,
  };
});
