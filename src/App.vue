<script lang="ts">
import { GlobalData } from "types";
import { Vue, Component } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class App extends Vue {
  public name = "App";
  mpType = "app";
  @Action login!: Function;

  globalData: GlobalData = {};

  onLaunch() {
    let userInfo = uni.getStorageSync("userInfo") || {};
    if (userInfo.id) {
      //更新登陆状态
      uni.getStorage({
        key: "userInfo",
        success: (res) => {
          this.login(res.data);
        },
      });
    }
  }
  onShow() {
    console.log("App Show");
  }
  onHide() {
    console.log("App Hide");
  }
  created() {}
}
</script>
<style lang="scss" scoped>
@import "uview-ui/index.scss";
</style>
