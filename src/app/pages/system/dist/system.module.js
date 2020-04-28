"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var system_routing_module_1 = require("./system-routing.module");
var system_component_1 = require("./system.component");
var shared_module_1 = require("src/app/shared/shared.module");
var shell_component_1 = require("../../fragment/shell/shell.component");
var shadow_component_1 = require("../../fragment/shadow/shadow.component");
/* 功能模块 */
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
var SystemModule = /** @class */ (function () {
    function SystemModule() {
    }
    SystemModule = __decorate([
        core_1.NgModule({
            declarations: [
                system_component_1.SystemComponent,
                shell_component_1.ShellComponent,
                shadow_component_1.ShadowComponent,
                // 基本信息栏
                csxx_component_1.csxx_component,
                cyryxx_component_1.cyryxx_Component,
                aqffsbxx_component_1.aqffsbxx_Component,
                // 涉案信息栏
                jqqk_component_1.jqqk_Component,
                flfg_component_1.flfg_Component,
                cyrysjan_component_1.cyrysjan_Component,
                csaj_component_1.csaj_Component,
                // 业务信息
                lkcx_component_1.lkcx_Component,
                // 案件信息
                kyqk_component_1.kyqk_Component,
                rcjc_component_1.rcjc_Component,
                tztg_component_1.tztg_Component,
                jczpcj_component_1.jczpcj_Component,
                rlzpcj_component_1.rlzpcj_Component,
                ryzpcj_component_1.ryzpcj_Component,
                zncjsb_component_1.zncjsb_Component,
            ],
            imports: [
                shared_module_1.SharedModule,
                system_routing_module_1.SystemRoutingModule,
            ]
        })
    ], SystemModule);
    return SystemModule;
}());
exports.SystemModule = SystemModule;
