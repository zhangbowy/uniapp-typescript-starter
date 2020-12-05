<template>
  <div v-if="1" class="1" />
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class Showcase extends Vue {
    name = 'Showcase';
  }
</script>

<style lang="scss" scoped></style>
