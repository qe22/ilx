// const { install } = require("element-plus");
import { useIntersectionObserver } from "@vueuse/core";
//定义懒加载插件
export const lazyPiugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
