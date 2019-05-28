import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BudgetComponent } from '../budget/budget.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { Events } from '../events';
import { EVENTS } from '../mock-events';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  EventsList: Events[] ;

  constructor(private location: Location) {}

  ngOnInit() {
    this.EventsList = EVENTS;
    this.EventsList.push(new Events(new Date("5/31/2019"), 2700, "Arcade"))
  }
  

  goBack() {
    this.location.back();
  }
}
