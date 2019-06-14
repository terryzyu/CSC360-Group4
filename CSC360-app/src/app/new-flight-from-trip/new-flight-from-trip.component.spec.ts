import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightFromTripComponent } from './new-flight-from-trip.component';

describe('NewFlightFromTripComponent', () => {
  let component: NewFlightFromTripComponent;
  let fixture: ComponentFixture<NewFlightFromTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFlightFromTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFlightFromTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
