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
          url: "csxx",
          name: "场所信息",
        },
        {
          url: "cyryxx",
          name: "从业人员信息",
        },
        {
          url: "aqffsbxx",
          name: "安全防范设备信息",
        },
      ],
    },
    {
      name: "业务信息",
      options: [
        {
          url: "lkcx",
          name: "旅客查询",
        },
      ],
    },
    {
      name: "涉案信息",
      options: [
        {
          url: "csaj",
          name: "场所案事件信息",
        },
        {
          url: "cyrysjan",
          name: "从业人员涉及案事件信息",
        },
        {
          url: "jqqk",
          name: "警情情况",
        },
        {
          url: "flfg",
          name: "法律法规",
        },
      ],
    },
    {
      name: "安检信息",
      options: [
        {
          url: "rcjc",
          name: "日常检查",
        },
        {
          url: "tztg",
          name: "通知通告",
        },
        {
          url: "kyqk",
          name: "可疑情况",
        },
      ],
    },
    {
      name: "其他信息",
      options: [
        {
          url: "zncjsb",
          name: "智能采集设备信息",
        },
        {
          url: "ryzpcj",
          name: "人员抓拍采集信息",
        },
        {
          url: "rlzpcj",
          name: "人脸抓拍采集信息",
        },
        {
          url: "jczpcj",
          name: "机车抓拍采集信息",
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
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  routerLink(url) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
