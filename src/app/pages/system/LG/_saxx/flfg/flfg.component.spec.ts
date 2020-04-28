import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { flfg_Component } from './flfg.component';

describe('flfg_Component', () => {
  let component: flfg_Component;
  let fixture: ComponentFixture<flfg_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ flfg_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(flfg_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
