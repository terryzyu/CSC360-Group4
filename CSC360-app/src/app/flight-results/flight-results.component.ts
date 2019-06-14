import { Component, OnInit } from '@angular/core';
import {AngularFireList} from '@angular/fire/database';
import { Router, ActivatedRoute} from '@angular/router';
import {FirebaseUTEService} from '../firebase-ute.service';
import {Flight} from '../flight';
import { Trip } from '../trip';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent implements OnInit {
  default = 'Airlines';
  americanA = 'American Airlines';
  spirit = 'Spirit Airlines';
  united = 'United Airlines';
  delta = 'Delta Airlines';
  constructor(private route: ActivatedRoute,
    private fbUTEService: FirebaseUTEService,
    private router: Router) { }

  ngOnInit() {
  }

  addFlightToTrip(flightNumber: string, tripID) {
    this.fbUTEService.setFlightID(flightNumber);
    this.router.navigate([`/flights/${flightNumber}`]);
  }

}
