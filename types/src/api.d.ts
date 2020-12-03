import { UserApis, SystemSetting, Goods } from "@/common/apis";
export type PostApi<T = null, S = any> = (data?: T) => Promise<S>;
export type GetApi<T = null, S = any> = (params?: T) => Promise<S>;

export interface GetInfo {}

export interface LoginData {
  js_code: string;
  encryptedData: string;
  iv: string;
  signature: string;
  rawData: string;
}

export interface GetGoodsList {
  pageSize?: number;
  currentPage: number;
}

export interface ApisMap {
  user: UserApis;
  systemSetting: SystemSetting;
  goods: Goods;
}
