import { ApisMap } from './src/api.d';
export * from './global'

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApisMap;
    $u: any;
  }
}