import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ryzpcj_Component } from './ryzpcj.component';

describe('ryzpcj_Component', () => {
  let component: ryzpcj_Component;
  let fixture: ComponentFixture<ryzpcj_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ryzpcj_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ryzpcj_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
