import { Component, OnInit } from '@angular/core';
import { CityService, City } from '../city.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  cities: string[];
  search: City;
  error: any;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  refreshCities(event) {

    this.cityService.refreshCities(event.target.value).subscribe(( data: City ) => {
      this.search = {...data};
      console.log(this.search);
    
      var i: number;
      var size: number = Math.min(10, this.search.totalResultsCount);

      this.cities = new Array(size);

      for (i = 0; i < size; i++){
        this.cities[i] = this.search.geonames[i].name + ", " + this.search.geonames[i].adminName1;
      }
    },
    error => this.error = error);
  }
}
