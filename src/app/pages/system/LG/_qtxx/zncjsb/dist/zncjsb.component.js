"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var zncjsb_Component = /** @class */ (function () {
    function zncjsb_Component() {
        this.shadowData = {
            one: [
                {
                    name: "视频设备编码",
                    key: "q"
                },
                {
                    name: "设备名称",
                    key: "w"
                },
                {
                    name: "品牌型号",
                    key: "e"
                },
                {
                    name: "IP 地址",
                    key: "r"
                },
                {
                    name: "网络端口号",
                    key: "t"
                },
                {
                    name: "地球经度",
                    key: "y"
                },
                {
                    name: "地球纬度",
                    key: "u"
                },
                {
                    name: "行政区划代码",
                    key: "i"
                },
                {
                    name: "视频设备工作状态",
                    key: "i"
                },
                {
                    name: "场所代码",
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
                    key: "shipinshebeibianma",
                    value: "视频设备编码"
                },
                {
                    key: "shebeimingcheng",
                    value: "设备名称"
                },
                {
                    key: "pinpaixinghao",
                    value: "品牌型号"
                },
                {
                    key: "changsuodaima",
                    value: "场所代码"
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
    zncjsb_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    zncjsb_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    zncjsb_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    zncjsb_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                shipinshebeibianma: "芙蓉区",
                shebeimingcheng: "芙蓉区",
                pinpaixinghao: "大酒店",
                changsuodaima: "芙蓉广场"
            });
        }
    };
    zncjsb_Component = __decorate([
        core_1.Component({
            selector: "app-zncjsb",
            templateUrl: "./zncjsb.component.html",
            styles: []
        })
    ], zncjsb_Component);
    return zncjsb_Component;
}());
exports.zncjsb_Component = zncjsb_Component;
