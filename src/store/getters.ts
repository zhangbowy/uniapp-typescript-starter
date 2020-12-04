import { RootState } from 'types';

const getters = {
  templateList: (state: RootState) => state.setting.templateList,
  navList: (state: RootState) => state.setting.navList,
};

export default getters;
