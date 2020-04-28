import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-kyqk",
  templateUrl: "./kyqk.component.html",
  styles: [],
})
export class kyqk_Component implements OnInit {
  shadowData = {
    one: [
      {
        name: "场所代码",
        key: "q",
      },
      {
        name: "登记人姓名",
        key: "t",
      },
      {
        name: "可疑情况登记序号",
        key: "w",
      },
      {
        name: "可疑情况类别代码",
        key: "e",
      },
      {
        name: "可疑情况简要描述",
        key: "r",
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
        key: "changsuodaima",
        value: "场所代码",
      },
      {
        key: "dengjirenxingming",
        value: "登记人姓名",
      },
      {
        key: "keyiqingkuangdengjixuhao",
        value: "可疑情况登记序号",
      },
      {
        key: "keyiqingkuangleibiedaima",
        value: "可疑情况类别代码",
      },
      {
        key: "keyiqingkuangjianyaomiaoshu",
        value: "可疑情况简要描述",
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
        changsuodaima: "芙蓉区",
        dengjirenxingming: "芙蓉区",
        keyiqingkuangdengjixuhao: "大酒店",
        keyiqingkuangleibiedaima: "芙蓉广场",
        keyiqingkuangjianyaomiaoshu: "正常"
      });
    }
  }
}
