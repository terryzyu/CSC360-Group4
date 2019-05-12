import { Component, OnInit } from '@angular/core';
import {TRIPS} from '../mock-trips';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MyTripsComponent implements OnInit {
  trips = TRIPS;
  constructor() { }

  ngOnInit() {
  }
}
