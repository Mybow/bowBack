import { Component, OnInit ,Output,EventEmitter} from "@angular/core";

@Component({
  selector: "app-bb",
  templateUrl: "./bb.component.html",
  styles: [],
})
export class BbComponent implements OnInit {
  @Output() private outEvent= new EventEmitter<string>() 
  queryData = {
    fenju: "",
    paichusuo: "",
    shequ: "",
    mingcheng: "",
    daima: "",
    dizhimingcheng: "",
    jingyingzhuangtai: "",
    fangjianshu: "",
    chuangwei: "",
    xingji: "",
    dengji: "",
    congyerenyuan: "",
  };
  getNode(){
    return document.getElementById('SYS_')
  }
  tableData = {
    title: [
      {
        key: "code",
        value: "序号",
      },
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
      }
    ],
    data: [],
  };
  pagination = {
    total: 10,
    number: 10
  };
  isOpen=true
  openWindow(index){
    console.log(index)
  }
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 43; i++) {
      this.tableData.data.push({
        code: 1236,
        fenju: "芙蓉区",
        paichusuo: "芙蓉区",
        name: "大酒店",
        dizhi: "芙蓉广场",
        state: "正常",
        Pname: "王大陆",
        phone: "wenhao"
      });
    }
  }
}
