export type PostApi<T = null, S = any> = (data?: T) => Promise<S>;
export type GetApi<T = null, S = any> = (params?: T) => Promise<S>;

export interface GetInfo {}

export interface UserApi {
  getInfo: GetApi<any>;
}

export interface ApisMap {
  user: UserApi;
}
