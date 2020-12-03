<template>
  <view class="rich-text">
    <u-parse
      :html="data"
      :selectable="true"
      :tag-style="style"
      :lazy-load="true"
      :show-with-animation="true"
      :autoset-title="false"
      :use-cache="true"
    />
  </view>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class RichText extends Vue {
  // 富文本
  name = "RichText";
  @Prop({
    default: ``,
    type: String,
  })
  data!: String;

  style: Record<string, any> = {
    // 字符串的形式
    p:
      "color: #999999;font-size:32rpx;margin:4px 0;width: 100%;box-sizing:border-box;padding: 6px;",
    span: "font-size: 30rpx;",
    img: "border-radius: 4px;",
  };
}
</script>

<style lang="scss" scoped>
.rich-text {
  padding: 10px;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.u-content {
  padding: 10px;
  width: 100%;
}
</style>
