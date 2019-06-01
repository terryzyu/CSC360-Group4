import { Component, OnInit } from '@angular/core';

import {TripService} from '../trip.service';
import { Trip } from '../trip';
import { Location } from '@angular/common';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewtripComponent implements OnInit {
  tripDate = 'May-32-2019';
  newTrip: Trip = new Trip( );
  constructor(private tripService: TripService,
              private location: Location) { }

  ngOnInit() {
    this.newTrip.startDate.setFullYear(1970, 0, 1);
    this.newTrip.endDate.setFullYear(1970, 0, 2);
  }

  onSubmit(): void {
    this.tripService.addTrip(this.newTrip);
    this.location.back();
  }

}
