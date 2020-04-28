"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ryzpcj_Component = /** @class */ (function () {
    function ryzpcj_Component() {
        this.shadowData = {
            one: [
                {
                    name: "视频设备编码",
                    key: "q"
                },
                {
                    name: "日期时间",
                    key: "r"
                },
                {
                    name: "背包判断标识",
                    key: "r"
                },
                {
                    name: "带帽判断标识",
                    key: "r"
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
                    key: "riqishijian",
                    value: "日期时间"
                },
                {
                    key: "beibaopanduanbiaoshi",
                    value: "背包判断标识"
                },
                {
                    key: "daimaopanduanbiaoshi",
                    value: "带帽判断标识"
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
    ryzpcj_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    ryzpcj_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    ryzpcj_Component.prototype.closeWindow = function () {
        this.isOpen = false;
    };
    ryzpcj_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                shipinshebeibianma: "芙蓉区",
                riqishijian: "芙蓉区",
                daimaopanduanbiaoshi: '123',
                beibaopanduanbiaoshi: '456'
            });
        }
    };
    ryzpcj_Component = __decorate([
        core_1.Component({
            selector: "app-ryzpcj",
            templateUrl: "./ryzpcj.component.html",
            styles: []
        })
    ], ryzpcj_Component);
    return ryzpcj_Component;
}());
exports.ryzpcj_Component = ryzpcj_Component;
