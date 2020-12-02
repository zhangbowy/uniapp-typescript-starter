import { Module, ActionTree, MutationTree } from "vuex";
import { UserState, UserInfo } from "types";

const state: UserState = {
  userInfo: {},
};

const mutations: MutationTree<UserState> = {
  SET_TOKEN: (state, loginState) => {
    console.log(state, loginState);
  },
};

const actions: ActionTree<UserState, any> = {
  login({ commit }, userInfo: UserInfo) {
    console.log("mLogin", userInfo);
    commit("SET_TOKEN", "");
    // return new Promise((resolve, reject) => {
    //   api.login(userInfo).then(response => {
    //     if(response.data.code ==200){
    //       const result = response.data.result
    //       const userInfo = result.userInfo
    //       uni.setStorageSync(ACCESS_TOKEN,result.token);
    //       uni.setStorageSync(USER_INFO,userInfo);
    //       commit('SET_TOKEN', result.token)
    //       commit('SET_AVATAR', userInfo.avatar)
    //       commit('SET_NAME', { username: userInfo.username,realname: userInfo.realname})
    //       resolve(response)
    //     }else{
    //       resolve(response)
    //     }
    //     }).catch(error => {
    //       console.log("catch===>response",response)
    //       reject(error)
    //   })
    // });
  },
  // logout(state) {
  //   state.hasLogin = false;
  //   state.userInfo = {};
  //   uni.removeStorage({
  //     key: 'userInfo'
  //   });
  // },
};

const user: Module<UserState, any> = {
  state,
  actions,
  mutations,
};
export default user;
