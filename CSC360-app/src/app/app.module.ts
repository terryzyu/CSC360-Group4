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
import { CalendarComponent } from './calendar/calendar.component';
import { EventAddComponent } from './event-add/event-add.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { EditTripComponent } from './edit-trip/edit-trip.component';


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
    BudgetComponent,
    CalendarComponent,
    EventAddComponent,
    CalendarComponent,
    EditTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
