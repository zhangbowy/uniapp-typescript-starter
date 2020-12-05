<template>
  <view class="text-nav" :style="{ padding: `${data.margin || 0}px 4px` }">
    <u-cell-group :border="true">
      <u-cell-item
        v-for="(item, index) in data.list"
        :key="index"
        :icon="item.icon"
        :title="item.name"
        :border-top="true"
        hover-class="cell-hover-class"
        @click="onItemClick(item)"
      />
    </u-cell-group>
  </view>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class TextNav extends Vue {
    name = 'TextNav';

    @Prop({ default: () => ({}), type: Object }) data!: Record<string, any>;

    onItemClick(item: Record<string, any>) {
      console.log(item);
      // uni.navigateTo(item.path);
    }
  }
</script>

<style lang="scss" scoped></style>
