import { Component, OnInit } from '@angular/core';

import {TripService} from '../trip.service';
import {Trip} from '../trip';
import {AngularFireList} from '@angular/fire/database';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MyTripsComponent implements OnInit {
  p = 1;
  trips: Trip[];
  hideWhenNoTrips = false;
  noTrips = false;
  preLoader = true;
  userName: string;

  constructor(private route: ActivatedRoute,
              private tripService: TripService) { }

  ngOnInit() {
    this.getUserName();
    this.dataState();
    let t = this.tripService.getTrips();
    t.snapshotChanges().subscribe( data => {
      this.trips = [];
      data.forEach( item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        let b = a as Trip;
        if (b.user === 'ggk') { this.trips.push(b); }
      });
    });
  }
  // Grap username from route.
  getUserName(): void {
    this.userName = this.route.snapshot.paramMap.get('username');
  }
  dataState() {
    this.tripService.getTrips().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoTrips = false;
        this.noTrips = true;
      } else {
        this.hideWhenNoTrips = true;
        this.noTrips = false;
      }
    });
}
// Method to delete student object
  deleteStudent(student) {
    if (window.confirm('Are sure you want to delete this Trip ?')) { // Asking from user before Deleting student data.
    this.tripService.deleteTrip(student.$key); // Using Delete student API to delete student.
    }
  }
}
