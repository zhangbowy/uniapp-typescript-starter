import Vue from "vue";
import App from "./App.vue";
// @ts-ignore
import uView from "uview-ui";
// @ts-ignore
import g from "./jslib/global";
Vue.prototype.g = g;

Vue.use(uView);
Vue.config.productionTip = false;

const app = new Vue({
  ...App,
});
app.$mount();
// new App().$mount()
