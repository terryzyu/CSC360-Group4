import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyTripsComponent} from './mytrips/mytrips.component';
import {HomepageComponent} from './homepage/homepage.component';
import {TriphomeComponent} from './triphome/triphome.component';
import {NewtripComponent} from './newtrip/newtrip.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'mytrips', component: MyTripsComponent},
  {path: 'triphome', component: TriphomeComponent},
  {path: 'newtrip', component: NewtripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
