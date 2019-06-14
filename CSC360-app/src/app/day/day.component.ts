import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BudgetComponent } from '../budget/budget.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { Events } from '../events';
import { EVENTS } from '../mock-events';
import { FirebaseUTEService } from '../firebase-ute.service';
import { getEventsInPeriod } from 'calendar-utils';
import { DateAdapter } from 'angular-calendar';
import { ClickDirective } from 'angular-calendar/modules/common/click.directive';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {


  //EventsList: Observable<Event[]>([]);
  public EventsListObservable = new Observable<Event[]>();
  public EventsList:AngularFireList<any>;
  public EventDates:Date[] = [];
  public EventNames:String[] = [];
  public MatchingDates:Date[];

  public router : Router;
  public userClicked_Day:number;
  public userClicked_Month:number;


  public dateClicked:Date;
  public year:number = 2019;

  constructor(private location: Location, private fbs:FirebaseUTEService, public r: Router) {
    this.router = r;
    this.userClicked_Month = this.router.getCurrentNavigation().extras.state.month;
    console.log(this.router.getCurrentNavigation().extras.state.month);
    console.log(this.userClicked_Month);
    this.userClicked_Day = this.router.getCurrentNavigation().extras.state.day;
    console.log(this.userClicked_Day);
    console.log(this.router.getCurrentNavigation().extras.state.day);


    this.dateClicked = new Date(this.year , this.userClicked_Month - 1, this.userClicked_Day, 19 );

    console.log("Date clicked: " + this.dateClicked);


    
  }

  ngOnInit() {
    this.EventsListObservable = this.fbs.getEventsByUserId().valueChanges();
    //this.EventsList = this.fbs.getEventsByUserId();
    
    
    this.EventsListObservable.subscribe(events => {
      console.log(events);
      for(var i = 0; i < events.length; i++){
        console.log(events[i].name);
        this.EventNames.push(events[i].name);

        var iDate = new Date(events[i].date);
        console.log(iDate);
        this.EventDates.push(iDate);

        if(this.dateClicked === iDate){
          this.MatchingDates.push(iDate)
        }

        
      }
    });

  }
   
  goBack() {
    this.location.back();
  }
}
