"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rcjc_Component = /** @class */ (function () {
    function rcjc_Component() {
        this.shadowData = {
            one: [
                {
                    name: "场所代码",
                    key: "q"
                },
                {
                    name: "检查类型编码",
                    key: "w"
                },
                {
                    name: "日常检查登记序号",
                    key: "e"
                },
                {
                    name: "检查人姓名",
                    key: "r"
                },
                {
                    name: "检查人警号",
                    key: "t"
                },
                {
                    name: "公安机关机构代码",
                    key: "t"
                },
                {
                    name: "检查日期",
                    key: "t"
                },
                {
                    name: "场所检查简要情况",
                    key: "t"
                },
                {
                    name: "检查结果简要情况",
                    key: "t"
                },
                {
                    name: "场所负责人姓名",
                    key: "t"
                }
            ]
        };
        this.inputData = {
            q: "1",
            w: "2",
            e: "3",
            r: "4",
            t: "5",
            y: "6",
            u: "3",
            i: "2"
        };
        this.tableData = {
            title: [
                {
                    key: "changsuodaima",
                    value: "场所代码"
                },
                {
                    key: "jianchaleixingbianma",
                    value: "检查类型编码"
                },
                {
                    key: "jianchariqi",
                    value: "检查日期"
                },
                {
                    key: "jiancharenxingming",
                    value: "检查人姓名"
                },
                {
                    key: "jiancharenjinghao",
                    value: "检查人警号"
                },
            ],
            data: []
        };
        this.pagination = {
            total: 10,
            number: 10
        };
        this.BoxStyle = {
            height: "90%",
            top: "5%"
        };
        this.isOpen = false;
    }
    rcjc_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    rcjc_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    rcjc_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    rcjc_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                changsuodaima: "芙蓉区",
                jianchaleixingbianma: "芙蓉区",
                jianchariqi: "大酒店",
                jiancharenxingming: "芙蓉广场",
                jiancharenjinghao: "正常"
            });
        }
    };
    rcjc_Component = __decorate([
        core_1.Component({
            selector: "app-rcjc",
            templateUrl: "./rcjc.component.html",
            styles: []
        })
    ], rcjc_Component);
    return rcjc_Component;
}());
exports.rcjc_Component = rcjc_Component;
