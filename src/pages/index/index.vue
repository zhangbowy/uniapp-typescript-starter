<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png" />
    <view>
      <!-- <text class="title">{{title}}</text> -->
      <!-- <x-commodity :data="data"></x-commodity> -->
    </view>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
@Component
export default class Index extends Vue {
  title = "Hello";
  g: any;
  data = {
    title: "sdfsdfasdddddfasdf",
  };
  onLoad() {
    console.log(this.g.data.discussPool.test1, "---------");
    this.g.data.discussPool.test1 = 2;
    // @ts-ignore
    this.g.net.call("getLang", { test: 1 }).then(() => {});
  }

  mounted() {
    console.log(this.$options);
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
