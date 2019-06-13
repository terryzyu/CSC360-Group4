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
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  //EventsList: Observable<Event[]>([]);
  public EventsList = new Observable<Event[]>();
  XEVENTS = [1,2,3];
  public router : Router;
  public userClicked_Day:number;
  public userClicked_Month:number;

  constructor(private location: Location, private fbs:FirebaseUTEService, public r: Router) {
    this.router = r;
    this.userClicked_Month = this.router.getCurrentNavigation().extras.state.month;
    console.log(this.router.getCurrentNavigation().extras.state.month);
    this.userClicked_Day = this.router.getCurrentNavigation().extras.state.day;
    console.log(this.router.getCurrentNavigation().extras.state.day);
  }

  ngOnInit() {
    this.EventsList = this.fbs.getEventsByUserId().valueChanges();


  }
   
  goBack() {
    this.location.back();
  }
}
