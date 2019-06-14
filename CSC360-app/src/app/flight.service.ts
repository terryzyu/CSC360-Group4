import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private basePath = '/flight-results';
  private flightPath = '/flights';

  private flightsReference: AngularFireList<any>;
  private flightReference: AngularFireObject<any>;
  constructor(public db: AngularFireDatabase) { }

  getFlights() {
    this.flightsReference = this.db.list(this.basePath);
    return this.flightsReference;
  }

}
