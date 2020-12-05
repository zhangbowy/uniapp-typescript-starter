<template>
  <div class="cart" />
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Cart extends Vue {
    name = 'Cart';
  }
</script>

<style lang="scss" scoped></style>
