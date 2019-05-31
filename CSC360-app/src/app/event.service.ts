import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

import { Event } from './event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private basePath = 'users/';
  private tripPath = '/trips';
  private eventPath = '/events';

  private tripsRef: AngularFireList<any>;
  private tripRef: AngularFireObject<any>;
  constructor(public db: AngularFireDatabase) {}

  // Fetch all Events.
  getEvents() {
    this.tripsRef = this.db.list(this.basePath);
    return this.tripsRef;
  }

  // Fetch all Events belonging to a user,trip pair .
  getEventsByUserId(userid: string, tripid: string) {
    this.tripsRef = this.db.list(this.basePath + userid + this.tripPath + tripid + this.eventPath);
    return this.tripsRef;
  }

  // Fetch an event by event id
  getEvent(userid: string, tripid: string, eventid: string) {
    this.tripRef = this.db.object(this.basePath + userid + this.tripPath + tripid + this.eventPath + '/' + eventid);
    return this.tripRef;
  }

  // Add a new Event
  addEvent(newEvent: Event): void {
    this.tripsRef.push({
      date: newEvent.date,
      budget: newEvent.budget,
      name: newEvent.name
    });
  }

  // Update an event
  updateEvent(event: Event) {
    this.tripRef.update({
      date: event.date,
      budget: event.budget,
      name: event.name
    });
  }

  // Delete an event
  deleteEvent(userid: string, tripid: string, eventid: string) {
    this.tripRef = this.db.object(this.basePath + userid + this.tripPath + tripid + this.eventPath + '/' + eventid);
    this.tripRef.remove();
  }
}
