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
var bb_component_1 = require("./LG/_tjfx/bb/bb.component");
var shell_component_1 = require("../../fragment/shell/shell.component");
var SystemModule = /** @class */ (function () {
    function SystemModule() {
    }
    SystemModule = __decorate([
        core_1.NgModule({
            declarations: [system_component_1.SystemComponent, bb_component_1.BbComponent, shell_component_1.ShellComponent],
            imports: [
                shared_module_1.SharedModule,
                system_routing_module_1.SystemRoutingModule,
            ]
        })
    ], SystemModule);
    return SystemModule;
}());
exports.SystemModule = SystemModule;
