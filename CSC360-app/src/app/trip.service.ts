import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Trip} from './trip';
import {TRIPS} from './mock-trips';

import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private basePath = '/trips';

  private tripsRef: AngularFireList<any>;
  private tripRef: AngularFireObject<any>;
  constructor(public db: AngularFireDatabase) {}

  // Fetch all trips.
  getTrips() {
    this.tripsRef = this.db.list(this.basePath);
    return this.tripsRef;
  }

  // Fetch trip by username
  getTrip(user: string) {
    this.tripRef = this.db.object(this.basePath + '/' + user);
    return this.tripRef;
  }

  addTrip(newTrip: Trip): void {
    this.tripsRef.push({
      name: newTrip.name,
      location: newTrip.location,
      startDate: newTrip.startDate,
      endDate: newTrip.endDate,
      budget: newTrip.budget,
      user: newTrip.user
    });
  }

  // Update a trip
  updateTrip(trip: Trip) {
    this.tripRef.update({
      name: trip.name,
      location: trip.location,
      startDate: trip.startDate,
      endDate: trip.endDate,
      budget: trip.budget,
      user: trip.user
      });
  }

  // Delete a trip
  deleteTrip(user: string){
    this.tripRef = this.db.object(this.basePath + '/' + user);
    this.tripRef.remove();
  }
}
