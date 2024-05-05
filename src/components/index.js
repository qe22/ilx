// const { install } = require("element-plus");
import ImageViewer from "./ImageView/index.vue";
import Sku from "./XtxSku/index.vue";
export const componentPlugin = {
  install(app) {
    app.component("XtxImageViewer", ImageViewer);
    app.component("XtxSku", Sku);
  },
};
