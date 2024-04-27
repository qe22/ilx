import request from "@/utils/http";
// import { id, ru } from "element-plus/es/locale";
export function getCaregoryAPI(id) {
  return request({
    url: "/category",
    params: {
      id,
    },
  });
}
