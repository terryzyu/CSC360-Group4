import { Component, OnInit } from '@angular/core';

import {TripService} from '../trip.service';
import { Trip } from '../trip';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {City, CityService} from '../city.service';


@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewtripComponent implements OnInit {

  // @ts-ignore
  newTrip: Trip = new Trip( );
  error: any;
  cities: string[];
  search: City;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fbUTEService: FirebaseUTEService,
    private cityService: CityService) { }


  ngOnInit() {
    this.newTrip.startDate.setFullYear(1970, 0, 1);
    this.newTrip.endDate.setFullYear(1970, 0, 2);
  }

  onSubmit(): void {
    this.tripService.addTrip(this.newTrip);
    this.location.back();
  }

  refreshCities(event) {
    // TODO: update data on timeout

    this.cityService.refreshCities(event.target.value).subscribe(( data: City ) => {
        this.search = {...data};
        console.log(this.search);

        let i: number;
        const size: number = Math.min(10, this.search.totalResultsCount);

        this.cities = new Array(size);

        for (i = 0; i < size; i++) {
          this.cities[i] = this.search.geonames[i].name + ', ' + this.search.geonames[i].adminName1;
        }
      },
      error => this.error = error);
  }

}
