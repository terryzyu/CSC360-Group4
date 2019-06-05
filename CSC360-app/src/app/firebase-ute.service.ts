import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

import {User} from './user';
import {Trip} from './trip';
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUTEService {

  private basePath = 'users/';
  private tripPath = '/trips';
  private eventPath = '/events';
  private userId: string;
  private tripId: string;
  private eventId: string;

  private usersRef: AngularFireList<any>;
  private userRef: AngularFireObject<any>;

  private tripsRef: AngularFireList<any>;
  private tripRef: AngularFireObject<any>;

  private eventsRef: AngularFireList<any>;
  private eventRef: AngularFireObject<any>;

  constructor(public db: AngularFireDatabase) { }

  // Fetch all users.
  getUsers() {
    this.usersRef = this.db.list(this.basePath);
    return this.usersRef;
  }

  // set User Id
  setUserId(userid: string) {
    this.userId = userid;
  }

  // Fetch user by id
  getUser() {
    this.userRef = this.db.object(this.basePath + this.userId);
    return this.userRef;
  }

  // Fetch users by email
  getUsersByEmail(email: string) {
    this.usersRef = this.db.list(this.basePath, ref => ref.orderByChild('email').equalTo(email));
    return this.usersRef;
  }

  addUser(newUser: User): void {
    // console.log(newUser)
    this.usersRef.push({
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      trips: newUser.trips
    });
  }

  // Update a user
  updateUser(user: User) {
    this.userRef.update({
      username: user.username,
      password: user.password,
      email: user.email,
      firstname: user.firstname,
      lasname: user.lastname,
      trips: user.trips
    });
  }

  // Delete a User
  deleteUser() {
    this.userRef = this.db.object(this.basePath + this.userId);
    this.userRef.remove();
  }

  // Fetch all trips.
  getTrips() {
    this.tripsRef = this.db.list(this.basePath);
    return this.tripsRef;
  }

  // Fetch all trips by user id.
  getTripsByUserId() {
    this.tripsRef = this.db.list(this.basePath + this.userId + this.tripPath );
    return this.tripsRef;
  }

  // Set trip id
  setTripId(tripid: string) {
    this.tripId = tripid;
  }

  // Fetch trip by username
  getTrip() {
    this.tripRef = this.db.object(this.basePath + this.userId + this.tripPath + '/' + this.tripId);
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
  deleteTrip() {
    this.tripRef = this.db.object(this.basePath + this.userId + this.tripPath + '/' + this.tripId);
    this.tripRef.remove();
  }

  // Fetch all Events.
  getEvents() {
    this.eventsRef = this.db.list(this.basePath);
    return this.eventRef;
  }

  // Fetch all Events belonging to a user,trip pair .
  getEventsByUserId() {
    this.eventsRef = this.db.list(this.basePath + this.userId + this.tripPath + '/' + this.tripId + '/' + this.eventPath);
    return this.eventsRef;
  }
  // Set Event ID
  setEventId(eventid: string) {
    this.eventId = eventid;
  }
  // Fetch an event by event id
  getEvent() {
    this.eventRef = this.db.object(this.basePath + this.userId + this.tripPath + '/' + this.tripId + this.eventPath + '/' + this.eventId);
    return this.eventRef;
  }

  // Add a new Event
  addEvent(newEvent: Event): void {
    this.eventsRef.push({
      date: newEvent.date,
      budget: newEvent.budget,
      name: newEvent.name
    });
  }

  // Update an event
  updateEvent(event: Event) {
    this.eventRef.update({
      date: event.date,
      budget: event.budget,
      name: event.name
    });
  }

  // Delete an event
  deleteEvent() {
    this.eventRef = this.db.object(this.basePath + this.userId + this.tripPath + '/' + this.tripId + this.eventPath + '/' + this.eventId);
    this.eventRef.remove();
  }
}
