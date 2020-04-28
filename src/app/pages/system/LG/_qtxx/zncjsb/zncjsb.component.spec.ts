import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { zncjsb_Component } from './zncjsb.component';

describe('zncjsb_Component', () => {
  let component: zncjsb_Component;
  let fixture: ComponentFixture<zncjsb_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ zncjsb_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(zncjsb_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
