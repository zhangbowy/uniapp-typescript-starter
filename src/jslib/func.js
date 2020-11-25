/* eslint-disable */
/**
 * Created by zhangbo on 2019/4/2 0002.
 * @公共方法页面
 */

import g from "./utils/global.js";

let dayList = ["日", "一", "二", "三", "四", "五", "六"];

export function getDay($stamp) {
  if (
    !$stamp ||
    ($stamp.toString().length != 10 && $stamp.toString().length != 13)
  ) {
    return 0;
  }
  let date = new Date($stamp);
  let day = date.getDay();
  return dayList[day];
}
/**
 * @获取路由u后面全部参数
 */

export function getQuery() {
  /* 获取当前路由栈数组 */
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const options = currentPage.options;
  return options;
}
/**
 * 合并两个对象（将第二个对象合并到第一个对象），也可用于深度复制
 * @param d 要输出的对象
 * @param b 要合并的对象
 * @param cover 是否覆盖属性
 * @private
 */
export function __merge(d, b, cover) {
  if (b) {
    for (var k in b) {
      if (typeof b[k] == "object" && (!d[k] || typeof d[k] == "object")) {
        if (Array.isArray(b[k])) {
          d[k] = d[k] || [];
        } else {
          d[k] = d[k] || {};
        }
        __merge(d[k], b[k], cover);
      } else {
        !(!cover && d.hasOwnProperty(k)) && (d[k] = b[k]);
      }
    }
  }
  return d;
}

/*

 * params
 * $res:用户信息
 * $code： code
 * $isStamp:是否需要跳转
 * */

export function wxLogin($res, $code, $isStamp) {
  var data = {};
  if ($res.rawData) {
    data = JSON.parse($res.rawData);
  }
  var netData = g.util.__merge({}, data);
  netData.js_code = $code;
  netData.encryptedData = encodeURIComponent($res.encryptedData);
  netData.iv = encodeURIComponent($res.iv);
  netData.signature = $res.signature;
  netData.rawData = $res.rawData;
  g.net.call("wx/user/login", netData).then(($data) => {
    // g.data.userInfoPool.default.update($data);
    var _cookie = $data.openid;
    var phone = $data.phone;
    wx.setStorageSync("phone", phone);
    wx.setStorage({
      key: "cookie",
      data: _cookie,
      success() {
        getUserInfo().then(
          () => {
            if ($isStamp) {
              wx.reLaunch({
                url: "../newIndex/index",
              });
            }
          },
          ($err) => {
            g.func.dealErr($err);
          }
        );
      },
    });
  });
}

function getUserInfo() {
  return new Promise((resolve, reject) => {
    g.net.call("wx/user/info").then(
      ($data) => {
        // g.data.userInfoPool.update($data);
        resolve();
      },
      ($err) => {
        resolve();
        // reject($err)
      }
    );
  });
}
/*
//
/** 
 * 错误处理
 * @param 接口返回值
 *
 */
export function dealErr($errObj) {
  if ($errObj.code == -2) {
    //与后端协定好code,return
    wx.navigateBack();
    return;
  }
  wx.showToast({
    title: $errObj.errorMsg,
    duration: 2000,
    icon: "none",
    mask: true,
  });
}
