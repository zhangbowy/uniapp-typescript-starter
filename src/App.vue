<script lang="ts">
import { Vue } from "vue-property-decorator";

export default {
  mpType: "app",
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
};
</script>

<style lang="scss" scoped>
@import "uview-ui/index.scss";
</style>
