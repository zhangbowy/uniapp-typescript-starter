<template>
  <div :class="name" />
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Space extends Vue {
    name = 'Space';
  }
</script>

<style lang="scss" scoped></style>
