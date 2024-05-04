//封装轮播图
// 获取banner
import { onMounted, ref } from "vue";
import { getBannerAPI } from "@/apis/home";

export function useBanner() {
  const BannerList = ref([]);
  const grtBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    // console.log(res);
    BannerList.value = res.result;
  };
  onMounted(() => grtBanner());
  return {
    BannerList,
  };
}
