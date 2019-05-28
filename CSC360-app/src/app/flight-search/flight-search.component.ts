import { Component, OnInit } from '@angular/core';
import { MockCities, } from '../mock-cities';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  CITIES = new MockCities();
  cities = this.CITIES.getCities();
  timeout = null;

  constructor() { }

  ngOnInit() {
  }

  refreshCities() {
    // TODO: update data on timeout
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function () {
      this.CITIES.refreshCities();
      this.cities = this.CITIES.getCities();
    }, 500);
  }
}
