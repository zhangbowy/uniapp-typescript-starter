// /common/http.api.js
import { ApisMap } from "types";
import { PluginObject } from "vue";
import { UserApis, SystemSetting, Goods } from "./apis";

const apis: PluginObject<Vue> = {
  install: (vue, vm) => {
    if (!vm) return;

    const userApi = new UserApis(vm);
    const systemSettingApi = new SystemSetting(vm);
    const goodsApi = new Goods(vm);

    const apisMap: ApisMap = {
      user: userApi,
      systemSetting: systemSettingApi,
      goods: goodsApi,
    };

    vue.prototype.$api = apisMap;
  },
};
export default apis;
