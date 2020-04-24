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
                        url: "11",
                        name: "场所信息"
                    },
                    {
                        url: "22",
                        name: "从业人员信息"
                    },
                ]
            },
            {
                name: "业务信息",
                options: [
                    {
                        url: "33",
                        name: "国内旅客"
                    },
                    {
                        url: "44",
                        name: "境外旅客"
                    },
                ]
            },
            {
                name: "涉案信息",
                options: [
                    {
                        url: "",
                        name: "场所案事件信息"
                    },
                    {
                        url: "",
                        name: "从业人员涉及案事件信息"
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
                ]
            },
            {
                name: "安检信息"
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
            styles: []
        })
    ], SystemComponent);
    return SystemComponent;
}());
exports.SystemComponent = SystemComponent;
