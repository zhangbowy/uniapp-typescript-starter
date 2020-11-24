import Vue from 'vue'
import Vuex, { ModuleTree } from 'vuex'
// 持久化插件
// import vuexPersist from 'vuex-persist'
import getters from './getters'
import setting from './modules/setting'
import { RootState } from 'types'


Vue.use(Vuex)

// const vuexLocal = new vuexPersist({
//   storage: window.localStorage
// })


const modules: ModuleTree<RootState> = {
  setting: setting
}

export default new Vuex.Store<RootState>({
  getters: getters,
  modules: modules,
  // plugins: [vuexLocal.plugin]
})
