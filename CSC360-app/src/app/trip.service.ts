import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Trip} from './trip';

import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private basePath = 'users/';
  private tripPath = '/trips';

  private tripsRef: AngularFireList<any>;
  private tripRef: AngularFireObject<any>;
  constructor(public db: AngularFireDatabase) {}

  // Fetch all trips.
  getTrips() {
    this.tripsRef = this.db.list(this.basePath);
    return this.tripsRef;
  }

  // Fetch all trips by user id.
  getTripsByUserId(userid: string) {
    this.tripsRef = this.db.list(this.basePath + userid + this.tripPath );
    return this.tripsRef;
  }

  // Fetch trip by username
  getTrip(userid: string, tripid: string) {
    this.tripRef = this.db.object(this.basePath + userid + this.tripPath + '/' + tripid);
    return this.tripRef;
  }

  addTrip(newTrip: Trip): void {
    this.tripsRef.push({
      name: newTrip.name,
      location: newTrip.location,
      startDate: newTrip.startDate,
      endDate: newTrip.endDate,
      budget: newTrip.budget,
      events: newTrip.events
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
      });
  }

  // Delete a trip
  deleteTrip(userid: string, tripid: string) {
    this.tripRef = this.db.object(this.basePath + userid + this.tripPath + '/' + tripid);
    this.tripRef.remove();
  }
}
