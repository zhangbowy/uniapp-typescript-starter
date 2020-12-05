<template>
  <div class="user" />
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class User extends Vue {
    name = 'User';
  }
</script>

<style lang="scss" scoped></style>
