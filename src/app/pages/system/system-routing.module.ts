import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SystemComponent } from "./system.component";

// template
import {BbComponent} from './LG/_tjfx/bb/bb.component'
const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children:[
      {
        path:'bb',
        component:BbComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
