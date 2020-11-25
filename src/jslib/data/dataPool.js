/* eslint-disable */
// 引入
import FungListPool from "./fungListPool.js";
import CategoryListPool from "./categoryListPool.js";
import DiscussPool from "./discussPool.js";
import FungRelationPool from "./fungRelationPool.js";
import SettingPool from "./settingPool.js";
import UserInfoPool from "./UserInfoPool.js";

// 暴露
export var fungListPool = new FungListPool(); //细菌列表池
export var categoryListPool = new CategoryListPool(); //分类列表池
export var discussPool = new DiscussPool(); //话题列表池
export var fungRelationPool = new FungRelationPool(); //菌话题关系
export var settingPool = new SettingPool(); //设置
export var userInfoPool = new UserInfoPool(); //设置
