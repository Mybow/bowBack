import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { csaj_Component } from './csaj.component';

describe('csaj_Component', () => {
  let component: csaj_Component;
  let fixture: ComponentFixture<csaj_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ csaj_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(csaj_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
