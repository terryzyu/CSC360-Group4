import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyTripsComponent } from './mytrips/mytrips.component';

import { AppRoutingModule } from './app-routing.module';
import { TriphomeComponent } from './triphome/triphome.component';
import { NewtripComponent } from './newtrip/newtrip.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';
import { LoginComponent } from './login/login.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MyTripsComponent,
    TriphomeComponent,
    NewtripComponent,
    FlightResultsComponent,
    LoginComponent,
    FlightSearchComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
