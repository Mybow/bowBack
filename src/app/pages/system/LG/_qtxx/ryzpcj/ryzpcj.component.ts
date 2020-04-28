import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ryzpcj",
  templateUrl: "./ryzpcj.component.html",
  styles: [],
})
export class ryzpcj_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "视频设备编码",
        key: "q",
      },
      {
        name: "日期时间",
        key: "r",
      },
      {
        name: "背包判断标识",
        key: "r",
      },
      {
        name: "带帽判断标识",
        key: "r",
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
  };
  getNode() {
    return document.getElementById("SYS_");
  }
  tableData = {
    title: [
      {
        key: "shipinshebeibianma",
        value: "视频设备编码",
      },
      {
        key: "riqishijian",
        value: "日期时间",
      },
      {
        key: "beibaopanduanbiaoshi",
        value: "背包判断标识",
      },
      {
        key: "daimaopanduanbiaoshi",
        value: "带帽判断标识",
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
    this.isOpen = false;
  }
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 43; i++) {
      this.tableData.data.push({
        shipinshebeibianma: "芙蓉区",
        riqishijian: "芙蓉区",
        daimaopanduanbiaoshi:'123',
        beibaopanduanbiaoshi:'456'
      });
    }
  }
}
