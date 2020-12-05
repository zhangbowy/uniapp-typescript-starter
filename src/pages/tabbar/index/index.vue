<template>
  <view class="content">
    <view class="component-list">
      <view
        v-for="(template, index) in mockTemplateList"
        :key="`${template.class}${index}`"
        class="1"
      >
        <view
          v-for="(template, index) in mockTemplateList"
          :key="`${template.class}${index}`"
          class="1"
        />
        <SearchText v-if="template.class === 'search-text'" :data="template.data" />
        <AllRights v-if="template.class === 'all-rights'" :data="template.data" />
        <Showcase v-if="template.class === 'showcase'" :data="template.data" />
        <u-divider v-if="template.class === 'hr'" :half-width="200" />
        <ImgNav v-if="template.class === 'img-nav'" :data="template.data" />
        <NearbyStores v-if="template.class === 'nearby-stores'" :data="template.data" />
        <Notice v-if="template.class === 'notice'" :data="template.data" />
        <SalesPromotion v-if="template.class === 'sales-promotion'" :data="template.data" />
        <RichText v-if="template.class === 'rich-text'" :data="template.data" />
        <SlideNav v-if="template.class === 'slide-nav'" :data="template.data" />
        <Blank v-if="template.class === 'blank'" :data="template.data" />
        <Slide v-if="template.class === 'slide'" :data="template.data" />
        <TextNav v-if="template.class === 'text-nav'" :data="template.data" />
        <Title v-if="template.class === 'title'" :data="template.data" />
        <TopMenu v-if="template.class === 'top-menu'" :data="template.data" />
        <IVideo v-if="template.class === 'video'" :data="template.data" />
        <PageSet v-if="template.class === 'page-set'" :data="template.data" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
  import { NavItem, TemplateItem } from 'types';
  import { Vue, Component, Watch } from 'vue-property-decorator';
  import { Action, Getter } from 'vuex-class';
  import ItemDisplay from './components/Commodity.vue';
  import SearchText from './components/CommoditySearch.vue';
  import AllRights from './components/Copyright.vue';
  import Showcase from './components/Showcase.vue';
  import ImgNav from './components/ImgNav.vue';
  import NearbyStores from './components/NearbyStores.vue';
  import Notice from './components/Notice.vue';
  import SalesPromotion from './components/SalesPromotion.vue';
  import RichText from './components/RichText.vue';
  import SlideNav from './components/SlideNav.vue';
  import Blank from './components/Space.vue';
  import Slide from './components/Swiper.vue';
  import TextNav from './components/TextNav.vue';
  import Title from './components/Title.vue';
  import TopMenu from './components/TopMenu.vue';
  import IVideo from './components/IVideo.vue';
  import PageSet from './components/PageSet.vue';

  @Component({
    components: {
      ItemDisplay,
      SearchText,
      AllRights,
      Showcase,
      ImgNav,
      NearbyStores,
      Notice,
      SalesPromotion,
      RichText,
      SlideNav,
      Blank,
      Slide,
      TextNav,
      Title,
      TopMenu,
      IVideo,
      PageSet,
    },
  })
  export default class Index extends Vue {
    title = 'Hello';
    @Getter templateList!: TemplateItem[];
    @Getter navList!: NavItem[];

    @Action setNavList!: Function;
    @Action setTemplateList!: Function;

    mockTemplateList: TemplateItem[] = [
      {
        class: 'rich-text',
        active: false,
        style: {},
        data: `<p>露从今夜白，fsadfsadfasdfasdf月是故乡明
    sdfasdfasdfasdffsdafsadfasdfsdfasdfasdfsdfsd
    fasdfasdfasdfasdfasdfasdfsadfasdf</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />`,
      },
      {
        class: 'title',
        active: false,
        style: {},
        data: {
          title: '标题',
          type: 'line',
          subTitle: '',
        },
      },
      {
        class: 'item-display',
        active: false,
        data: {
          rows: 3,
          styleMode: '1',
          list: [
            {
              id: 'sdfsdfsdfsdf',
              name: '商品1dfasdfasdfasdf',
              price: 423,
              count: 6435,
              img: 'http://img.tecqm.cn/qm-platform/sharp_39bbcbc2e5ef4f52959073220417e1c2.png',
            },
            {
              id: 'sdfsdfsdfsdf',
              name: '商品1',
              price: 423,
              count: 6435,
              img: 'http://img.tecqm.cn/qm-platform/sharp_39bbcbc2e5ef4f52959073220417e1c2.png',
            },
            {
              id: 'sdfsdfsdfsdf',
              name: '商品1',
              price: 423,
              count: 6435,
              img: 'http://img.tecqm.cn/qm-platform/sharp_39bbcbc2e5ef4f52959073220417e1c2.png',
            },
            {
              id: 'sdfsdfsdfsdf',
              name: '商品1',
              price: 423,
              count: 6435,
              img: 'http://img.tecqm.cn/qm-platform/sharp_39bbcbc2e5ef4f52959073220417e1c2.png',
            },
            {
              id: 'sdfsdfsdfsdf',
              name: '商品1',
              price: 423,
              count: 6435,
              img: 'http://img.tecqm.cn/qm-platform/sharp_39bbcbc2e5ef4f52959073220417e1c2.png',
            },
            {
              id: 'sdfsdfsdfsdf',
              name: '商品1',
              price: 423,
              count: 6435,
              img: 'http://img.tecqm.cn/qm-platform/sharp_39bbcbc2e5ef4f52959073220417e1c2.png',
            },
          ],
        },
        style: {},
      },
      {
        class: 'text-nav',
        active: false,
        style: {},
        data: {
          margin: 10,
          list: [
            {
              name: '文字导航1',
              url: '',
            },
            {
              name: '文字导航2',
              url: '',
            },
            {
              name: '文字导航3',
              url: '',
            },
          ],
        },
      },
      {
        class: 'hr',
        active: false,
        style: {},
      },
      {
        class: 'img-nav',
        active: false,
        style: {},
        data: {
          cols: 5,
          margin: 10,
          list: [
            {
              name: '图片导航1',
              imgUrl:
                'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
              path: '',
              color: '#000000',
            },
            {
              name: '图片导航2',
              imgUrl:
                'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
              path: '',
              color: '#777777',
            },
            {
              name: '图片导航3',
              imgUrl:
                'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
              path: '',
              color: '#777777',
            },
            {
              name: '图片导航4',
              imgUrl:
                'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
              path: '',
              color: '#777777',
            },
            {
              name: '图片导航5',
              imgUrl:
                'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
              path: '',
              color: '#777777',
            },
          ],
        },
      },
      {
        class: 'video',
        active: false,
        style: {},
        data: {
          coverImgUrl:
            'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
          url:
            'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4',
          margin: 10,
        },
      },
      {
        class: 'showcase',
        active: false,
        style: {},
        data: {
          coverImgUrl: '',
          url: '',
          margin: 10,
        },
      },
    ];

    @Watch('navList')
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
      debugger;
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

  .component-list {
    width: 100%;
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
