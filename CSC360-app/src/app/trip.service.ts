import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Trip} from './trip';
import {TRIPS} from './mock-trips';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  getTrips(): Observable<Trip[]> {
    return of(TRIPS);
  }

  getTrip(tripName: string): Observable<Trip> {
    return of(TRIPS.find(trip => trip.name === tripName));
  }

  addTrip(newTrip: Trip): void {
    TRIPS.push(newTrip);
  }
}
