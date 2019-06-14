import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface City {
  totalResultsCount: number;
  geonames: [{
    adminCode1: string;
    lng: string;
    geonameId: number;
    toponomyName: string;
    countryId: string;
    fcl: string;
    population: number;
    countryCode: string;
    name: string;
    fclName: string;
    adminCodes1: {
      ISO3166_2: string;
    }
    countryName: string;
    fcodeName: string;
    adminName1: string;
    lat: string;
    fcode: string;
  }]
}

@Injectable({
  providedIn: 'root'
})
export class CityService {

  //baseURL = "http://api.geonames.org/searchJSON?name=";
  baseURL = "http://api.geonames.org/searchJSON?q=";
  accountURL = "&isNameRequired=true&featureClass=P&orderby=relevance&username=wascollege"

  search: City;
  error: Error;

  constructor(private http: HttpClient) { }

  refreshCities(entry: String) {
    
    return this.http
    .get<City>(this.baseURL + entry + this.accountURL)
    .pipe(catchError(this.handleError));
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
