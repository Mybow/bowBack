"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var aqffsbxx_Component = /** @class */ (function () {
    function aqffsbxx_Component() {
        this.shadowData = {
            one: [
                {
                    name: "场所代码",
                    key: "q"
                },
                {
                    name: "安全防范设备类型代码",
                    key: "w"
                },
                {
                    name: "安全防范设备",
                    key: "e"
                },
                {
                    name: "设备序号",
                    key: "r"
                },
                {
                    name: "设备名称",
                    key: "t"
                },
                {
                    name: "厂商名称",
                    key: "y"
                },
                {
                    name: "品牌型号",
                    key: "u"
                },
                {
                    name: "检测机构名称",
                    key: "i"
                },
                {
                    name: "安全防范设备数量",
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
                    key: "shebeileixing",
                    value: "设备类型"
                },
                {
                    key: "shebeixuhao",
                    value: "设备序号"
                },
                {
                    key: "shebeimingcheng",
                    value: "设备名称"
                },
                {
                    key: "pinpaixinghao",
                    value: "品牌型号"
                }, {
                    key: "jianchajigoumingcheng",
                    value: "检查机构名称"
                }, {
                    key: "shebeishuliang",
                    value: "设备数量"
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
    aqffsbxx_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    aqffsbxx_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    aqffsbxx_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    aqffsbxx_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                suoshuquyu: "芙蓉区",
                changsuodaima: "芙蓉区",
                changsuomingcheng: "大酒店",
                shebeileixing: "芙蓉广场",
                shebeixuhao: "正常",
                shebeimingcheng: "王大陆",
                changshangmingcheng: "wenhao",
                pinpaixinghao: "wenhao",
                jianchajigoumingcheng: "wenhao",
                shebeishuliang: "wenhao"
            });
        }
    };
    aqffsbxx_Component = __decorate([
        core_1.Component({
            selector: "app-aqffsbxx",
            templateUrl: "./aqffsbxx.component.html",
            styles: []
        })
    ], aqffsbxx_Component);
    return aqffsbxx_Component;
}());
exports.aqffsbxx_Component = aqffsbxx_Component;
