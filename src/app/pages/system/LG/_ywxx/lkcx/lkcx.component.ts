import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lkcx",
  templateUrl: "./lkcx.component.html",
  styles: [],
})
export class lkcx_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "场所代码",
        key: "q",
      },
      {
        name: "场所名称",
        key: "w",
      },
      {
        name: "访客编号",
        key: "e",
      },
      {
        name: "常用证件代码",
        key: "i",
      },
      {
        name: "证件号码",
        key: "i",
      },
      {
        name: "姓名",
        key: "i",
      },
      {
        name: "联系电话",
        key: "i",
      },
      {
        name: "到访时间",
        key: "i",
      },
      {
        name: "离店时间",
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
  InOutData = {
    in: [
      {
        name: "场所代码",
        key: "i",
      },
      {
        name: "业务流水号码",
        key: "i",
      },
      {
        name: "旅客代码",
        key: "i",
      },
      {
        name: "旅客",
        key: "i",
      },
      {
        name: "常用证件代码",
        key: "i",
      },
      {
        name: "证件号码",
        key: "i",
      },
      {
        name: "姓名",
        key: "i",
      },
      {
        name: "房间号码",
        key: "i",
      },
      {
        name: "到店日期",
        key: "i",
      },
      {
        name: "离店日期",
        key: "i",
      },
    ],
    out: [
      {
        name: "场所代码",
        key: "i",
      },
      {
        name: "业务流水号码",
        key: "i",
      },
      {
        name: "境外旅客旅游代码",
        key: "i",
      },
      {
        name: "签发机关",
        key: "i",
      },
      {
        name: "入境日期",
        key: "i",
      },
      {
        name: "入境停留时间",
        key: "i",
      },
      {
        name: "入境口岸代码",
        key: "i",
      },
      {
        name: "外文姓名",
        key: "i",
      },
      {
        name: "姓名",
        key: "i",
      },
      {
        name: "外文姓",
        key: "i",
      },
      {
        name: "外文名",
        key: "i",
      },
      {
        name: "性别代码",
        key: "i",
      },
      {
        name: "签证种类(居留许可)代码",
        key: "i",
      },
      {
        name: "签证(居留许可)号码",
        key: "i",
      },
      {
        name: "国籍代码",
        key: "i",
      },
      {
        name: "接收单位名称",
        key: "i",
      },
      {
        name: "目的地名称",
        key: "i",
      },
      {
        name: "房间号码",
        key: "i",
      },
      {
        name: "到店日期",
        key: "i",
      },
      {
        name: "离店日期",
        key: "i",
      },
    ],
  };
  tableData = {
    title: [
      {
        key: "fangjianhaoma",
        value: "房间号码",
      },
      {
        key: "lvkexingming",
        value: "旅客姓名",
      },
      {
        key: "xingbie",
        value: "性别",
      },
      {
        key: "zhengjianhaoma",
        value: "证件号码",
      },
      {
        key: "daodianriqi",
        value: "到店日期",
      },
      {
        key: "lidianriqi",
        value: "离店日期",
      },
      {
        key: "yewuliushuihaoma",
        value: "业务流水号码",
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
  InOut: true;
  ngOnInit() {
    for (let i = 0; i < 43; i++) {
      this.tableData.data.push({
        fangjianhaoma: "芙蓉区",
        lvkexingming: "芙蓉区",
        xingbie: "大酒店",
        zhengjianhaoma: "芙蓉广场",
        daodianriqi: "正常",
        lidianriqi: "王大陆",
        yewuliushuihaoma: "wenhao",
      });
    }
  }
  LYtype: true;
}
