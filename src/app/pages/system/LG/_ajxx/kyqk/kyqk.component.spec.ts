import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { kyqk_Component } from './kyqk.component';

describe('kyqk_Component', () => {
  let component: kyqk_Component;
  let fixture: ComponentFixture<kyqk_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ kyqk_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(kyqk_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
