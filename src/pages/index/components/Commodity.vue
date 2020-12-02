<template>
  <view class="commodity"> {{ data.title }}fsadfsadfasdf </view>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Commodity extends Vue {
  name = "Commodity";
  @Prop({ default: () => ({}), type: Object }) data!: Record<string, any>;
}
</script>

<style lang="scss" scoped></style>
