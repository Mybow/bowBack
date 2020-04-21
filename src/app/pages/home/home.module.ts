import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SystemComponent} from '../../component/system/system.component';
import { BbComponent } from '../../component/system/bb/bb.component'

@NgModule({
  declarations: [HomeComponent,SystemComponent, BbComponent],
  imports: [
    SharedModule, // 路由模板
    HomeRoutingModule // home路由
  ]
})
export class HomeModule { }
