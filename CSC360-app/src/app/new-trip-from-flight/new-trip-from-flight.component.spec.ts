import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTripFromFlightComponent } from './new-trip-from-flight.component';

describe('NewTripFromFlightComponent', () => {
  let component: NewTripFromFlightComponent;
  let fixture: ComponentFixture<NewTripFromFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTripFromFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTripFromFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
