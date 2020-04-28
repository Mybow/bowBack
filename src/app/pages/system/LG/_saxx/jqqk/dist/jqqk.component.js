"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var jqqk_Component = /** @class */ (function () {
    function jqqk_Component() {
        this.shadowData = {
            one: [
                {
                    name: "场所代码",
                    key: "q"
                },
                {
                    name: "警情情况登记序号",
                    key: "w"
                },
                {
                    name: "警情类别代码",
                    key: "e"
                },
                {
                    name: "警情情况简要情况",
                    key: "r"
                },
                {
                    name: "报警人姓名",
                    key: "t"
                },
                {
                    name: "报警时间",
                    key: "y"
                },
                {
                    name: "接警时间",
                    key: "u"
                },
                {
                    name: "处警人姓名",
                    key: "i"
                },
                {
                    name: "警情处理结果代码",
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
    jqqk_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    jqqk_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    jqqk_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    jqqk_Component.prototype.ngOnInit = function () {
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
    jqqk_Component = __decorate([
        core_1.Component({
            selector: "app-jqqk",
            templateUrl: "./jqqk.component.html",
            styles: []
        })
    ], jqqk_Component);
    return jqqk_Component;
}());
exports.jqqk_Component = jqqk_Component;
