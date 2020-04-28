"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var tztg_Component = /** @class */ (function () {
    function tztg_Component() {
        this.shadowData = {
            one: [
                {
                    name: "通知通告代码",
                    key: "q"
                },
                {
                    name: "电子文件名称",
                    key: "w"
                },
                {
                    name: "电子文件摘要",
                    key: "e"
                },
                {
                    name: "发布单位名称",
                    key: "r"
                },
                {
                    name: "发布范围描述",
                    key: "t"
                },
                {
                    name: "紧急程度代码",
                    key: "y"
                },
                {
                    name: "发布日期",
                    key: "u"
                },
                {
                    name: "发布人姓名",
                    key: "i"
                },
                {
                    name: "登记人姓名",
                    key: "i"
                },
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
                    key: "tongzhitonggaodaima",
                    value: "通知通告代码"
                },
                {
                    key: "dianziwenjianmingcheng",
                    value: "电子文件名称"
                },
                {
                    key: "fabudanweimingcheng",
                    value: "发布单位名称"
                },
                {
                    key: "faburiqi",
                    value: "发布日期"
                }
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
    tztg_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    tztg_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    tztg_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    tztg_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                tongzhitonggaodaima: "芙蓉区",
                dianziwenjianmingcheng: "芙蓉区",
                fabudanweimingcheng: "大酒店",
                faburiqi: "芙蓉广场"
            });
        }
    };
    tztg_Component = __decorate([
        core_1.Component({
            selector: "app-tztg",
            templateUrl: "./tztg.component.html",
            styles: []
        })
    ], tztg_Component);
    return tztg_Component;
}());
exports.tztg_Component = tztg_Component;
