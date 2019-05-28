import { Component, OnInit } from '@angular/core';
import { MockCities, } from '../mock-cities';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  CITIES = new MockCities();
  cities: String[] = null;
  //timeCount = 1;

  constructor() { }

  ngOnInit() {
  }

  refreshCities(event) {
    // TODO: update data on timeout
    //if (this.timeCount % 2 == 0) {

      this.CITIES.refreshCities(event.target.value);
      this.cities = this.CITIES.getCities();
      //this.timeCount = 1;

    /*} else {

      this.timeCount += 1;
    }*/
  }
}
