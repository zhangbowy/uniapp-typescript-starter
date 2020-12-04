import { PostApi, GetApi, GetInfo } from 'types';

class UserApis {
  private loginUrl = 'wx/user/login';
  private indexUrl = '/ebapi/public_api/index';
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
  login: PostApi = () => {
    return new Promise((resolve: Function, reject: Function) => {
      // #ifdef MP-WEIXIN
      uni.getProvider({
        service: 'oauth',
        success: function (res) {
          console.log(res);
          if (res.provider.indexOf('weixin') !== -1) {
            uni.login({
              provider: 'weixin',
              success: (res2) => {
                // uni.checkSession({
                //   success: (dd) => {
                //     console.log(dd);
                //   },
                //   fail: () => {
                //     console.log("fail");
                //   },
                // });
                uni.getUserInfo({
                  provider: 'weixin',
                  success: (info) => {
                    //这里请求接口
                    resolve();
                    console.log(res2);
                    console.log(info);
                  },
                  fail: (err: any) => {
                    console.log(err);
                    reject();
                    uni.showToast({ title: '微信登录授权失败', icon: 'none' });
                  },
                });
              },
              fail: () => {
                reject();
                uni.showToast({ title: '微信登录授权失败', icon: 'none' });
              },
            });
          } else {
            reject();
            uni.showToast({
              title: '请先安装微信或升级版本',
              icon: 'none',
            });
          }
        },
      });
    });
  };
}

export default UserApis;
