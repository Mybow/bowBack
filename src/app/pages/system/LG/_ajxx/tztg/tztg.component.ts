import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tztg",
  templateUrl: "./tztg.component.html",
  styles: [],
})
export class tztg_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "通知通告代码",
        key: "q",
      },
      {
        name: "电子文件名称",
        key: "w",
      },
      {
        name: "电子文件摘要",
        key: "e",
      },
      {
        name: "发布单位名称",
        key: "r",
      },
      {
        name: "发布范围描述",
        key: "t",
      },
      {
        name: "紧急程度代码",
        key: "y",
      },
      {
        name: "发布日期",
        key: "u",
      },
      {
        name: "发布人姓名",
        key: "i",
      },
      {
        name: "登记人姓名",
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
        key: "tongzhitonggaodaima",
        value: "通知通告代码",
      },
      {
        key: "dianziwenjianmingcheng",
        value: "电子文件名称",
      },
      {
        key: "fabudanweimingcheng",
        value: "发布单位名称",
      },
      {
        key: "faburiqi",
        value: "发布日期",
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
        tongzhitonggaodaima: "芙蓉区",
        dianziwenjianmingcheng: "芙蓉区",
        fabudanweimingcheng: "大酒店",
        faburiqi: "芙蓉广场"
      });
    }
  }
}
