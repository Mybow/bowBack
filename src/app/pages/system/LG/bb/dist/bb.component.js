"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var BbComponent = /** @class */ (function () {
    function BbComponent() {
        this.shadowData = {
            top: [
                {
                    name: "娱乐特行场所类型",
                    key: "q"
                },
                {
                    name: "注册地址",
                    key: "w"
                },
                {
                    name: "统一社会信用代码",
                    key: "e"
                },
                {
                    name: "单位名称",
                    key: "r"
                },
                {
                    name: "法定代表人姓名",
                    key: "t"
                },
                {
                    name: "法人证件号",
                    key: "y"
                },
                {
                    name: "法定代表人现居住地",
                    key: "u"
                },
                {
                    name: "法人联系电话",
                    key: "i"
                },
            ],
            middle: [
                {
                    name: "场所名称",
                    key: "i"
                },
                {
                    name: "场所代码",
                    key: "i"
                },
                {
                    name: "场所地址",
                    key: "i"
                },
                {
                    name: "场所行政区域",
                    key: "i"
                },
                {
                    name: "场所联系电话",
                    key: "i"
                },
                {
                    name: "场所开业日期",
                    key: "i"
                },
                {
                    name: "床位数量",
                    key: "i"
                },
                {
                    name: "房屋间数",
                    key: "i"
                },
                {
                    name: "等级代码",
                    key: "i"
                },
                {
                    name: "星级代码",
                    key: "i"
                },
            ],
            buttom: []
        };
        this.inputData = {
            top: {
                q: "1",
                w: "2",
                e: "3",
                r: "4",
                t: "5",
                y: "6",
                u: "3",
                i: "2"
            },
            middle: {
                q: "1",
                w: "2",
                e: "3",
                r: "4",
                t: "5",
                y: "6",
                u: "3",
                i: "2"
            },
            bottom: {
                q: "1",
                w: "2",
                e: "3",
                r: "4",
                t: "5",
                y: "6",
                u: "3",
                i: "2"
            }
        };
        this.queryData = {
            fenju: "",
            paichusuo: "",
            shequ: "",
            mingcheng: "",
            daima: "",
            dizhimingcheng: "",
            jingyingzhuangtai: "",
            fangjianshu: "",
            chuangwei: "",
            xingji: "",
            dengji: "",
            congyerenyuan: ""
        };
        this.tableData = {
            title: [
                {
                    key: "code",
                    value: "序号"
                },
                {
                    key: "daima",
                    value: "场所代码"
                },
                {
                    key: "fenju",
                    value: "分局"
                },
                {
                    key: "paichusuo",
                    value: "派出所"
                },
                {
                    key: "name",
                    value: "场所名称"
                },
                {
                    key: "dizhi",
                    value: "场所地址名称"
                },
                {
                    key: "state",
                    value: "经营状态"
                },
                {
                    key: "Pname",
                    value: "法定代表人姓名"
                },
                {
                    key: "phone",
                    value: "法定代表人电话"
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
    BbComponent.prototype.getNode = function () {
        return document.getElementById("SYS_");
    };
    BbComponent.prototype.openWindow = function (index) {
        this.isOpen = true;
    };
    BbComponent.prototype.closeWindow = function () {
        console.log("close");
        this.isOpen = false;
    };
    BbComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 43; i++) {
            this.tableData.data.push({
                code: 1236,
                fenju: "芙蓉区",
                paichusuo: "芙蓉区",
                name: "大酒店",
                dizhi: "芙蓉广场",
                state: "正常",
                Pname: "王大陆",
                phone: "wenhao"
            });
        }
    };
    BbComponent = __decorate([
        core_1.Component({
            selector: "app-bb",
            templateUrl: "./bb.component.html",
            styles: []
        })
    ], BbComponent);
    return BbComponent;
}());
exports.BbComponent = BbComponent;
