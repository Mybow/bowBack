/**
 * 抽取根目录app.module依赖第三方模块 core 
**/
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from '../pages/pages.module';
import { AppRoutingModule } from '../app-routing.module';

import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,//http服务模块
    SharedModule, // 全局共享模板
    PagesModule, // 页面组件模板
    AppRoutingModule // 根路由模块
  ],
  exports:[
    SharedModule, // 全局共享模板 
    AppRoutingModule // 路由模板
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }], //依赖注入ng-zorro国际化
})
export class CoreModule { 
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能被appModule引入');
    }
  }
}
