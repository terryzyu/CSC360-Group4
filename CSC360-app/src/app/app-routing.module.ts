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

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'mytrips', component: MyTripsComponent},
  {path: ':tripName/triphome', component: TriphomeComponent},
  {path: 'newtrip', component: NewtripComponent},
  {path: 'flight-results', component: FlightResultsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
