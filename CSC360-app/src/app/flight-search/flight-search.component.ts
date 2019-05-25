import { Component, OnInit } from '@angular/core';
import { MockCities } from '../mock-cities';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  CITIES = new MockCities();
  cities = this.CITIES.getCities();

  constructor() { }

  ngOnInit() {
  }

  refreshCities() {
    // TODO: set up timer to check if user is finished typing
  }

}
