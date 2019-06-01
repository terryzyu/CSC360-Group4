import { Component, OnInit } from '@angular/core';

import {FirebaseUTEService} from '../firebase-ute.service';
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
    private location: Location,
    private fbUTEService: FirebaseUTEService) { }

  ngOnInit() {
    this.newTrip.startDate.setFullYear(1970, 0, 1);
    this.newTrip.endDate.setFullYear(1970, 0, 2);
  }

  onSubmit(): void {
    this.fbUTEService.addTrip(this.newTrip);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

}
