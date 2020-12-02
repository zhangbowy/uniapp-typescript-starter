<template>
  <view class="content">
    <view>
      <view
        v-for="(template, index) in templateList"
        :key="`${template.class}${index}`"
      >
        <components is="Commodity" v-if="template.class === 'page-set'" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { NavItem, TemplateItem } from "types";
import { Vue, Component, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import Commodity from "./components/Commodity.vue";
import CommoditySearch from "./components/CommoditySearch.vue";
import Copyright from "./components/Copyright.vue";
import DisplayWindow from "./components/DisplayWindow.vue";
import Dividing from "./components/Dividing.vue";
import ImgNav from "./components/ImgNav.vue";
import NearbyStores from "./components/NearbyStores.vue";
import Notice from "./components/Notice.vue";
import ProductPromotion from "./components/ProductPromotion.vue";
import RichText from "./components/RichText.vue";
import SlideNav from "./components/SlideNav.vue";
import Space from "./components/Space.vue";
import Swiper from "./components/Swiper.vue";
import TextNav from "./components/TextNav.vue";
import Title from "./components/Title.vue";
import TopMenu from "./components/TopMenu.vue";
import PageSet from "./components/Video.vue";

@Component({
  components: {
    Commodity,
    CommoditySearch,
    Copyright,
    DisplayWindow,
    Dividing,
    ImgNav,
    NearbyStores,
    Notice,
    ProductPromotion,
    RichText,
    SlideNav,
    Space,
    Swiper,
    TextNav,
    Title,
    TopMenu,
    PageSet,
  },
})
export default class Index extends Vue {
  title = "Hello";
  @Getter templateList!: TemplateItem[];
  @Getter navList!: NavItem[];

  @Action setNavList!: Function;
  @Action setTemplateList!: Function;

  @Watch("navList")
  onNavListChange(newValue: NavItem[]) {
    newValue.forEach((item: NavItem, index) => {
      uni.setTabBarItem({
        index: index,
        text: item.title,
        iconPath: item.icon,
        selectedIconPath: item.icon,
      });
    });
  }
  onLoad() {
    this.$api.systemSetting.getNav().then((res: any) => {
      this.setNavList(res.data.nav);
    });
    this.$api.systemSetting.getTemplate().then((res: any) => {
      this.setTemplateList(res.data);
    });
  }

  created() {}
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
