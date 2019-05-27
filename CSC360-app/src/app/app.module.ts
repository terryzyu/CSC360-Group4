import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
import { DayComponent } from './day/day.component';

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
    DayComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule,
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule
  ],
  providers: [],
  exports: [CalendarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
