<template>
  <view class="commodity" :style="{ padding: `${data.margin || 10}px 10px` }">
    <u-row gutter="0" justify="">
      <u-col
        v-for="(row, index) in rowsList"
        :key="index"
        :span="12 / data.rows"
      >
        <c-item
          v-for="item in row"
          :key="item.id"
          :type="data.styleMode"
          :data="item"
        />
      </u-col>
    </u-row>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Commodity extends Vue {
  // 商品
  name = "Commodity";
  rowsList: Record<string, any> = [];

  @Prop({ default: () => ({}), type: Object }) data!: Record<string, any>;

  @Watch("data", { immediate: true })
  onDataChange(newData: Record<string, any>) {
    !newData.rows && (newData.rows = 2);
    const list = newData.list;
    for (let row = 0; row < newData.rows; row++) {
      const templateList = list.filter((item, index) => {
        return index % newData.rows === row;
      });
      this.rowsList.push(templateList);
    }
  }
}
</script>

<style lang="scss" scoped>
.commodity {
  padding: 40px 10px;
}
</style>
