import { getInjectionTokens } from '@angular/core/src/render3/discovery_utils';
import { Injectable } from '@angular/core';

//@Injectable()
export class MockCities {

    //constructor(private http: Http) {}

    CITIES: String[] = null;

    getCities() {
        return this.CITIES;
    }

    refreshCities(entry: String) {

        // TODO call to geonames for data
        // https://www.geonames.org/export/

        /*
        this.http
        .get("api.geonames.org/searchJSON?name_startsWith=" + entry + "&featureClass=P&username=" + <username>)
        .toPromise()
        .then(response => response.json().data as String[])
        .catch(this.handleError);
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
}
