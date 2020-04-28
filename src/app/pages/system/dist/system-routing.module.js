"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var system_component_1 = require("./system.component");
// 基本信息栏
var csxx_component_1 = require("./LG/_jbxx/csxx/csxx.component");
var cyryxx_component_1 = require("./LG/_jbxx/cyryxx/cyryxx.component");
var aqffsbxx_component_1 = require("./LG/_jbxx/aqffsbxx/aqffsbxx.component");
// 涉案信息栏
var jqqk_component_1 = require("./LG/_saxx/jqqk/jqqk.component");
var flfg_component_1 = require("./LG/_saxx/flfg/flfg.component");
var cyrysjan_component_1 = require("./LG/_saxx/cyrysjan/cyrysjan.component");
var csaj_component_1 = require("./LG/_saxx/csaj/csaj.component");
// 业务信息
var lkcx_component_1 = require("./LG/_ywxx/lkcx/lkcx.component");
// 案件信息
var kyqk_component_1 = require("./LG/_ajxx/kyqk/kyqk.component");
var rcjc_component_1 = require("./LG/_ajxx/rcjc/rcjc.component");
var tztg_component_1 = require("./LG/_ajxx/tztg/tztg.component");
// 其他
var jczpcj_component_1 = require("./LG/_qtxx/jczpcj/jczpcj.component");
var rlzpcj_component_1 = require("./LG/_qtxx/rlzpcj/rlzpcj.component");
var ryzpcj_component_1 = require("./LG/_qtxx/ryzpcj/ryzpcj.component");
var zncjsb_component_1 = require("./LG/_qtxx/zncjsb/zncjsb.component");
var routes = [
    {
        path: "",
        component: system_component_1.SystemComponent,
        children: [
            {
                path: "csxx",
                component: csxx_component_1.csxx_component
            },
            {
                path: "cyryxx",
                component: cyryxx_component_1.cyryxx_Component
            },
            {
                path: "aqffsbxx",
                component: aqffsbxx_component_1.aqffsbxx_Component
            },
            {
                path: "jqqk",
                component: jqqk_component_1.jqqk_Component
            },
            {
                path: "flfg",
                component: flfg_component_1.flfg_Component
            },
            {
                path: "cyrysjan",
                component: cyrysjan_component_1.cyrysjan_Component
            },
            {
                path: "csaj",
                component: csaj_component_1.csaj_Component
            },
            {
                path: "lkcx",
                component: lkcx_component_1.lkcx_Component
            },
            {
                path: "rcjc",
                component: rcjc_component_1.rcjc_Component
            },
            {
                path: "tztg",
                component: tztg_component_1.tztg_Component
            },
            {
                path: "kyqk",
                component: kyqk_component_1.kyqk_Component
            },
            {
                path: "jczpcj",
                component: jczpcj_component_1.jczpcj_Component
            },
            {
                path: "rlzpcj",
                component: rlzpcj_component_1.rlzpcj_Component
            },
            {
                path: "ryzpcj",
                component: ryzpcj_component_1.ryzpcj_Component
            },
            {
                path: "zncjsb",
                component: zncjsb_component_1.zncjsb_Component
            },
        ]
    },
];
var SystemRoutingModule = /** @class */ (function () {
    function SystemRoutingModule() {
    }
    SystemRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], SystemRoutingModule);
    return SystemRoutingModule;
}());
exports.SystemRoutingModule = SystemRoutingModule;
