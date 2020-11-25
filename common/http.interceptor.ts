// /common/http.interceptor.js
import Vue from "vue";

const install = (vue: typeof Vue, vm: Vue) => {
  // 此为自定义配置参数，具体参数见上方说明
  vue.prototype.$u.http.setConfig({
    baseUrl: "https://api.example.com",
    loadingText: "努力加载中~",
    loadingTime: 800,
    // ......
  });

  // 请求拦截，配置Token等参数
  vue.prototype.$u.http.interceptor.request = (config: Record<string, any>) => {
    return config;
  };

  // 响应拦截，判断状态码是否通过
  vue.prototype.$u.http.interceptor.response = (res: Record<string, any>) => {
    if (res.code == 200) {
      return res.result;
    } else if (res.code == 201) {
      // 假设201为token失效，这里跳转登录
      vm.$u.toast("验证失败，请重新登录");
      setTimeout(() => {
        // vm.$u.route('/pages/user/login')
      }, 1500);
      return false;
    } else {
      return false;
    }
  };
};

export default {
  install,
};
