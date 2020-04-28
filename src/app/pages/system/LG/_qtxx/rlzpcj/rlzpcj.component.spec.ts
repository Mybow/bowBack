import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rlzpcj_Component } from './rlzpcj.component';

describe('rlzpcj_Component', () => {
  let component: rlzpcj_Component;
  let fixture: ComponentFixture<rlzpcj_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rlzpcj_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rlzpcj_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
