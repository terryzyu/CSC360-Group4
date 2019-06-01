import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyTripsComponent} from './mytrips/mytrips.component';
import {HomepageComponent} from './homepage/homepage.component';
import {TriphomeComponent} from './triphome/triphome.component';
import {NewtripComponent} from './newtrip/newtrip.component';
import {FlightResultsComponent} from './flight-results/flight-results.component';
import { LoginComponent } from './login/login.component';
import {BudgetComponent} from './budget/budget.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import {EditTripComponent} from './edit-trip/edit-trip.component';
import {EventAddComponent} from './event-add/event-add.component';
import {NewUserComponent} from './new-user/new-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'trips', component: MyTripsComponent},
  {path: 'trips/newtrip', component: NewtripComponent, pathMatch: 'full'},
  {path: 'trips/:tripName', component: TriphomeComponent},
  {path: 'trips/:tripName/edit', component: EditTripComponent},
  {path: 'flight-results', component: FlightResultsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'day', component: DayComponent},
  {path: 'event-add', component: EventAddComponent},
  {path: 'new-user', component: NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
