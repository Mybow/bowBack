/**
 * 抽取全局共享模块 
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../icons-provider.module';
import { NgxEchartsModule } from 'ngx-echarts';
/**模块是由 @NgModule 装饰器提供的元数据的类 
 * 模块与模块之间可以相互调用  import调用  调用export暴露的接口
 * 包括组件 指令 管道 
 * 公开类便于其它组件调用
*/
@NgModule({
  declarations: [],
  imports: [
    CommonModule, // 导入common核心的CommonModule模块,该模块包含一系列ng指令
    FormsModule, // form提交模板
    NgZorroAntdModule, // ng-zorro框架模板
    IconsProviderModule, // Icon资源模板
    NgxEchartsModule, // Echarts图表插件模板
    ReactiveFormsModule // 响应式form表单模板
  ],
  exports:[
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    IconsProviderModule,
    NgxEchartsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
