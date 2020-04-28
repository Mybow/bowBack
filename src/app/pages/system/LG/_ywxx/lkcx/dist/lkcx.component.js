"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var lkcx_Component = /** @class */ (function () {
    function lkcx_Component() {
        this.shadowData = {
            one: [
                {
                    name: "场所代码",
                    key: "q"
                },
                {
                    name: "场所名称",
                    key: "w"
                },
                {
                    name: "访客编号",
                    key: "e"
                },
                {
                    name: "常用证件代码",
                    key: "i"
                },
                {
                    name: "证件号码",
                    key: "i"
                },
                {
                    name: "姓名",
                    key: "i"
                },
                {
                    name: "联系电话",
                    key: "i"
                },
                {
                    name: "到访时间",
                    key: "i"
                },
                {
                    name: "离店时间",
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
        this.InOutData = {
            "in": [
                {
                    name: "场所代码",
                    key: "i"
                },
                {
                    name: "业务流水号码",
                    key: "i"
                },
                {
                    name: "旅客代码",
                    key: "i"
                },
                {
                    name: "旅客",
                    key: "i"
                },
                {
                    name: "常用证件代码",
                    key: "i"
                },
                {
                    name: "证件号码",
                    key: "i"
                },
                {
                    name: "姓名",
                    key: "i"
                },
                {
                    name: "房间号码",
                    key: "i"
                },
                {
                    name: "到店日期",
                    key: "i"
                },
                {
                    name: "离店日期",
                    key: "i"
                },
            ],
            out: [
                {
                    name: "场所代码",
                    key: "i"
                },
                {
                    name: "业务流水号码",
                    key: "i"
                },
                {
                    name: "境外旅客旅游代码",
                    key: "i"
                },
                {
                    name: "签发机关",
                    key: "i"
                },
                {
                    name: "入境日期",
                    key: "i"
                },
                {
                    name: "入境停留时间",
                    key: "i"
                },
                {
                    name: "入境口岸代码",
                    key: "i"
                },
                {
                    name: "外文姓名",
                    key: "i"
                },
                {
                    name: "姓名",
                    key: "i"
                },
                {
                    name: "外文姓",
                    key: "i"
                },
                {
                    name: "外文名",
                    key: "i"
                },
                {
                    name: "性别代码",
                    key: "i"
                },
                {
                    name: "签证种类(居留许可)代码",
                    key: "i"
                },
                {
                    name: "签证(居留许可)号码",
                    key: "i"
                },
                {
                    name: "国籍代码",
                    key: "i"
                },
                {
                    name: "接收单位名称",
                    key: "i"
                },
                {
                    name: "目的地名称",
                    key: "i"
                },
                {
                    name: "房间号码",
                    key: "i"
                },
                {
                    name: "到店日期",
                    key: "i"
                },
                {
                    name: "离店日期",
                    key: "i"
                },
            ]
        };
        this.tableData = {
            title: [
                {
                    key: "fangjianhaoma",
                    value: "房间号码"
                },
                {
                    key: "lvkexingming",
                    value: "旅客姓名"
                },
                {
                    key: "xingbie",
                    value: "性别"
                },
                {
                    key: "zhengjianhaoma",
                    value: "证件号码"
                },
                {
                    key: "daodianriqi",
                    value: "到店日期"
                },
                {
                    key: "lidianriqi",
                    value: "离店日期"
                },
                {
                    key: "yewuliushuihaoma",
                    value: "业务流水号码"
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
    lkcx_Component.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    lkcx_Component.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    lkcx_Component.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    lkcx_Component.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                fangjianhaoma: "芙蓉区",
                lvkexingming: "芙蓉区",
                xingbie: "大酒店",
                zhengjianhaoma: "芙蓉广场",
                daodianriqi: "正常",
                lidianriqi: "王大陆",
                yewuliushuihaoma: "wenhao"
            });
        }
    };
    lkcx_Component = __decorate([
        core_1.Component({
            selector: "app-lkcx",
            templateUrl: "./lkcx.component.html",
            styles: []
        })
    ], lkcx_Component);
    return lkcx_Component;
}());
exports.lkcx_Component = lkcx_Component;
