"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var cyrysjan_Component = /** @class */ (function () {
    function cyrysjan_Component() {
        this.shadowData = {
            one: [
                {
                    name: "场所代码",
                    key: "q"
                },
                {
                    name: "姓名",
                    key: "e"
                },
                {
                    name: "公民身份号码",
                    key: "r"
                },
                {
                    name: "案事件编号",
                    key: "t"
                },
                {
                    name: "案事件发生开始时间",
                    key: "y"
                },
                {
                    name: "案件类别代码",
                    key: "u"
                },
                {
                    name: "简要案情",
                    key: "i"
                },
                {
                    name: "案事件处理结果",
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
                    key: "suoshuquyu",
                    value: "所属区域"
                },
                {
                    key: "changsuodaima",
                    value: "场所代码"
                },
                {
                    key: "changsuomingcheng",
                    value: "场所名称"
                },
                {
                    key: "renyuanxingming",
                    value: "人员姓名"
                },
                {
                    key: "zhengjianleixing",
                    value: "证件类型"
                },
                {
                    key: "zhengjianhaoma",
                    value: "证件号码"
                },
                {
                    key: "ruzhiriqi",
                    value: "入职日期"
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
    cyrysjan_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    cyrysjan_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    cyrysjan_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    cyrysjan_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                suoshuquyu: "芙蓉区",
                changsuodaima: "芙蓉区",
                changsuomingcheng: "大酒店",
                renyuanxingming: "芙蓉广场",
                zhengjianleixing: "正常",
                zhengjianhaoma: "王大陆",
                ruzhiriqi: "wenhao"
            });
        }
    };
    cyrysjan_Component = __decorate([
        core_1.Component({
            selector: "app-cyrysjan",
            templateUrl: "./cyrysjan.component.html",
            styles: []
        })
    ], cyrysjan_Component);
    return cyrysjan_Component;
}());
exports.cyrysjan_Component = cyrysjan_Component;
