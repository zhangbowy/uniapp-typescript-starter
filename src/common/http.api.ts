// /common/http.api.js
import { ApisMap } from "types";
import { PluginObject } from "vue";
import { UserApis } from "./apis";

const apis: PluginObject<Vue> = {
  install: (vue, vm) => {
    if (!vm) return;

    const userApi = new UserApis(vm);

    const apisMap: ApisMap = {
      user: userApi,
    };

    vue.prototype.$api = apisMap;
  },
};
export default apis;
