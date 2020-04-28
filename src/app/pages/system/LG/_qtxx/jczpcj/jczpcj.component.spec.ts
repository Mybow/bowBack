import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { jczpcj_Component } from './jczpcj.component';

describe('jczpcj_Component', () => {
  let component: jczpcj_Component;
  let fixture: ComponentFixture<jczpcj_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ jczpcj_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(jczpcj_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
