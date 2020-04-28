"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var kyqk_Component = /** @class */ (function () {
    function kyqk_Component() {
        this.shadowData = {
            one: [
                {
                    name: "场所代码",
                    key: "q"
                },
                {
                    name: "登记人姓名",
                    key: "t"
                },
                {
                    name: "可疑情况登记序号",
                    key: "w"
                },
                {
                    name: "可疑情况类别代码",
                    key: "e"
                },
                {
                    name: "可疑情况简要描述",
                    key: "r"
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
                    key: "dengjirenxingming",
                    value: "登记人姓名"
                },
                {
                    key: "keyiqingkuangdengjixuhao",
                    value: "可疑情况登记序号"
                },
                {
                    key: "keyiqingkuangleibiedaima",
                    value: "可疑情况类别代码"
                },
                {
                    key: "keyiqingkuangjianyaomiaoshu",
                    value: "可疑情况简要描述"
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
    kyqk_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    kyqk_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    kyqk_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    kyqk_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                changsuodaima: "芙蓉区",
                dengjirenxingming: "芙蓉区",
                keyiqingkuangdengjixuhao: "大酒店",
                keyiqingkuangleibiedaima: "芙蓉广场",
                keyiqingkuangjianyaomiaoshu: "正常"
            });
        }
    };
    kyqk_Component = __decorate([
        core_1.Component({
            selector: "app-kyqk",
            templateUrl: "./kyqk.component.html",
            styles: []
        })
    ], kyqk_Component);
    return kyqk_Component;
}());
exports.kyqk_Component = kyqk_Component;
