<template>
  <view class="img-nav" :style="{ padding: `${data.margin || 10}px 10px` }">
    <u-grid :col="data.cols">
      <u-grid-item
        v-for="(item, index) in data.list"
        :key="index"
        @click="onItemClick(item)"
      >
        <view
          class="img-nav_icon"
          :style="{ boxShadow: `0px 0px 12px ${item.color}66` }"
        >
          <u-image
            width="100%"
            height="100%"
            class="item_img"
            shape="circle"
            :src="item.imgUrl"
          />
        </view>
        <view class="grid-text">
          {{ item.name }}
        </view>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ImgNav extends Vue {
  name = "ImgNav";
  @Prop({
    default: () => ({}),
    type: Object,
  })
  data!: Record<string, any>;

  onItemClick(item: Record<string, any>) {
    console.log(item);
  }
}
</script>

<style lang="scss" scoped>
.img-nav {
  .grid-text {
    font-size: $uni-font-size-sm;
    color: $uni-color-subtitle;
  }
  &_icon {
    width: 40px;
    height: 40px;
    margin-bottom: 6px;
    border-radius: 50%;
  }
}
</style>
