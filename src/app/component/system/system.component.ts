import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-system",
  templateUrl: "./system.component.html",
  styles: [],
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
      ],
    },
    {
      name: "业务信息",
      options: [
        {
          url: "33",
          name: "国内旅客",
        },
        {
          url: "44",
          name: "境外旅客",
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
      ],
    },
    {
      name: "统计分析",
      options: [
        {
          url: "bb",
          name: "报表统计",
        },
      ],
    },
    {
      name: "安检信息",
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  routerLink(url) {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
