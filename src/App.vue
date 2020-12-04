<script lang="ts">
  // import func from "vue-temp/vue-editor-bridge";
  export default {
    mpType: 'app',
    name: 'App',
    onLaunch: function () {
      console.log('App Launch');
    },
    onShow: function () {
      console.log('App Show');
    },
    onLoad: function () {
      debugger;
      console.log('App onLoad');
    },
    onHide: function () {
      console.log('App Hide');
    },
  };
</script>
<style lang="scss" scoped>
  @import 'uview-ui/index.scss';

  /* App.vue */
  .cell-hover-class {
    background-color: rgb(235, 237, 238);
  }
</style>
