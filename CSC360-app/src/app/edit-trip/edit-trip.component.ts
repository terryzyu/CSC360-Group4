import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FirebaseUTEService} from '../firebase-ute.service';
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
              private location: Location,
              private fbUTEService: FirebaseUTEService
  ) { }

  ngOnInit() {
    this.getTrip();
  }

  getTrip(): void {
    this.fbUTEService.getTrip().valueChanges().
    subscribe(data => this.trip = data as Trip);
  }

  updateTrip(): void {
    this.fbUTEService.updateTrip(this.trip);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
