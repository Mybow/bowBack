import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bb",
  templateUrl: "./bb.component.html",
  styles: [],
})
export class BbComponent implements OnInit {
  shadowData = {
    top: [
      {
        name: "娱乐特行场所类型",
        key: "q",
      },
      {
        name: "注册地址",
        key: "w",
      },
      {
        name: "统一社会信用代码",
        key: "e",
      },
      {
        name: "单位名称",
        key: "r",
      },
      {
        name: "法定代表人姓名",
        key: "t",
      },
      {
        name: "法人证件号",
        key: "y",
      },
      {
        name: "法定代表人现居住地",
        key: "u",
      },
      {
        name: "法人联系电话",
        key: "i",
      },
    ],
    middle: [
      {
        name: "场所名称",
        key: "i",
      },
      {
        name: "场所代码",
        key: "i",
      },
      {
        name: "场所地址",
        key: "i",
      },
      {
        name: "场所行政区域",
        key: "i",
      },
      {
        name: "场所联系电话",
        key: "i",
      },
      {
        name: "场所开业日期",
        key: "i",
      },
      {
        name: "床位数量",
        key: "i",
      },
      {
        name: "房屋间数",
        key: "i",
      },
      {
        name: "等级代码",
        key: "i",
      },
      {
        name: "星级代码",
        key: "i",
      },
    ],
    buttom: [],
  };
  value: "";
  inputData = {
    top: {
      q: "1",
      w: "2",
      e: "3",
      r: "4",
      t: "5",
      y: "6",
      u: "3",
      i: "2",
    },
    middle: {
      q: "1",
      w: "2",
      e: "3",
      r: "4",
      t: "5",
      y: "6",
      u: "3",
      i: "2",
    },
    bottom: {
      q: "1",
      w: "2",
      e: "3",
      r: "4",
      t: "5",
      y: "6",
      u: "3",
      i: "2",
    },
  };
  queryData = {
    fenju: "",
    paichusuo: "",
    shequ: "",
    mingcheng: "",
    daima: "",
    dizhimingcheng: "",
    jingyingzhuangtai: "",
    fangjianshu: "",
    chuangwei: "",
    xingji: "",
    dengji: "",
    congyerenyuan: "",
  };
  getNode() {
    return document.getElementById("SYS_");
  }
  tableData = {
    title: [
      {
        key: "code",
        value: "序号",
      },
      {
        key: "daima",
        value: "场所代码",
      },
      {
        key: "fenju",
        value: "分局",
      },
      {
        key: "paichusuo",
        value: "派出所",
      },
      {
        key: "name",
        value: "场所名称",
      },
      {
        key: "dizhi",
        value: "场所地址名称",
      },
      {
        key: "state",
        value: "经营状态",
      },
      {
        key: "Pname",
        value: "法定代表人姓名",
      },
      {
        key: "phone",
        value: "法定代表人电话",
      },
    ],
    data: [],
  };
  pagination = {
    total: 10,
    number: 10,
  };
  BoxStyle = {
    height: "90%",
    top: "5%",
  };
  isOpen = false;
  openWindow(index) {
    this.isOpen = true;
  }
  closeWindow() {
    console.log("close");
    this.isOpen = false;
  }
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 43; i++) {
      this.tableData.data.push({
        code: 1236,
        fenju: "芙蓉区",
        paichusuo: "芙蓉区",
        name: "大酒店",
        dizhi: "芙蓉广场",
        state: "正常",
        Pname: "王大陆",
        phone: "wenhao",
      });
    }
  }
}
