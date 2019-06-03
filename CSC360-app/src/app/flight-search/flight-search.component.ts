import { Component, OnInit } from '@angular/core';
import { CityService, City } from '../city.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  cities: String[] = null;
  search: City;
  error: Error;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  refreshCities(event) {
    // TODO: update data on timeout

    this.cityService.refreshCities(event.target.value)/*.subscribe(( data: City ) => this.search = {...data},
    error => this.error = error);
    
    console.log(this.search);
    
    this.cities = String[this.search.totalResultsCount]

    var i: number;

    for (i = 0; i < this.search.totalResultsCount; i++){
      this.cities[i] = this.search.geonames[i].name
    }
    */
  }
}
