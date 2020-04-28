import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-aqffsbxx",
  templateUrl: "./aqffsbxx.component.html",
  styles: [],
})
export class aqffsbxx_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "场所代码",
        key: "q",
      },
      {
        name: "安全防范设备类型代码",
        key: "w",
      },
      {
        name: "安全防范设备",
        key: "e",
      },
      {
        name: "设备序号",
        key: "r",
      },
      {
        name: "设备名称",
        key: "t",
      },
      {
        name: "厂商名称",
        key: "y",
      },
      {
        name: "品牌型号",
        key: "u",
      },
      {
        name: "检测机构名称",
        key: "i",
      },
      {
        name: "安全防范设备数量",
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
        key: "shebeileixing",
        value: "设备类型",
      },
      {
        key: "shebeixuhao",
        value: "设备序号",
      },
      {
        key: "shebeimingcheng",
        value: "设备名称",
      },
      {
        key: "pinpaixinghao",
        value: "品牌型号",
      },{
        key: "jianchajigoumingcheng",
        value: "检查机构名称",
      },{
        key: "shebeishuliang",
        value: "设备数量",
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
        suoshuquyu: "芙蓉区",
        changsuodaima: "芙蓉区",
        changsuomingcheng: "大酒店",
        shebeileixing: "芙蓉广场",
        shebeixuhao: "正常",
        shebeimingcheng: "王大陆",
        changshangmingcheng: "wenhao",
        pinpaixinghao: "wenhao",
        jianchajigoumingcheng: "wenhao",
        shebeishuliang: "wenhao"
      });
    }
  }
}
