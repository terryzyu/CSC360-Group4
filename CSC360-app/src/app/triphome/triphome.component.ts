import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';

import { Trip } from '../trip';
import { Weather, WeatherService} from '../weather.service';
import { FirebaseUTEService} from '../firebase-ute.service';


@Component({
  selector: 'app-triphome',
  templateUrl: './triphome.component.html',
  styleUrls: ['./triphome.component.css']
})

export class TriphomeComponent implements OnInit {
  mytrip: Trip;
  weather: Weather;
  tripID: string;
  error: any;
  userName: string;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private weatherService: WeatherService,
              private fbUTEService: FirebaseUTEService) { }

  ngOnInit() {
    this.getUserName();
    this.getTrip();
  }

  getUserName(): void {
    this.userName = this.route.snapshot.paramMap.get('username');
  }

  getTrip(): void {
    this.tripID = this.route.snapshot.paramMap.get('tripid');
    this.fbUTEService.getTrip().valueChanges()
    .subscribe(data => {this.mytrip = data as Trip; this.getWeather(); }, error => this.error = error);
  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.mytrip.location)
      .subscribe(( data: Weather ) => this.weather = {...data},
        error => this.error = error);
  }

  // Method to delete student object
  deleteTrip() {
    if (window.confirm('Are sure you want to delete this Trip ?')) { // Asking from user before Deleting student data.
      this.fbUTEService.deleteTrip(); // Using Delete student API to delete student.
    }
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
