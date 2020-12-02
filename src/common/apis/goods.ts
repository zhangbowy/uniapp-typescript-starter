import { GetApi } from "types";

class SystemSetting {
  private templateUrl = "/api/frontend/template?sid=100000000";
  constructor(private vm: Vue) {}
  /**
   * 获取商品列表
   * @param params
   */
  getGoodsList: GetApi = (params) => {
    return this.vm.$u.get(this.templateUrl, params);
  };
}

export default SystemSetting;
