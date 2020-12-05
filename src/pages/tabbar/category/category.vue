<template>
  <div class="category" />
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Category extends Vue {
    name = 'Category';
  }
</script>

<style lang="scss" scoped></style>
