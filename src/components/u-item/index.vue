<template>
  <view class="item">
    <u-image width="100%" height="100px" :src="data.img" class="item_img" />
    <view class="item_info">
      <view v-if="hasTitle" class="info_name">
        {{ data.name }}
      </view>
      <template v-if="styleMode !== 'style4'">
        <view class="info_price-wrapper">
          <view :class="{ 'info_price--blod': hasBlod }" class="info_price">
            ￥{{ data.price }}
          </view>
          <view v-if="styleMode !== 'style2'" class="info_count"> {{ data.count }}件已售 </view>
        </view>
        <view v-if="styleMode === 'style2'" class="info_cart-btn-wrapper">
          <view class="info_count"> {{ data.count }}件已售 </view>
          <u-icon name="shopping-cart" :size="40" color="#e65339" />
        </view>
        <view v-if="styleMode === 'style3'" class="buy-now-btns">
          <u-button type="warning" size="mini" @click="goto('/pages/about/about')">
            立即购买
          </u-button>
        </view>
      </template>
    </view>
  </view>
</template>

<script lang="ts">
  import { StyleMode } from 'types';
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class Item extends Vue {
    name = 'Item';
    @Prop({ type: String, default: '' }) type!: string;
    @Prop({ type: Boolean, default: true }) hasTitle!: boolean;
    @Prop({ type: Boolean, default: true }) hasBlod!: boolean;
    @Prop({ type: String, default: 'style1' }) styleMode!: StyleMode;
    @Prop({ type: Object, default: () => ({}) }) data!: string;
  }
</script>

<style lang="scss" scoped>
  .item {
    // width: 100%;
    // height: 140px;
    margin: $uni-spacing-col-lg 4px;
    overflow: hidden;
    border-radius: $uni-border-radius-lg;
    box-shadow: $card-box-shadow;

    &_img {
    }

    &_info {
      padding: $uni-spacing-col-sm;
      font-size: $uni-font-size-sm;

      .info {
        &_name {
          overflow: hidden;
          color: $uni-color-subtitle;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &_price-wrapper,
        &_cart-btn-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: $uni-spacing-col-base;
        }

        &_cart-btn-wrapper {
          padding-right: 8px;
        }

        &_price {
          font-size: $uni-font-size-sm;
          color: $money-font-color;

          &--blod {
            font-weight: bold;
          }
        }

        &_count {
          font-size: $uni-font-size-sm;
          color: $uni-text-color-grey;
        }
      }
    }

    .buy-now-btns {
      display: flex;
      width: 100%;
      margin: 6px 0;
      align-items: center;
      justify-content: center;
    }
  }
</style>
