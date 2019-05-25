import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Trip } from '../trip';
import { TripService} from '../trip.service';
import { Weather, WeatherService} from '../weather.service';



@Component({
  selector: 'app-triphome',
  templateUrl: './triphome.component.html',
  styleUrls: ['./triphome.component.css']
})

export class TriphomeComponent implements OnInit {
  mytrip: Trip;
  weather: Weather;
  error: any;

  constructor(private route: ActivatedRoute,
              private tripService: TripService,
              private weatherService: WeatherService) { }

  ngOnInit() {
    this.getTrip();
    this.getWeather();
  }

  getTrip(): void {
    const tripName = this.route.snapshot.paramMap.get('tripName');
    // this.tripService.getTrip(tripName)
    //  .subscribe(trip => this.mytrip = trip);
  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.mytrip.location)
      .subscribe(( data: Weather ) => this.weather = {...data},
        error => this.error = error);
  }
}
