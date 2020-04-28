import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-csaj",
  templateUrl: "./csaj.component.html",
  styles: [],
})
export class csaj_Component implements OnInit {
  shadowData = [
    {
      name: "场所代码",
      key: "q",
    },
    {
      name: "案事件编号",
      key: "w",
    },
    {
      name: "案事件发生开始时间",
      key: "e",
    },
    {
      name: "案件类别代码",
      key: "r",
    },
    {
      name: "简要案情",
      key: "t",
    },
    {
      name: "案事件处理结果",
      key: "y",
    },
    {
      name: "姓名",
      key: "i",
    },
    {
      name: "证件号码",
      key: "i",
    },
  ];
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
  };
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
