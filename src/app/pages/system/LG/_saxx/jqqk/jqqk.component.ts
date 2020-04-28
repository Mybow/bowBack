import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jqqk",
  templateUrl: "./jqqk.component.html",
  styles: [],
})
export class jqqk_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "场所代码",
        key: "q",
      },
      {
        name: "警情情况登记序号",
        key: "w",
      },
      {
        name: "警情类别代码",
        key: "e",
      },
      {
        name: "警情情况简要情况",
        key: "r",
      },
      {
        name: "报警人姓名",
        key: "t",
      },
      {
        name: "报警时间",
        key: "y",
      },
      {
        name: "接警时间",
        key: "u",
      },
      {
        name: "处警人姓名",
        key: "i",
      },
      {
        name: "警情处理结果代码",
        key: "i",
      },
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
