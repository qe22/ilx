//封装分页数据
import { getCaregoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
export function uesCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCaregory = async (id = route.params.id) => {
    const res = await getCaregoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCaregory());
  //路有变化
  // watchEffect(() => { getCaregory() })
  onBeforeRouteUpdate((to) => {
    console.log("ada");
    getCaregory(to.params.id);
  });
  return {
    categoryData,
  };
}
