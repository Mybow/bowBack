"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var jczpcj_Component = /** @class */ (function () {
    function jczpcj_Component() {
        this.shadowData = {
            one: [
                {
                    name: "视频设备编码",
                    key: "q"
                },
                {
                    name: "日期时间",
                    key: "w"
                },
                {
                    name: "机动车号牌号码",
                    key: "e"
                },
                {
                    name: "机动车号牌颜色代码",
                    key: "r"
                },
                {
                    name: "机动车车身颜色代码",
                    key: "t"
                },
                {
                    name: "机动车号牌种类代码",
                    key: "y"
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
                    key: "jidongchehaopaihaoma",
                    value: "机动车号牌号码"
                },
                {
                    key: "jidongchehaopaiyansedaima",
                    value: "机动车号牌颜色代码"
                },
                {
                    key: "jidongchehaopaizhongleidaima",
                    value: "机动车号牌种类代码"
                },
                {
                    key: "jidongchecheshenyansedaima",
                    value: "机动车号牌车身颜色代码"
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
    jczpcj_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    jczpcj_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    jczpcj_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    jczpcj_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                shipinshebeibianma: "芙蓉区",
                riqishijian: "芙蓉区",
                jidongchehaopaihaoma: "大酒店",
                jidongchehaopaiyansedaima: "芙蓉广场",
                jidongchehaopaizhongleidaima: "正常",
                jidongchecheshenyansedaima: "王大陆"
            });
        }
    };
    jczpcj_Component = __decorate([
        core_1.Component({
            selector: "app-jczpcj",
            templateUrl: "./jczpcj.component.html",
            styles: []
        })
    ], jczpcj_Component);
    return jczpcj_Component;
}());
exports.jczpcj_Component = jczpcj_Component;
