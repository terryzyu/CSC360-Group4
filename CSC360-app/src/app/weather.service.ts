import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

export interface Weather {
  coord: {
    lon: number;
    lat: number
  };
  weather: [{
    'id': number;
    'main': string;
    'description': string;
    'icon': string;
  }];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: { all: number; };
  rain: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  sys: {
    'type': number;
    'id': number;
    'message': number;
    'country': string;
    'sunrise': number;
    'sunset': number;
  };
  id: number;
  name: string;
  cod: number;
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  key = '&APPID=5fb286a33f1c8d84830325f461ad24f5';
  baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  Url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5fb286a33f1c8d84830325f461ad24f5';
  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string) {
    console.log(this.baseUrl + city + this.key)
    return this.http.get<Weather>(this.baseUrl + city + this.key)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if ( error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occured:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
     }

    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}
