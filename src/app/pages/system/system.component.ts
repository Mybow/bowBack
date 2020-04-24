import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-system",
  templateUrl: "./system.component.html",
  styleUrls: ["./system.component.less"],
})
export class SystemComponent implements OnInit {
  routerList = [
    {
      name: "基本信息",
      options: [
        {
          url: "11",
          name: "场所信息",
        },
        {
          url: "22",
          name: "从业人员信息",
        },
        {
          url: "33",
          name: "安全防范设备信息",
        },
      ],
    },
    {
      name: "业务信息",
      options: [
        {
          url: "33",
          name: "旅客查询",
        },
      ],
    },
    {
      name: "涉案信息",
      options: [
        {
          url: "",
          name: "场所案事件信息",
        },
        {
          url: "",
          name: "从业人员涉及案事件信息",
        },
        {
          url: "",
          name: "警情情况",
        },
        {
          url: "",
          name: "法律法规",
        },
      ],
    },
    {
      name: "统计分析",
      options: [
        {
          url: "bb",
          name: "报表统计",
        },
        {
          url: "",
          name: "图表统计",
        },
      ],
    },
    {
      name: "安检信息",
      options: [
        {
          url: "bb",
          name: "日常检查",
        },
        {
          url: "",
          name: "通知通告",
        },
        {
          url: "",
          name: "可疑情况",
        },
      ],
    },
    {
      name: "其他信息",
      options: [
        {
          url: "bb",
          name: "智能采集设备信息",
        },
        {
          url: "",
          name: "人员抓拍采集信息",
        },
        {
          url: "",
          name: "人脸抓拍采集信息",
        },
        {
          url: "",
          name: "机车抓拍采集信息",
        },
      ],
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  routerLink(url) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
