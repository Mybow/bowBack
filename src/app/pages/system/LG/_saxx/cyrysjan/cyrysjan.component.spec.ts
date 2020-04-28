import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cyrysjan_Component } from './cyrysjan.component';

describe('cyrysjan_Component', () => {
  let component: cyrysjan_Component;
  let fixture: ComponentFixture<cyrysjan_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cyrysjan_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cyrysjan_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
