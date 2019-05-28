import { getInjectionTokens } from '@angular/core/src/render3/discovery_utils';

export class MockCities {

    count = 1;

    CITIES: String[] = [
        "Dallas",
        "Paris",
        "Las Vegas",
        "Chicago",
        "New York"
    ]

    getCities() {
        return this.CITIES;
    }

    public refreshCities() {
        this.CITIES[0] = "New City " + this.count;
        this.count++;
        console.log(this.CITIES[0]);
    }
}
