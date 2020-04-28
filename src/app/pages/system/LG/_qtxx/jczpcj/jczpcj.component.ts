import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jczpcj",
  templateUrl: "./jczpcj.component.html",
  styles: [],
})
export class jczpcj_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "视频设备编码",
        key: "q",
      },
      {
        name: "日期时间",
        key: "w",
      },
      {
        name: "机动车号牌号码",
        key: "e",
      },
      {
        name: "机动车号牌颜色代码",
        key: "r",
      },
      {
        name: "机动车车身颜色代码",
        key: "t",
      },
      {
        name: "机动车号牌种类代码",
        key: "y",
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
        key: "jidongchehaopaihaoma",
        value: "机动车号牌号码",
      },
      {
        key: "jidongchehaopaiyansedaima",
        value: "机动车号牌颜色代码",
      },
      {
        key: "jidongchehaopaizhongleidaima",
        value: "机动车号牌种类代码",
      },
      {
        key: "jidongchecheshenyansedaima",
        value: "机动车号牌车身颜色代码",
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
        shipinshebeibianma: "芙蓉区",
        riqishijian: "芙蓉区",
        jidongchehaopaihaoma: "大酒店",
        jidongchehaopaiyansedaima: "芙蓉广场",
        jidongchehaopaizhongleidaima: "正常",
        jidongchecheshenyansedaima: "王大陆"
      });
    }
  }
}
