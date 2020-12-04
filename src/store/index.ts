import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import getters from './getters';
import setting from './modules/setting';
import { RootState } from 'types';

Vue.use(Vuex);

const modules: ModuleTree<RootState> = {
  setting: setting,
};

export default new Vuex.Store<RootState>({
  getters: getters,
  modules: modules,
});
