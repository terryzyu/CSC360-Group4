import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import {EVENTS} from '../mock-events';
import {EventsService} from '../events.service';
import {nextContext} from '@angular/core/src/render3';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  Events = EVENTS;

  constructor(private eventsService: EventsService,
              private location: Location) { }

  ngOnInit() {
    this.getEvents();
  }

  private getEvents() {
    this.eventsService.getEvents().subscribe(event => this.Events = event);
  }

  goBack() {
    this.location.back();
  }
}
