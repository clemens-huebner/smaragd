import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseChipsComponent } from './phase-chips.component';

describe('PhaseChipsComponent', () => {
  let component: PhaseChipsComponent;
  let fixture: ComponentFixture<PhaseChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
