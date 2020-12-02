import { GetApi } from "types";

class SystemSetting {
  private templateUrl = "/api/frontend/template?sid=100000000";
  private systemUrl = "/api/system?sid=100000000";
  private navUrl = "/api/shop/navigation?sid=100000000";
  constructor(private vm: Vue) {}
  /**
   * 获取首页装修参数
   */
  getTemplate: GetApi = () => {
    return this.vm.$u.get(this.templateUrl);
  };

  /**
   * 获取基础设置
   */
  getSystem: GetApi = () => {
    return this.vm.$u.get(this.systemUrl);
  };

  /**
   * 获取底部导航栏
   */
  getNav: GetApi = () => {
    return this.vm.$u.get(this.navUrl);
  };
}

export default SystemSetting;
