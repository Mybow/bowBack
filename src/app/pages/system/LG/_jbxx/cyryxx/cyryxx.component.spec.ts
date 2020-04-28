import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyryxxComponent } from './cyryxx.component';

describe('CyryxxComponent', () => {
  let component: CyryxxComponent;
  let fixture: ComponentFixture<CyryxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyryxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyryxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
