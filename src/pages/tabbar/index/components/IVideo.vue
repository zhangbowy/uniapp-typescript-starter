<template>
  <view class="video" :style="{ padding: `${data.margin || 10}px 0px` }">
    <video
      id="myVideo"
      :src="data.url"
      controls
      :poster="data.coverImgUrl"
      :object-fit="isPlay ? 'contain' : 'cover'"
      @error="videoErrorCallback"
      @ended="videoEndedCallback"
      @play="videoPlayCallback"
    />
  </view>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class VideoComp extends Vue {
    name = 'VideoComp';

    @Prop({
      default: () => ({}),
      type: Object,
    })
    data!: Record<string, any>;
    videoContext: any;
    isPlay = false;
    videoErrorCallback() {
      console.log('videoErrorCallback');
    }
    videoEndedCallback() {
      console.log('videoEndedCallback');
      this.isPlay = false;
    }
    videoPlayCallback() {
      this.isPlay = true;
    }
    onError() {
      console.log('onError');
    }

    onPlay() {
      this.videoContext.play();
    }

    onReady() {
      // #ifndef MP-ALIPAY
      this.videoContext = uni.createVideoContext('myVideo');
      console.log(this.videoContext);
      // #endif
    }
  }
</script>

<style lang="scss" scoped>
  .video {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &_cover {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 90%;
      height: 100%;
      overflow: hidden;
      // display: none;
      border-radius: $uni-border-radius-lg;
      transform: translate(-50%, -50%);
    }

    &_play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    video {
      width: 90%;
      border-radius: $uni-border-radius-lg;
      box-shadow: $card-box-shadow;
    }
  }
</style>
