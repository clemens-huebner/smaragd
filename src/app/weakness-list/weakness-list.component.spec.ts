import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaknessListComponent } from './weakness-list.component';

describe('WeaknessListComponent', () => {
  let component: WeaknessListComponent;
  let fixture: ComponentFixture<WeaknessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaknessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaknessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
