import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rcjc",
  templateUrl: "./rcjc.component.html",
  styles: [],
})
export class rcjc_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "场所代码",
        key: "q",
      },
      {
        name: "检查类型编码",
        key: "w",
      },
      {
        name: "日常检查登记序号",
        key: "e",
      },
      {
        name: "检查人姓名",
        key: "r",
      },
      {
        name: "检查人警号",
        key: "t",
      },
      {
        name: "公安机关机构代码",
        key: "t",
      },
      {
        name: "检查日期",
        key: "t",
      },
      {
        name: "场所检查简要情况",
        key: "t",
      },
      {
        name: "检查结果简要情况",
        key: "t",
      },
      {
        name: "场所负责人姓名",
        key: "t",
      }
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
        key: "changsuodaima",
        value: "场所代码",
      },
      {
        key: "jianchaleixingbianma",
        value: "检查类型编码",
      },
      {
        key: "jianchariqi",
        value: "检查日期",
      },
      {
        key: "jiancharenxingming",
        value: "检查人姓名",
      },
      {
        key: "jiancharenjinghao",
        value: "检查人警号",
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
        changsuodaima: "芙蓉区",
        jianchaleixingbianma: "芙蓉区",
        jianchariqi: "大酒店",
        jiancharenxingming: "芙蓉广场",
        jiancharenjinghao: "正常",
      });
    }
  }
}
