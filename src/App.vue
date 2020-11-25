<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  name = "App";
  mpType = "app";
}
</script>

<style lang="scss" scoped>
@import "uview-ui/index.scss";
</style>
