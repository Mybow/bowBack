import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SystemComponent} from '../../component/system/system.component'
import { BbComponent} from '../../component/system/bb/bb.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path:'system',
        component:SystemComponent,
        children:[
          {
            path:'bb',
            component:BbComponent
          }
        ]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
