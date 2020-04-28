import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { jqqk_Component } from './jqqk.component';

describe('jqqk_Component', () => {
  let component: jqqk_Component;
  let fixture: ComponentFixture<jqqk_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ jqqk_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(jqqk_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
