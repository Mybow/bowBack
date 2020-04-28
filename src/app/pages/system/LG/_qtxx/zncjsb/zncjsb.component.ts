import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-zncjsb",
  templateUrl: "./zncjsb.component.html",
  styles: [],
})
export class zncjsb_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "视频设备编码",
        key: "q",
      },
      {
        name: "设备名称",
        key: "w",
      },
      {
        name: "品牌型号",
        key: "e",
      },
      {
        name: "IP 地址",
        key: "r",
      },
      {
        name: "网络端口号",
        key: "t",
      },
      {
        name: "地球经度",
        key: "y",
      },
      {
        name: "地球纬度",
        key: "u",
      },
      {
        name: "行政区划代码",
        key: "i",
      },
      {
        name: "视频设备工作状态",
        key: "i",
      },
      {
        name: "场所代码",
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
        key: "shebeimingcheng",
        value: "设备名称",
      },
      {
        key: "pinpaixinghao",
        value: "品牌型号",
      },
      {
        key: "changsuodaima",
        value: "场所代码",
      }
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
        shipinshebeibianma: "芙蓉区",
        shebeimingcheng: "芙蓉区",
        pinpaixinghao: "大酒店",
        changsuodaima: "芙蓉广场"
      });
    }
  }
}
