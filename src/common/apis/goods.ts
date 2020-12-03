import { GetApi, GetGoodsList } from "types";
import config from "../../../config/config";
class SystemSetting {
  private templateUrl = "/api/frontend/template?sid=100000000";
  constructor(private vm: Vue) {}
  /**
   * 获取商品列表
   * @param params
   */
  getGoodsList: GetApi<GetGoodsList> = (params) => {
    !params!.pageSize && (params!.pageSize = config.param.pageSize);
    return this.vm.$u.get(this.templateUrl, params);
  };
}

export default SystemSetting;
