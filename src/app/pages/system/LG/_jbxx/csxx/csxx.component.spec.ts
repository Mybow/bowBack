import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { csxx_component } from './csxx.component';

describe('csxx_component', () => {
  let component: csxx_component;
  let fixture: ComponentFixture<csxx_component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ csxx_component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(csxx_component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
