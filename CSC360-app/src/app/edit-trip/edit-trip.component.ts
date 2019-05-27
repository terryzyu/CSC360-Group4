import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TripService} from '../trip.service';
import {Location} from '@angular/common';
import {Trip} from '../trip';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  userName: string;
  trip: Trip;
  tripId: string;

  constructor(private route: ActivatedRoute,
              private tripService: TripService,
              private location: Location
  ) { }

  ngOnInit() {
    this.getUserName();
    this.getTrip();
  }

  getUserName(): void {
    this.userName = this.route.snapshot.paramMap.get('username');
  }

  getTrip(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripid');
    this.tripService.getTrip(this.tripId).valueChanges().
    subscribe(data => this.trip = data as Trip);
  }

  updateTrip(): void {
    this.trip.user = this.userName;
    this.tripService.updateTrip(this.trip);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
