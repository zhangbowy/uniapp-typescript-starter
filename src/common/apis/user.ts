import { PostApi, GetApi, GetInfo, LoginData } from "types";

class UserApis {
  private loginUrl = "wx/user/login";
  private indexUrl = "/ebapi/public_api/index";
  constructor(private vm: Vue) {}
  /**
   * 获取用户信息
   * @param params
   */
  getInfo: GetApi<GetInfo> = (params) => {
    return this.vm.$u.get(this.indexUrl, params);
  };

  /**
   * 微信登录
   * @param data
   */
  login: PostApi<LoginData> = (data) => {
    return this.vm.$u.post(this.loginUrl, data);
  };
}

export default UserApis;
