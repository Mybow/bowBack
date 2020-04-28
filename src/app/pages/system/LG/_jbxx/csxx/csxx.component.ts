import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-csxx",
  templateUrl: "./csxx.component.html",
  styles: [],
})
export class csxx_component implements OnInit {
  // 弹框数据对象
  shadowData = {
    one: [
      {
        name: "娱乐特行场所类型",
        key: "q",
      },
      {
        name: "注册地址",
        key: "w",
      },
      {
        name: "统一社会信用代码",
        key: "e",
      },
      {
        name: "单位名称",
        key: "r",
      },
      {
        name: "法定代表人姓名",
        key: "t",
      },
      {
        name: "法人证件号",
        key: "y",
      },
      {
        name: "法定代表人现居住地",
        key: "u",
      },
      {
        name: "法人联系电话",
        key: "i",
      },
    ],
    two: [
      {
        name: "场所名称",
        key: "i",
      },
      {
        name: "场所代码",
        key: "i",
      },
      {
        name: "场所地址",
        key: "i",
      },
      {
        name: "场所行政区域",
        key: "i",
      },
      {
        name: "场所联系电话",
        key: "i",
      },
      {
        name: "场所开业日期",
        key: "i",
      },
      {
        name: "床位数量",
        key: "i",
      },
      {
        name: "房屋间数",
        key: "i",
      },
      {
        name: "等级代码",
        key: "i",
      },
      {
        name: "星级代码",
        key: "i",
      },
      {
        name: "楼层数",
        key: "i",
      },
    ],
    three: [
      {
        name: "负责人姓名",
        key: "i",
      },
      {
        name: "负责人证件号码",
        key: "i",
      },
      {
        name: "负责人现居住地",
        key: "i",
      },
      {
        name: "负责人联系方式",
        key: "i",
      },
      {
        name: "保卫负责人姓名",
        key: "i",
      },
      {
        name: "保卫负责人联系电话",
        key: "i",
      },
      {
        name: "保卫人员数量",
        key: "i",
      },
    ],
    four: [
      {
        name: "场所面积",
        key: "i",
      },
      {
        name: "特行备案备案号",
        key: "i",
      },
      {
        name: "特行备案机构名称",
        key: "i",
      },
      {
        name: "特行经营许可证号",
        key: "i",
      },
      {
        name: "特行经营许可证发证机构",
        key: "i",
      },
      {
        name: "视频监控设备判断指示符",
        key: "i",
      },
      {
        name: "信息采集设备判断指示符",
        key: "i",
      },
      {
        name: "消防设备判断指示符",
        key: "i",
      },
      {
        name: "场所经营状态代码",
        key: "i",
      },
      {
        name: "责任民警姓名",
        key: "i",
      },
      {
        name: "治安管理单位编码",
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
  // 表格数据对象
  tableData = {
    // 表格表头
    title: [
      {
        key: "daima",
        value: "场所代码",
      },
      {
        key: "fenju",
        value: "分局",
      },
      {
        key: "paichusuo",
        value: "派出所",
      },
      {
        key: "name",
        value: "场所名称",
      },
      {
        key: "dizhi",
        value: "场所地址名称",
      },
      {
        key: "state",
        value: "经营状态",
      },
      {
        key: "Pname",
        value: "法定代表人姓名",
      },
      {
        key: "phone",
        value: "法定代表人电话",
      },
    ],
    // 表格数据
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

  // tableData.title 对应的 key 值 , 按照title.key中的每一项复制粘贴
  ngOnInit() {
    for (let i = 0; i < 43; i++) {
      this.tableData.data.push({
        fenju: "芙蓉区",
        paichusuo: "芙蓉区",
        name: "大酒店",
        dizhi: "芙蓉广场",
        state: "正常",
        Pname: "王大陆",
        phone: "wenhao",
      });
    }
  }
}
