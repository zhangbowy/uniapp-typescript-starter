<template>
  <div class="sales-promotion" />
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class SalesPromotion extends Vue {
    // 商品促销
    name = 'SalesPromotion';
  }
</script>

<style lang="scss" scoped></style>
