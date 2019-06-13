import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BudgetComponent } from '../budget/budget.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { Event } from '../event';
import { EVENTS } from '../mock-events';
import { FirebaseUTEService } from '../firebase-ute.service';
import { getEventsInPeriod } from 'calendar-utils';
import { DateAdapter } from 'angular-calendar';
import { ClickDirective } from 'angular-calendar/modules/common/click.directive';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  //EventsList: Observable<Event[]>([]);
  private EventsList = new Observable<Event[]>();
  XEVENTS = [1,2,3];
  private router : Router;
  constructor(private location: Location, private fbs:FirebaseUTEService, private r: Router) {
    this.router = r;
    console.log(this.router.getCurrentNavigation().extras.state.month);
    console.log(this.router.getCurrentNavigation().extras.state.day);
  }

  ngOnInit() {
    this.EventsList = this.fbs.getEventsByUserId().valueChanges();

  }
   
  goBack() {
    this.location.back();
  }
}
