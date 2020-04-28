import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lkcx_Component } from './lkcx.component';

describe('lkcx_Component', () => {
  let component: lkcx_Component;
  let fixture: ComponentFixture<lkcx_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lkcx_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lkcx_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
