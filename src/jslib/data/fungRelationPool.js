/* eslint-disable */
export default class FungRelationPool {
  constructor() {
    this._list = [];
    this._hash = {};
  }

  update($Obj) {
    this._hash[$Obj[0].fg_id] = {};
    this._hash[$Obj[0].fg_id].list = [];
    for (var item of $Obj) {
      this.add(item);
    }
  }
  add($item) {
    var itemData = createData($item);
    if (itemData.topicId != null) {
      this._list.push(itemData);
      this._hash[itemData.fgId].list.push(itemData);
    }
    this._hash[itemData.fgId].fgName = itemData.allName;
    this._hash[itemData.fgId].fg_refer = itemData.fg_refer;
    this._hash[itemData.fgId].fgId = itemData.fgId;
  }
  get list() {
    return this._list;
  }
  getDataById($id) {
    return this._hash[$id];
  }
  getCanvas($fglist, $name) {
    var windowWidth = "",
      windowHeight = ""; //定义宽高
    try {
      var res = wx.getSystemInfoSync(); //试图获取屏幕宽高数据
      windowWidth = (res.windowWidth / 750) * 720; //以设计图750为主进行比例算换
      windowHeight = (res.windowWidth / 750) * 550; //以设计图750为主进行比例算换
    } catch (e) {
      console.error("getSystemInfoSync failed!"); //如果获取失败
    }
    var fgName = [];
    var factorList = [];
    for (var item of $fglist) {
      fgName.push(item.topicName ? item.topicName.slice(0, 4) + "..." : "- -");
      factorList.push(item.factor);
    }
    var chartType = "";
    if ($fglist.length > 2) {
      chartType = "radar";
    } else {
      chartType = "column";
    }
    new wxCharts({
      canvasId: "columnCanvas",
      type: chartType,
      animation: true,
      categories: fgName,
      title: {
        name: "test",
        offsetX: 10,
      },

      series: [
        {
          // name: '此菌对对应话题的影响程度(%)',
          name: $name.x_name,
          data: factorList,
          format: function (val, name) {
            return val.toFixed(2) + "%";
          },
        },
      ],
      yAxis: {
        format: function (val) {
          return val + "%";
        },
        // title: '影响程度(%)',
        title: $name.y_name,
        min: 0,
        max: 100,
        fontColor: "#fff",
        // titleFontColor:"#fff"
      },
      xAxis: {
        disableGrid: true,
        // type: 'calibration'
        fontColor: "#fff",
        gridColor: "#fff",
        color: "#fff",
      },
      extra: {
        column: {
          width: 25,
        },
        radar: {
          max: 100, //雷达数值的最大值
        },
      },
      dataLabel: true,
      width: windowWidth,
      height: 380,
    });
  }
  getDataByNun($num) {
    let list = [];
    let indexList = [];
    for (let i = 0; i < 1000; i++) {
      if (list.length != $num) {
        let index = parseInt(Math.random() * this._list.length);
        if (indexList.indexOf(index) > -1 || this.list[index].name_cn == null) {
          continue;
        }
        indexList.push(index);
        list.push(this.list[index]);
      } else {
        return list;
      }
    }
  }
  removeDataById($id) {
    let itemIndex = this._list.indexof(this._hash[$id]); //id通过hash快速找到
    this._list.splice(itemIndex, 1); //splice剔除,页面重新赋值this._list
  }

  removeAll() {
    this._list = [];
    this._hash = {};
  }
}

function createData($Obj) {
  var d = {};
  d.fgId = "";
  d.allName = "";
  d.fgName = "";
  d.fgName_cn = "";
  d.factor = "";
  d.topicName = "";
  d.topicDesc = "";
  d.topicId = "";
  d.fg_refer = "";
  d.fg_data_res = "";
  d.update = update.bind(d);
  d.update($Obj);
  return d;
}

function update($Obj) {
  $Obj.hasOwnProperty("fg_id") && (this.fgId = $Obj.fg_id);
  $Obj.hasOwnProperty("factor") && (this.factor = $Obj.factor);
  $Obj.hasOwnProperty("topic_name") && (this.topicName = $Obj.topic_name);
  $Obj.hasOwnProperty("topic_desc") && (this.topicDesc = $Obj.topic_desc);
  $Obj.hasOwnProperty("topic_id") && (this.topicId = $Obj.topic_id);
  $Obj.hasOwnProperty("fg_refer") && (this.fg_refer = $Obj.fg_refer);
  $Obj.hasOwnProperty("fg_data_res") && (this.fg_data_res = $Obj.fg_data_res);
  if ($Obj.hasOwnProperty("fg_name_cn") && $Obj.hasOwnProperty("fg_name")) {
    if ($Obj.fg_name_cn == null && $Obj.fg_name != null) {
      this.allName = $Obj.fg_name;
    } else if ($Obj.fg_name_cn != null && $Obj.fg_name == null) {
      this.allName = $Obj.fg_name_cn;
    } else if ($Obj.fg_name_cn != null && $Obj.fg_name != null) {
      this.allName = `${$Obj.fg_name_cn}(${$Obj.fg_name})`;
    }
  }
}
