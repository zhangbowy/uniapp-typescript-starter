// /common/http.interceptor.js
import { PluginObject } from 'vue';
import config from '../../config/config';

const interceptor: PluginObject<Vue> = {
  install: (vue, vm) => {
    if (!vm) return;
    const http = vue.prototype.$u.http;
    // 此为自定义配置参数，具体参数见上方说明
    http.setConfig({
      baseUrl: config.url.server,
      loadingText: '努力加载中~',
      loadingTime: 800,
      // ......
    });

    // 请求拦截，配置Token等参数
    http.interceptor.request = (config: Record<string, any>) => {
      return config;
    };

    // 响应拦截，判断状态码是否通过
    http.interceptor.response = (res: Record<string, any>) => {
      if (res.status === 1) {
        return res;
      } else if (res.code == 201) {
        // 假设201为token失效，这里跳转登录
        vm.$u.toast('验证失败，请重新登录');
        setTimeout(() => {
          // vm.$u.route('/pages/user/login')
        }, 1500);
        return false;
      } else {
        return false;
      }
    };
  },
};
export default interceptor;
