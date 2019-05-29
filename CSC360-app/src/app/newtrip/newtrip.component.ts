import { Component, OnInit } from '@angular/core';

import {TripService} from '../trip.service';
import { Trip } from '../trip';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewtripComponent implements OnInit {
  tripDate = 'May-32-2019';
  // @ts-ignore
  newTrip: Trip = new Trip( );
  userName: string;
  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private location: Location) { }

  ngOnInit() {
    this.getUserName();
    this.newTrip.startDate.setFullYear(1970, 0, 1);
    this.newTrip.endDate.setFullYear(1970, 0, 2);
  }

  getUserName(): void {
    this.userName = this.route.snapshot.paramMap.get('username');
    console.log(this.userName);
}

  onSubmit(): void {
    this.tripService.addTrip(this.newTrip);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

}
