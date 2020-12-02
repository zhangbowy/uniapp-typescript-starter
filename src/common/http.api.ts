// /common/http.api.js
import { ApisMap } from "types";
import { PluginObject } from "vue";
import { UserApis, SystemSetting } from "./apis";

const apis: PluginObject<Vue> = {
  install: (vue, vm) => {
    if (!vm) return;

    const userApi = new UserApis(vm);
    const systemSettingApi = new SystemSetting(vm);

    const apisMap: ApisMap = {
      user: userApi,
      systemSetting: systemSettingApi,
    };

    vue.prototype.$api = apisMap;
  },
};
export default apis;
