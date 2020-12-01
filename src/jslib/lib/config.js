module.exports = {
  mode: ["debug", "testData"], //工作模式 //"devData“ 请求假数据(mock) //testData真实数据  //debug 控制台有输出

  url: {
    //公共路径配置
    domain: "",
    // server: "http://localhost:4000/xiaocxHome", //本地服务
    server: "https://mp.tecqm.cn", //线上地址
    uploadUrl: "", //图片上传路径
    staticUrl: "", //静态资源路径
    gameUrl: "",
    ossUrl: "",
    defaultUrl: "http://www.qinkeji.cn/static/1.jpg", //默认图
  },
  // path:"http://localhost:4000",
  path: "http://fungus.tecqm.club",

  http: {
    method: "post", //请求方式
    credentials: false,
    repeatReqTime: 2000, //重复请求间隔
    req: {
      result: {
        name: "errno",
        type: "number",
        success: 0,
      },
      data: {
        name: "data",
      },
      error: {
        name: "errno",
        type: "number",
      },
      errorMsg: {
        name: "errmsg",
        type: "string",
      },
      mime: "json",
    },
  },
  // file: {
  //   staticData: "{$data}/staticData.data"
  // },

  param: {
    //公共参数配置
    defaultLang: "cn",
    imageExp: "\\w+\\.(jpeg|jpg|gif|bmp|png).*",
    repeatCodeTime: 60, //短信验证码请求间隔
    pageSize: 10, //分页条数,
    timeOut: 5000,
    fungCoordinateName: "菌与慢病", //菌入口关系图坐标标识
    disCoordinateName: "话题和菌的关系", //入话题口关系图坐标标识
  },
};
