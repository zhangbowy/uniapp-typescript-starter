<script lang="ts">
import { Vue } from "vue-property-decorator";
export default {
  mpType: "app",
  name: "App",
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>
<style lang="scss" scoped>
@import "uview-ui/index.scss";
</style>
