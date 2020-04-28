import { NgModule } from "@angular/core";

import { SystemRoutingModule } from "./system-routing.module";
import { SystemComponent } from "./system.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ShellComponent } from "../../fragment/shell/shell.component";
import { ShadowComponent } from "../../fragment/shadow/shadow.component";

/* 功能模块 */
// 基本信息栏
import { csxx_component } from "./LG/_jbxx/csxx/csxx.component";
import { cyryxx_Component } from "./LG/_jbxx/cyryxx/cyryxx.component";
import { aqffsbxx_Component } from "./LG/_jbxx/aqffsbxx/aqffsbxx.component";
// 涉案信息栏
import { jqqk_Component } from "./LG/_saxx/jqqk/jqqk.component";
import { flfg_Component } from "./LG/_saxx/flfg/flfg.component";
import { cyrysjan_Component } from "./LG/_saxx/cyrysjan/cyrysjan.component";
import { csaj_Component } from "./LG/_saxx/csaj/csaj.component";
// 业务信息
import { lkcx_Component } from "./LG/_ywxx/lkcx/lkcx.component";
// 案件信息
import { kyqk_Component } from "./LG/_ajxx/kyqk/kyqk.component";
import { rcjc_Component } from "./LG/_ajxx/rcjc/rcjc.component";
import { tztg_Component } from "./LG/_ajxx/tztg/tztg.component";
// 其他
import { jczpcj_Component } from "./LG/_qtxx/jczpcj/jczpcj.component";
import { rlzpcj_Component } from "./LG/_qtxx/rlzpcj/rlzpcj.component";
import { ryzpcj_Component } from "./LG/_qtxx/ryzpcj/ryzpcj.component";
import { zncjsb_Component } from "./LG/_qtxx/zncjsb/zncjsb.component";
@NgModule({
  declarations: [
    SystemComponent,
    ShellComponent,
    ShadowComponent,
    // 基本信息栏
    csxx_component,
    cyryxx_Component,
    aqffsbxx_Component,
    // 涉案信息栏
    jqqk_Component,
    flfg_Component,
    cyrysjan_Component,
    csaj_Component,
    // 业务信息
    lkcx_Component,
    // 案件信息
    kyqk_Component,
    rcjc_Component,
    tztg_Component,
    jczpcj_Component,
    rlzpcj_Component,
    ryzpcj_Component,
    zncjsb_Component,
  ],
  imports: [
    SharedModule, // 全局共享模块
    SystemRoutingModule,
  ],
})
export class SystemModule {}
