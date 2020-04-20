import { NgModule } from '@angular/core';//core核心模块
import { AppComponent } from './app.component';//根目录组件
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule
  ],
  bootstrap: [AppComponent] //根目录启动
})
export class AppModule { }
