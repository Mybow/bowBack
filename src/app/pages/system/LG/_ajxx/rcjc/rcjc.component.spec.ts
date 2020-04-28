import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rcjc_Component } from './rcjc.component';

describe('rcjc_Component', () => {
  let component: rcjc_Component;
  let fixture: ComponentFixture<rcjc_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rcjc_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rcjc_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
