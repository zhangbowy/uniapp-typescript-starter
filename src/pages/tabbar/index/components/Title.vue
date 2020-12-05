<template>
  <view class="title">
    <view v-if="data.type" class="title__head">
      <view :class="data.type" class="title__head-tag" />
    </view>
    <view class="title__content">
      <text :class="{ distraction: !data.subTitle }" class="title__content-title">
        {{ data.title }}
      </text>
      <text v-if="data.subTitle" class="title__content-sub">
        {{ data.subTitle }}
      </text>
    </view>
    <slot />
  </view>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class Title extends Vue {
    // 标题
    name = 'Title';

    @Prop({
      default: () => ({}),
      type: Object,
    })
    data!: Record<string, any>;

    onClick() {
      this.$emit('click');
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    position: relative;

    /* #ifndef APP-NVUE */
    display: flex;
    height: 50px;
    padding: 0 10px;

    /* #endif */
    margin-top: 10px;

    /* #ifdef APP-NVUE */

    /* #endif */
    font-weight: normal;
    background-color: #f8f8f8;
    flex-direction: row;
    align-items: center;
  }

  /* #ifndef APP-NVUE */

  /* #endif */
  .title__head {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .line {
    width: 3px;
    height: 15px;
    background-color: #c0c0c0;
    border-radius: 5px;
  }

  .circle {
    width: 8px;
    height: 8px;
    background-color: #c0c0c0;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }

  .title__content {
    flex-direction: column;
    flex: 1;
    color: #333;
  }

  .title__content-title {
    font-size: 14px;
    color: #333;
  }

  .distraction {
    flex-direction: row;
    align-items: center;
  }

  .title__content-sub {
    font-size: 12px;
    color: #999;
  }
</style>
