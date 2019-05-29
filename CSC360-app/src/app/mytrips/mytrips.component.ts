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
    let t = this.tripService.getTripsByUserId('-Lg0ir26GSjcH6BE5LBE');
    t.snapshotChanges().subscribe( data => {
      this.trips = [];
      data.forEach( item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.trips.push(a as Trip);
      });
    });
  }
  // Grap username from route.
  getUserName(): void {
    this.userName = this.route.snapshot.paramMap.get('username');
  }
  dataState() {
    this.tripService.getTripsByUserId('-Lg0ir26GSjcH6BE5LBE').valueChanges().subscribe(data => {
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
}
