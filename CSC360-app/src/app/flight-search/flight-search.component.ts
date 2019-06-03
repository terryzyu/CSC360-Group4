import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  cities: String[] = null;
  //timeCount = 1;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  refreshCities(event) {
    // TODO: update data on timeout
    //if (this.timeCount % 2 == 0) {

      this.cityService.refreshCities(event.target.value);
      this.cities = this.cityService.getCities();
      //this.timeCount = 1;

    /*} else {

      this.timeCount += 1;
    }*/
  }
}
