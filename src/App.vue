<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  public name = "App";
  mpType = "app";
  onLaunch() {
    console.log("App Launch");
    this.$api.user.login().then((data) => {
      console.log(data);
    });
  }
  onShow() {
    console.log("App Show");
  }
  onHide() {
    console.log("App Hide");
  }
}
</script>
<style lang="scss" scoped>
@import "uview-ui/index.scss";
</style>
