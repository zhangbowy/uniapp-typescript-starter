import { Module, ActionTree } from "vuex";
import { NavItem, SettingState, TemplateItem } from "types";

const state: SettingState = {
  templateList: [],
  navList: [],
};

const actions: ActionTree<SettingState, any> = {
  setTemplateList: ({ state }, templateList: TemplateItem[]) => {
    uni.setStorage({
      key: "template_list",
      data: JSON.stringify(templateList),
      success: function () {
        console.log("success");
      },
    });
    state.templateList = templateList;
  },
  setNavList: ({ state }, navList: NavItem[]) => {
    console.log(navList, "navList");
    uni.setStorage({
      key: "nav_list",
      data: JSON.stringify(navList),
      success: function () {
        console.log("success");
      },
    });
    state.navList = navList;
  },
};

const setting: Module<SettingState, any> = {
  state,
  actions,
};
export default setting;
