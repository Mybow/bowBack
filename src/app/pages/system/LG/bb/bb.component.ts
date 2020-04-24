import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bb",
  templateUrl: "./bb.component.html",
  styles: [],
})
export class BbComponent implements OnInit {
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
  getNode() {
    return document.getElementById("SYS_");
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
  closeWindow(){
    console.log('close')
    this.isOpen = false;
  }
  constructor() {}

  ngOnInit() {
    console.log('ngOnInit ')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit ')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit ')
  }
}
