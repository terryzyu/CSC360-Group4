import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  CITIES: String[] = null;

  getCities() {
      return this.CITIES;
  }

  refreshCities(entry: String) {

    // TODO call to geonames for data
    // https://www.geonames.org/export/

  
    console.log(this.http
    .get<any>("api.geonames.org/searchJSON?name_startsWith=" + entry + "&featureClass=P&username=wascollege")
    .pipe(catchError(this.handleError)))
    
    /*
    .toPromise()
    .then(response => response.json().data as String[])
    .catch(this.handleError));
    */
    

    this.CITIES = [
      "Dallas",
      "Paris",
      "Las Vegas",
      "Chicago",
      "New York",
      "New Orleans",
      "Denver",
      "Tokyo",
      "Seattle",
      "Boston",
      "Shanghai",
      "Prague",
      "Amsterdam",
      "London",
      "Orlando",
      "Miami"
    ]
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
