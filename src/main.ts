import Vue from 'vue'
import App from './App.vue'
import store from './store'
// @ts-ignore
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

const app = new App({store})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '../common/http.interceptor'
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '../common/http.api'
Vue.use(httpApi, app)

app.$mount()
