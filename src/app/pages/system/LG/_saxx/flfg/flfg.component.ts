import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-flfg",
  templateUrl: "./flfg.component.html",
  styles: [],
})
export class flfg_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "法律法规代码",
        key: "q",
      },
      {
        name: "电子文件名称",
        key: "e",
      },
      {
        name: "电子文件摘要",
        key: "r",
      },
      {
        name: "发布单位名称",
        key: "t",
      },
      {
        name: "发布范围描述",
        key: "y",
      },
      {
        name: "发布日期",
        key: "u",
      },
      {
        name: "登记人姓名",
        key: "i",
      }
    ]
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
