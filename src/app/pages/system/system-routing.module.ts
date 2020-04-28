import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SystemComponent } from "./system.component";

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

const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children: [
      {
        path: "csxx",
        component: csxx_component,
      },
      {
        path: "cyryxx",
        component: cyryxx_Component,
      },
      {
        path: "aqffsbxx",
        component: aqffsbxx_Component,
      },
      {
        path: "jqqk",
        component: jqqk_Component,
      },
      {
        path: "flfg",
        component: flfg_Component,
      },
      {
        path: "cyrysjan",
        component: cyrysjan_Component,
      },
      {
        path: "csaj",
        component: csaj_Component,
      },
      {
        path: "lkcx",
        component: lkcx_Component,
      },
      {
        path: "rcjc",
        component: rcjc_Component,
      },
      {
        path: "tztg",
        component: tztg_Component,
      },
      {
        path: "kyqk",
        component: kyqk_Component,
      },
      {
        path: "jczpcj",
        component: jczpcj_Component,
      },
      {
        path: "rlzpcj",
        component: rlzpcj_Component,
      },
      {
        path: "ryzpcj",
        component: ryzpcj_Component,
      },
      {
        path: "zncjsb",
        component: zncjsb_Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
