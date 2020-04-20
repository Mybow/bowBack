import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup; // FormGroup 跟踪一组 FormControl 实例的值和有效性状态。

  /**Router 全局路由
   * ActivatedRoute 激活当前路由 当前路由状态信息,传递参数
   */
  constructor(private fb: FormBuilder,
    private router: Router, private routers: ActivatedRoute) { }

  // 表单提交
  submitForm(): void {
    /**
     * 整合表单子控件 循环进行脏检验
     * controls代表一组子控件 [i]循环每一组子控件
     */
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();// 
      this.validateForm.controls[i].updateValueAndValidity();// 重新计算控件值和校检状态
    }
  }

  ngOnInit() {
    // 构建新FromGroup实例  规定子控件的验证选项
    this.validateForm = this.fb.group({
      /**null 默认控件内容为null
       * required 规定控件非空
       * Validators 表单控件内置验证器
       */
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    })
  }

}
