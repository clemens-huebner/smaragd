import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureViewComponent } from './measure-view.component';

describe('MeasureViewComponent', () => {
  let component: MeasureViewComponent;
  let fixture: ComponentFixture<MeasureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
