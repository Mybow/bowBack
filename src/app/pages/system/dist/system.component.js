"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SystemComponent = /** @class */ (function () {
    function SystemComponent(router, route) {
        this.router = router;
        this.route = route;
        this.routerList = [
            {
                name: "基本信息",
                options: [
                    {
                        url: "csxx",
                        name: "场所信息"
                    },
                    {
                        url: "cyryxx",
                        name: "从业人员信息"
                    },
                    {
                        url: "aqffsbxx",
                        name: "安全防范设备信息"
                    },
                ]
            },
            {
                name: "业务信息",
                options: [
                    {
                        url: "lkcx",
                        name: "旅客查询"
                    },
                ]
            },
            {
                name: "涉案信息",
                options: [
                    {
                        url: "csaj",
                        name: "场所案事件信息"
                    },
                    {
                        url: "cyrysjan",
                        name: "从业人员涉及案事件信息"
                    },
                    {
                        url: "jqqk",
                        name: "警情情况"
                    },
                    {
                        url: "flfg",
                        name: "法律法规"
                    },
                ]
            },
            {
                name: "统计分析",
                options: [
                    {
                        url: "bb",
                        name: "报表统计"
                    },
                    {
                        url: "",
                        name: "图表统计"
                    },
                ]
            },
            {
                name: "安检信息",
                options: [
                    {
                        url: "rcjc",
                        name: "日常检查"
                    },
                    {
                        url: "tztg",
                        name: "通知通告"
                    },
                    {
                        url: "kyqk",
                        name: "可疑情况"
                    },
                ]
            },
            {
                name: "其他信息",
                options: [
                    {
                        url: "zncjsb",
                        name: "智能采集设备信息"
                    },
                    {
                        url: "ryzpcj",
                        name: "人员抓拍采集信息"
                    },
                    {
                        url: "rlzpcj",
                        name: "人脸抓拍采集信息"
                    },
                    {
                        url: "jczpcj",
                        name: "机车抓拍采集信息"
                    },
                ]
            },
        ];
    }
    SystemComponent.prototype.ngOnInit = function () { };
    SystemComponent.prototype.routerLink = function (url) {
        this.router.navigate([url], { relativeTo: this.route });
    };
    SystemComponent = __decorate([
        core_1.Component({
            selector: "app-system",
            templateUrl: "./system.component.html",
            styleUrls: ["./system.component.less"]
        })
    ], SystemComponent);
    return SystemComponent;
}());
exports.SystemComponent = SystemComponent;
