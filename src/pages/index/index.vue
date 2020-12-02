<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png" />
    <view>
      <text class="title">
        {{ title }}
      </text>
      <components is="Commodity" />
    </view>
  </view>
</template>

<script lang="ts">
import { AsyncComponent } from "vue";
import { Vue, Component } from "vue-property-decorator";
import Commodity from "./components/Commodity.vue";

@Component({
  components: {
    Commodity,
  },
})
export default class Index extends Vue {
  title = "Hello";
  onLoad() {}

  created() {}
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
