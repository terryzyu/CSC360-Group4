import { Component, OnInit } from '@angular/core';

import {Trip} from '../trip';
import {AngularFireList} from '@angular/fire/database';
import { Router, ActivatedRoute} from '@angular/router';
import {FirebaseUTEService} from '../firebase-ute.service';
import {User} from '../user';

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

  constructor(private route: ActivatedRoute,
              private fbUTEService: FirebaseUTEService,
              private router: Router) { }

  ngOnInit() {
    this.dataState();
    // this.fbUTEService.setUserId('-Lg0ir26GSjcH6BE5LBE')
    let t = this.fbUTEService.getTripsByUserId();
    t.snapshotChanges().subscribe( data => {
      this.trips = [];
      data.forEach( item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.trips.push(a as Trip);
      });
    });
  }

  dataState() {
    this.fbUTEService.getTripsByUserId().valueChanges().subscribe(data => {
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

  goToTrip( tripId: string, tripName: string) {
    this.fbUTEService.setTripId(tripId);
    this.router.navigate([`/trips/${tripName}`]);
  }
}
