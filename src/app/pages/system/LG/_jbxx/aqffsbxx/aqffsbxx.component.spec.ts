import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { aqffsbxx_Component } from './aqffsbxx.component';

describe('aqffsbxx_Component', () => {
  let component: aqffsbxx_Component;
  let fixture: ComponentFixture<aqffsbxx_Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ aqffsbxx_Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(aqffsbxx_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
