import { Component, OnInit } from '@angular/core';

import {TripService} from '../trip.service';
import {Trip} from '../trip';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MyTripsComponent implements OnInit {
  trips: Trip[];
  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips()
      .subscribe(trip => this.trips = trip);
  }
}
