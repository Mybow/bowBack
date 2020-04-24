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
        console.log('close');
        this.isOpen = false;
    };
    BbComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit ');
    };
    BbComponent.prototype.ngAfterContentInit = function () {
        console.log('ngAfterContentInit ');
    };
    BbComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit ');
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
