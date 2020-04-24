import { NgModule } from "@angular/core";

import { SystemRoutingModule } from "./system-routing.module";
import { SystemComponent } from "./system.component";
import { SharedModule } from "src/app/shared/shared.module";
import { BbComponent } from "./LG/bb/bb.component";
import { ShellComponent } from "../../fragment/shell/shell.component";
@NgModule({
  declarations: [SystemComponent, BbComponent, ShellComponent],
  imports: [
    SharedModule, // 全局共享模块
    SystemRoutingModule,
  ],
})
export class SystemModule {}
