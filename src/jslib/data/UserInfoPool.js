/* eslint-disable */
var g = require("../global.js");
var _user = {};
_user.avatarUrl = "";
_user.nickName = "";
_user.gender = "";
_user.birth = "";
_user.phone = "";
_user.score = "";
_user.postNum = 0;
_user.likeNum = 0;
_user.bgUrl = "";
_user.intro = "";
_user.userId = "";

export default class UserInfoPool {
  constructor() {}
  update($obj) {
    $obj.hasOwnProperty("avatar_url") && (_user.avatarUrl = $obj.avatar_url);
    $obj.hasOwnProperty("nickname") && (_user.nickName = $obj.nickname);
    $obj.hasOwnProperty("gender") && (_user.gender = $obj.gender); //性别 0--未知; 1--男； 2--女
    $obj.hasOwnProperty("birthday") && (_user.birth = $obj.birthday);
    $obj.hasOwnProperty("telephone") && (_user.phone = $obj.telephone);
    $obj.hasOwnProperty("score") && (_user.score = $obj.score);
    $obj.hasOwnProperty("post_num") && (_user.postNum = $obj.post_num);
    $obj.hasOwnProperty("get_like_num") && (_user.likeNum = $obj.get_like_num);
    $obj.hasOwnProperty("background_url") &&
      (_user.bgUrl = $obj.background_url);
    $obj.hasOwnProperty("introduce") && (_user.intro = $obj.introduce);
    $obj.hasOwnProperty("openid") && (_user.userId = $obj.openid);
  }
  get userInfo() {
    return _user;
  }
  removeAll() {
    _user = {};
  }
}
