import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BudgetComponent } from '../budget/budget.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { Event } from '../event';
import { EVENTS } from '../mock-events';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  EventsList: Event[] ;

  constructor(private location: Location) {}

  ngOnInit() {
    this.EventsList = EVENTS;
    this.EventsList.push(new Event(111, new Date(4, 31, 2019), 2700, 'Arcade'));
  }


  goBack() {
    this.location.back();
  }
}
