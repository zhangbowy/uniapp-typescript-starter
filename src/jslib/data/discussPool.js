export default class discussPool {
  constructor() {
    this._list = [];
    this._hash = {};
    this.test1 = 1;
    // this._idHash = {};
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
      // this._idHash[itemData.category_id].push(itemData)
    }
  }

  get list() {
    return this._list;
  }

  getDataById($id) {
    return this._hash[$id];
  }

  removeDataById($id) {
    const itemIndex = this._list.indexof(this._hash[$id]); // id通过hash快速找到
    this._list.splice(itemIndex, 1); // splice剔除,页面重新赋值this._list
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
  d.category_name = "";
  d.category_id = "";
  d.desc = "";
  d.icon = "";
  d.article = "";
  d.fg_list = [];
  d.update = update.bind(d);
  d.update($Obj);
  return d;
}

function update($Obj) {
  $Obj.hasOwnProperty("id") && (this.id = $Obj.id);
  $Obj.hasOwnProperty("name") && (this.name = $Obj.name);
  $Obj.hasOwnProperty("category_name") &&
    (this.category_name = $Obj.category_name);
  $Obj.hasOwnProperty("category_id") && (this.category_id = $Obj.category_id);
  $Obj.hasOwnProperty("desc") && (this.desc = $Obj.desc);
  $Obj.hasOwnProperty("icon") && (this.icon = $Obj.icon);
  $Obj.hasOwnProperty("article") && (this.article = $Obj.article);
  $Obj.hasOwnProperty("fg_list") && (this.fgList = $Obj.fg_list);
}
