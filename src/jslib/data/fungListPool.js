/* eslint-disable */

import g from "./../global";
export default class fungListPool {
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

  getDataByCurrentId($id) {}
  getDataByNun($num) {
    // let list = [];
    // let indexList = [];
    // for(let i=0;i<100;i++)
    // {
    //   if(list.length!=$num)
    //   {
    //     let index = parseInt(Math.random()*this._list.length)
    //     if(indexList.indexOf(index)>-1 ||this.list[index].name_cn==null)
    //     {
    //       continue;
    //     }
    //     indexList.push(index);
    //     list.push(this.list[index]);
    //   }else{
    //     return list
    //   }
    // }

    return this._list.slice(0, 9);
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
  d.name_cn = "";
  d.phylum = "";
  d.phylum_cn = "";
  d.class = "";
  d.class_cn = "";
  d.orders = "";
  d.orders_cn = "";
  d.family = "";
  d.family_cn = "";
  d.genus = "";
  d.genus_cn = "";
  d.species = "";
  d.species_cn = "";
  d.subspecies = "";
  d.subspecies_cn = "";
  d.strain = "";
  d.strain_cn = "";
  d.products = "";
  d.desc1 = "";
  d.desc1_cn = "";
  d.desc2 = "";
  d.desc2_cn = "";
  d.desc3 = "";
  d.desc3_cn = "";
  d.desc4 = "";
  d.desc4_cn = "";
  d.update = update.bind(d);
  d.update($Obj);
  return d;
}

function update($Obj) {
  $Obj.hasOwnProperty("id") && (this.id = $Obj.id);
  $Obj.hasOwnProperty("name") && (this.name = $Obj.name);
  $Obj.hasOwnProperty("name_cn") && (this.name_cn = $Obj.name_cn);
  $Obj.hasOwnProperty("phylum") && (this.phylum = $Obj.phylum);
  $Obj.hasOwnProperty("phylum_cn") && (this.phylum_cn = $Obj.phylum_cn);
  $Obj.hasOwnProperty("class") && (this.class = $Obj.class);
  $Obj.hasOwnProperty("class_cn") && (this.class_cn = $Obj.class_cn);
  $Obj.hasOwnProperty("orders") && (this.orders = $Obj.orders);
  $Obj.hasOwnProperty("orders_cn") && (this.orders_cn = $Obj.orders_cn);
  $Obj.hasOwnProperty("family") && (this.family = $Obj.family);
  $Obj.hasOwnProperty("family_cn") && (this.family_cn = $Obj.family_cn);
  $Obj.hasOwnProperty("genus") && (this.genus = $Obj.genus);
  $Obj.hasOwnProperty("genus_cn") && (this.genus_cn = $Obj.genus_cn);
  $Obj.hasOwnProperty("species") && (this.species = $Obj.species);
  $Obj.hasOwnProperty("species_cn") && (this.species_cn = $Obj.species_cn);
  $Obj.hasOwnProperty("subspecies") && (this.subspecies = $Obj.subspecies);
  $Obj.hasOwnProperty("subspecies_cn") &&
    (this.subspecies_cn = $Obj.subspecies_cn);
  $Obj.hasOwnProperty("strain") && (this.strain = $Obj.strain);
  $Obj.hasOwnProperty("strain_cn") && (this.strain_cn = $Obj.strain_cn);
  $Obj.hasOwnProperty("products") && (this.products = $Obj.products);
  $Obj.hasOwnProperty("desc1") && (this.desc = $Obj.desc1);
  $Obj.hasOwnProperty("desc1_cn") && (this.desc1_cn = $Obj.desc1_cn);
  $Obj.hasOwnProperty("desc2") && (this.desc2 = $Obj.desc2);
  $Obj.hasOwnProperty("desc2_cn") && (this.desc2_cn = $Obj.desc2_cn);
  $Obj.hasOwnProperty("desc3") && (this.desc3 = $Obj.desc3);
  $Obj.hasOwnProperty("desc3_cn") && (this.desc3_cn = $Obj.desc3_cn);
  $Obj.hasOwnProperty("desc4") && (this.desc4 = $Obj.desc4);
  $Obj.hasOwnProperty("desc4_cn") && (this.desc4_cn = $Obj.desc4_cn);
  if ($Obj.hasOwnProperty("updated_at")) {
    var time = new Date().getTime(new Date($Obj.updated_at)); //拿到时间戳
    this.updated_at = g.timeTool.getFullDate(time, true); //时间戳转换成全日期时间格式
  }
  if ($Obj.hasOwnProperty("created_at")) {
    var time = new Date().getTime(new Date($Obj.created_at));
    this.created_at = g.timeTool.getFullDate(time, true);
  }
}
