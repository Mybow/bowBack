import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cyryxx",
  templateUrl: "./cyryxx.component.html",
  styles: [],
})
export class cyryxx_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "从业人员常用证件代码",
        key: "q",
      },
      {
        name: "从业人员证件号码",
        key: "w",
      },
      {
        name: "从业人员职业类别代码",
        key: "e",
      },
      {
        name: "从业人员姓名",
        key: "r",
      },
      {
        name: "从业人员居住证编号",
        key: "t",
      },
      {
        name: "从业人员居住地址",
        key: "y",
      },
      {
        name: "从业人员入职日期",
        key: "u",
      },
      {
        name: "从业人员离职日期",
        key: "i",
      },
      {
        name: "从业人员联系电话",
        key: "i",
      },
    ],
    two: [
      {
        name: "场所名称",
        key: "i",
      },
      {
        name: "就业许可证编号",
        key: "i",
      },
      {
        name: "娱乐特行岗位名称",
        key: "i",
      },
      {
        name: "资格证类型名称",
        key: "i",
      },
      {
        name: "资格证编号",
        key: "i",
      },
      {
        name: "资格证有效期截止日期",
        key: "i",
      },
      {
        name: "资格证有效期起始日期",
        key: "i",
      },
    ],
  };
  value: "";
  inputData = {
    q: "1",
    w: "2",
    e: "3",
    r: "4",
    t: "5",
    y: "6",
    u: "3",
    i: "2",
  }
  getNode() {
    return document.getElementById("SYS_");
  }
  tableData = {
    title: [
      {
        key: "suoshuquyu",
        value: "所属区域",
      },
      {
        key: "changsuodaima",
        value: "场所代码",
      },
      {
        key: "changsuomingcheng",
        value: "场所名称",
      },
      {
        key: "renyuanxingming",
        value: "人员姓名",
      },
      {
        key: "zhengjianleixing",
        value: "证件类型",
      },
      {
        key: "zhengjianhaoma",
        value: "证件号码",
      },
      {
        key: "ruzhiriqi",
        value: "入职日期",
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
        suoshuquyu: "芙蓉区",
        changsuodaima: "芙蓉区",
        changsuomingcheng: "大酒店",
        renyuanxingming: "芙蓉广场",
        zhengjianleixing: "正常",
        zhengjianhaoma: "王大陆",
        ruzhiriqi: "wenhao",
      });
    }
  }
}
