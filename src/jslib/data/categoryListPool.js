/* eslint-disable */
export default class discussPool {
  constructor() {
    this._list = [];
    this._hash = {};
  }

  update($Obj) {
    for (var item of $Obj) {
      this.add(item);
    }
  }

  add($item) {
    var itemData = createData($item);
    if (!this._hash[itemData.id]) {
      this._list.push(itemData);
      this._hash[itemData.id] = itemData;
    }
  }

  get list() {
    return this._list;
  }

  getDataById($id) {
    return this._hash[$id];
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
  d.id = "";
  d.name = "";
  d.desc = "";
  d.imgUrl = "";
  d.article = "";
  d.fgList = [];
  d.update = update.bind(d);
  d.update($Obj);
  return d;
}

function update($Obj) {
  $Obj.hasOwnProperty("id") && (this.id = $Obj.id);
  $Obj.hasOwnProperty("name") && (this.name = $Obj.name);
  $Obj.hasOwnProperty("desc") && (this.desc = $Obj.desc);
  $Obj.hasOwnProperty("imgUrl") && (this.imgUrl = $Obj.imgUrl);
  $Obj.hasOwnProperty("article") && (this.article = $Obj.article);
  $Obj.hasOwnProperty("fgList") && (this.fgList = $Obj.fgList);
}
