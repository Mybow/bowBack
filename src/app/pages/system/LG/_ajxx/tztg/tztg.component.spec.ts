import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tztg_Component } from './tztg.component';

describe('tztg_Component', () => {
  let component: tztg_Component;
  let fixture: ComponentFixture<tztg_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tztg_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tztg_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
