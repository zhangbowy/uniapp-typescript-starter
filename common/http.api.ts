// /common/http.api.js

import { ApisMap, GetApi, UserApi, GetInfo } from "types";

// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
const indexUrl = "/ebapi/public_api/index";

const install = (Vue: any, vm: any) => {
  const getInfo: GetApi<GetInfo> = (params = {}) =>
    vm.$u.post(indexUrl, params);

  const userApi: UserApi = {
    getInfo: getInfo,
  };
  const apisMap: ApisMap = {
    user: userApi,
  };

  vm.$api = apisMap;
};

export default {
  install,
};
